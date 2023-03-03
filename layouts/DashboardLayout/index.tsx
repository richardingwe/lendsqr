import Head from "next/head";
import Header from "@/components/layouts/Header";
import Navigation from "@/components/layouts/Navigation";
import { useRouter } from "next/router";

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
	return (
		<>
			<Head>
				<title>{`Aza${title ? ` | ${title}` : ""}`}</title>
			</Head>
			<section className=''>
				<Header />
				<div className='flex'>
					<Navigation />
					<main className='mt-[112px] ml-[283px] w-full p-16'>{children}</main>
				</div>
			</section>
		</>
	);
};

export default DashboardLayout;
