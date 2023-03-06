import Head from "next/head";
import Header from "@/components/layouts/Header";
import Navigation from "@/components/layouts/Navigation";
import { useState } from "react";

type DashboardLayoutProps = {
	title: string;
	children: React.ReactNode;
};

export const delQuery = (asPath: string) => {
	return asPath.split("?")[0];
};

const DashboardLayout = ({
	children,
	title = "Lendsqr",
}: DashboardLayoutProps) => {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<Head>
				<title>{`Aza${title ? ` | ${title}` : ""}`}</title>
			</Head>
			<section className=''>
				<Header isOpen={isOpen} setOpen={setOpen} />
				<div className='flex'>
					<Navigation isOpen={isOpen} setOpen={setOpen} />
					<main className='mt-[80px] lg:mt-[112px] max-lg:container xl:ml-[283px] w-full pt-6 lg:p-16'>
						{children}
					</main>
				</div>
			</section>
		</>
	);
};

export default DashboardLayout;
