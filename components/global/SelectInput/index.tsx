import listenForOutsideClicks from "helpers/listen-for-outside-clicks";
import { useEffect, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useUpdateEffect } from "react-use";
import { motion } from "framer-motion";
import { SelectInputProps } from "@/types/global/SelectInputProps";
import Icon from "../icons";

export const Select = <T,>({
	options,
	name,
	label,
	value,
	onChange,
	position = "bottom",
	disabled = false,
	required = false,
	optionComponent,
	optionsHeader,
	trigger,
	errors,
	onOptionSelect,
	onDropdownClose = () => {},
	className = "",
	...rest
}: SelectInputProps<T>) => {
	const [showDropdown, setShowDropdown] = useState(false);
	const [customSelectValue, setCustomSelectValue] = useState(value);

	const menuRef = useRef(null);

	const [listening, setListening] = useState(false);

	useEffect(
		listenForOutsideClicks(listening, setListening, menuRef, setShowDropdown)
	);

	useUpdateEffect(() => {
		if (!showDropdown) {
			onChange?.(customSelectValue);
			onDropdownClose();
		}
	}, [customSelectValue, showDropdown]);

	return (
		<div
			{...rest}
			className={`w-full ${
				disabled ? "pointer-events-none cursor-not-allowed" : "cursor-pointer"
			}`}>
			{label && (
				<label htmlFor={name}>
					<div
						className={`w-full font-medium text-sm h-5 text-tc-main capitalize tracking-tight text-left mb-2 ${
							disabled
								? "pointer-events-none cursor-not-allowed"
								: "cursor-pointer"
						}`}>
						{label}
					</div>
				</label>
			)}

			<div
				role={"input"}
				ref={menuRef}
				className={`relative py-3 px-4 ${
					disabled ? "bg-[#F4FEFB] pointer-events-none cursor-not-allowed" : ""
				}`}
				onClick={() => setShowDropdown(!showDropdown)}>
				<select
					id={name}
					className={`appearance-none absolute top-0 left-0 right-0 z-20 w-full py-3 px-4 border flex h-full items-center border-pc-03 bg-transparent rounded focus:border-primary outline-none ${
						disabled ? "cursor-not-allowed" : ""
					}${className}`}></select>
				<div
					className={`flex absolute z-10 top-0 left-0 right-0 items-center justify-between w-full py-3 px-4 rounded ${
						showDropdown ? "bg-pc-02" : ""
					}`}>
					{trigger(customSelectValue)}
					<div
						className={`transition-transform ${
							showDropdown ? "rotate-180" : ""
						} mr-1`}>
						<Icon.CaretDownIcon />
					</div>
				</div>
				<div className='w-full py-3 px-4'>
					{showDropdown && (
						<motion.div
							initial={{ scale: 0.5, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.1 }}
							className={`absolute w-full ${
								position === "bottom" ? "top-[58px]" : "bottom-[53px]"
							} z-30 left-0 shadow-select-dropdown right-0 border py-0 overflow-hidden bg-white border-pc-03 rounded`}>
							<div
								onClick={(e) => e.stopPropagation()}
								className='absolute w-full top-0'>
								{optionsHeader}
							</div>
							<div
								className={`max-h-[170px] sm:max-h-[192px] overflow-y-auto ${
									optionsHeader ? "mt-[75px]" : ""
								}`}>
								{options &&
									options.map((option, i) => (
										<button
											role={"option"}
											onClick={() => {
												setCustomSelectValue(option);
												onOptionSelect && onOptionSelect(option);
											}}
											key={i}
											className='w-full text-left'>
											{optionComponent(option, customSelectValue)}
										</button>
									))}
							</div>
						</motion.div>
					)}
				</div>
			</div>
			{errors && (
				<span className='text-xs mt-2 text-status-error-100'>*{errors}</span>
			)}
		</div>
	);
};

const SelectInput = <T,>(props: SelectInputProps<T>) => {
	const { name, label, required } = props;

	const methods = useFormContext();

	const {
		control,
		formState: { errors },
	} = methods;

	return (
		<Controller
			name={name}
			control={control}
			rules={{
				required: {
					value: required,
					message: `${label || name} is required`,
				},
			}}
			render={({ field: { onChange, value } }) => (
				<Select
					onChange={onChange}
					value={value}
					{...props}
					errors={errors[name]?.message}
				/>
			)}
		/>
	);
};

export default SelectInput;
