import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

const LoginForm = () => {
	const router = useRouter();

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
		router.push("/");
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className='w-full'>
				<div className='space-y-4'>
					<Input
						type='email'
						name='email'
						focused
						label='Email Address'
						rules={["required", "email"]}
						placeholder='E.g Wale@Azaman.com'
					/>
					<Input
						type='password'
						name='password'
						label='Password'
						placeholder='Password'
						rules={["required"]}
					/>
				</div>
				<div className='mt-5 flex items-center justify-end'>
					<Link
						href='/auth/forgot-password'
						className='text-primary capitalize font-bold leading-6'>
						I forgot my password!
					</Link>
				</div>
				<Button
					className='w-full xl:w-[200px] mt-32 lg:mt-16'
					loading={false}
					disabled={!isValid}
					type='submit'>
					login
				</Button>
				<div className='mt-7 text-center xl:text-left text-tc-main'>
					Don’t have an account?{" "}
					<Link
						href='/auth/signup'
						className='text-primary capitalize font-bold leading-6'>
						Signup
					</Link>
				</div>
			</form>
		</FormProvider>
	);
};

export default LoginForm;
