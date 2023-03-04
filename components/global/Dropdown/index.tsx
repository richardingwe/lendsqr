import listenForOutsideClicks from "@/helpers/listen-for-outside-clicks";
import { cn } from "@/helpers/utils";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
	children: React.ReactNode;
	className?: string;
	trigger?: React.ReactNode;
	position?: "top" | "bottom";
};

const Dropdown = ({
	children,
	className,
	trigger,
	position = "bottom",
}: Props) => {
	const [showDropdown, setShowDropdown] = useState(false);

	const menuRef = useRef(null);

	const [listening, setListening] = useState(false);

	useEffect(
		listenForOutsideClicks(listening, setListening, menuRef, setShowDropdown)
	);

	return (
		<div
			className='relative'
			ref={menuRef}
			onClick={() => setShowDropdown(!showDropdown)}>
			{trigger}
			<div>
				{showDropdown && (
					<motion.div
						initial={{ scale: 0.5, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.1 }}
						className={cn(
							"absolute z-30 box-shadow overflow-hidden",
							className,
							position === "bottom" ? "top-[58px]" : "bottom-[53px]"
						)}>
						<div>{children}</div>
					</motion.div>
				)}
			</div>
		</div>
	);
};

export default Dropdown;
