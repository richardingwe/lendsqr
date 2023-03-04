import DashboardLayout from "@/layouts/DashboardLayout";
import type { ReactElement } from "react";
import { NextPageWithLayout } from "../../_app";

const UsersPage: NextPageWithLayout = () => {
	return (
		<section>
			<h1 className='text-primary font-medium text-2xl'>Users</h1>
		</section>
	);
};

UsersPage.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout title='Lendsqr | User'>{page}</DashboardLayout>;
};

export default UsersPage;
