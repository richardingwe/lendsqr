import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

const UsersFilter = () => {
	const methods = useForm({
		mode: "onChange",
		defaultValues: {
			username: "",
			email: "",
			date: "",
			organization: "",
			status: "",
		},
	});

	const {
		formState: { errors, isValid },
	} = methods;

	/* Handle submit */
	const onSubmit: SubmitHandler<unknown> = async (payload, event) => {
		event?.stopPropagation();
	};

	return (
		<div className='w-[270px] bg-white box-shadow text-sm px-5 py-8 text-tc-light border rounded border-[rgba(84, 95, 125, 0.14)]'>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} className='w-full'>
					<div className='space-y-5'>
						<Input
							name='organization'
							label='Organization'
							placeholder='Select'
							className='!h-10'
						/>
						<Input
							name='username'
							label='Username'
							placeholder='User'
							className='!h-10'
						/>
						<Input
							type='email'
							label='email'
							name='email'
							placeholder='Email'
							className='!h-10'
						/>
						<Input
							type='date'
							label='Date'
							name='date'
							placeholder='Date'
							className='!h-10'
						/>
						<Input
							type='tel'
							label='Phone Number'
							name='phoneNumber'
							placeholder='Phone Number'
							className='!h-10'
						/>
						<Input
							name='status'
							label='Status'
							placeholder='Select'
							className='!h-10'
						/>
					</div>

					<div className='w-full flex items-center space-x-[14px] mt-8'>
						<Button
							loading={false}
							className='w-full h-10'
							size='sm'
							theme='outline'
							type='reset'>
							Reset
						</Button>
						<Button
							size='sm'
							loading={false}
							theme='secondary'
							className='w-full h-10'
							disabled={!isValid}
							type='button'>
							Filter
						</Button>
					</div>
				</form>
			</FormProvider>
		</div>
	);
};

export default UsersFilter;
