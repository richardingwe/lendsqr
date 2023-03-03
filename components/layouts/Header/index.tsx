import Button from "@/components/global/Button";
import Icon from "@/components/global/icons";
import Input from "@/components/global/Input";
import Image from "next/image";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

const Header = () => {
	const methods = useForm({
		mode: "onChange",
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const {
		formState: { errors, isValid },
	} = methods;

	/* Handle submit */
	const onSubmit: SubmitHandler<any> = async (payload, event) => {
		event?.stopPropagation();
	};
	return (
		<header className='flex items-center space-x-40 p-8 bg-white header-shadow'>
			<div className='ml-4'>
				<Icon.LogoIcon width='144.8px' />
			</div>
			<div className='w-full flex items-center justify-between'>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} className=''>
						<Input
							name='search'
							type='search'
							placeholder='Search for anything'
							className='!h-10 !w-[400px] rounded-lg placeholder-primary::placeholder'
							right={
								<div className='bg-secondary flex items-center justify-center rounded-r-lg h-10 w-14'>
									<Icon.SearchIcon />
								</div>
							}
						/>
					</form>
				</FormProvider>

				<div className='flex items-center'>
					<Button tag='a' className='mr-12'>
						Docs
					</Button>
					<button className='mr-8'>
						<Icon.NotificationIcon />
					</button>
					<button className='flex items-center'>
						<Image
							src='/assets/images/avatar.png'
							width={48}
							height={48}
							alt='User'
							className='rounded-full overflow-hidden mr-2'
						/>
						<span className='mr-1 text-primary font-medium'>Adedeji</span>
						<Icon.CaretDownIcon />
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
