import Button from "@/components/global/Button";
import Icon from "@/components/global/icons";
import Input from "@/components/global/Input";
import Image from "next/image";
import Link from "next/link";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Twirl as Hamburger } from "hamburger-react";

const Header = ({
	isOpen,
	setOpen,
}: {
	isOpen: boolean;
	setOpen: (isOpen: boolean) => void;
}) => {
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
		<header className='flex z-50 fixed top-0 left-0 right-0 items-center justify-between lg:justify-start space-x-14 xl:space-x-40 py-4 lg:py-8 lg:pl-4 lg:pr-14 bg-white header-shadow'>
			<Link onClick={() => setOpen(false)} href='/dashboard' className='ml-4'>
				<div className='hidden lg:block'>
					<Icon.LogoIcon width='144.8px' />
				</div>
				<div className='lg:hidden'>
					<Icon.MobileLogoIcon />
				</div>
			</Link>
			<div className='hidden w-full lg:flex items-center justify-between'>
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
			<div className='lg:hidden'>
				<Hamburger
					color='#0b211a'
					size={20}
					label='Show menu'
					toggled={isOpen}
					toggle={setOpen}
				/>
			</div>
		</header>
	);
};

export default Header;
