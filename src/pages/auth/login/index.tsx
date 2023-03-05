import LoginForm from "@/components/auth/LoginForm";
import AuthLayout from "@/layouts/AuthLayout";
import type { ReactElement } from "react";
import { NextPageWithLayout } from "../../_app";

const LoginPage: NextPageWithLayout = () => {
	return (
		<section className='w-full max-w-[447px] mx-auto font-AvenirNext'>
			<div className='space-y-3 text-center xl:text-left mt-10 lg:mt-0'>
				<h1 className='text-primary text-[40px] font-bold'>Welcome!</h1>
				<p className='text-tc-light text-xl'>Enter details to login.</p>
			</div>

			<LoginForm />
		</section>
	);
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
	return <AuthLayout title='Lendsqr | Login'>{page}</AuthLayout>;
};

export default LoginPage;
