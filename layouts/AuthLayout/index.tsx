import { LogoIcon } from "@/components/global/icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

type AuthLayoutProps = {
	title: string;
	children: React.ReactNode;
};

const AuthLayout = ({ children, title = "Lendsqr" }: AuthLayoutProps) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<section className='flex w-full h-screen items-center bg-white'>
				<aside className='w-1/2 h-full'>
					<section className='py-28 pl-20'>
						<div className='ml-4'>
							<LogoIcon />
						</div>
						<Image
							src='/assets/images/auth-aside-svg.svg'
							priority
							width={634.2}
							height={696}
							alt={""}
							className='absolute top-1/2 transform -translate-y-1/2'
						/>
					</section>
				</aside>
				<main className='w-1/2 h-full auth-shadow pt-56 px-[100px]'>
					{children}
				</main>
			</section>
		</>
	);
};

export default AuthLayout;
