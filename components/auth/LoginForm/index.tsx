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
	const onSubmit: SubmitHandler<unknown> = async (payload, event) => {
		event?.stopPropagation();
		router.push("/");
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className='w-full mt-16'>
				<div className='space-y-6'>
					<Input
						type='email'
						name='email'
						focused
						rules={["required", "email"]}
						placeholder='E.g Wale@Azaman.com'
					/>
					<Input
						type='password'
						name='password'
						placeholder='Password'
						rules={["required"]}
					/>
				</div>
				<div className='mt-6 flex items-center'>
					<Link
						href='/auth/forgot-password'
						className='text-secondary text-xs uppercase font-semibold tracking-[0.1em]'>
						Forgot PASSWORD?
					</Link>
				</div>
				<Button
					className='w-full mt-8'
					loading={false}
					theme='secondary'
					disabled={!isValid}
					type='submit'>
					LOG IN
				</Button>
			</form>
		</FormProvider>
	);
};

export default LoginForm;
