import Head from "next/head";
import Header from "@/components/layouts/Header";
import Navigation from "@/components/layouts/Navigation";

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
					<main className='mt-[48.55px] lg:mt-[112px] xl:ml-[283px] w-full container pt-6 lg:p-16'>
						{children}
					</main>
				</div>
			</section>
		</>
	);
};

export default DashboardLayout;
