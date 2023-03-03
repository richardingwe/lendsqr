import DashboardLayout from "@/layouts/DashboardLayout";
import type { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const UsersPage: NextPageWithLayout = () => {
	return <div>UsersPage</div>;
};

UsersPage.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout title='Lendsqr | Dashboard'>{page}</DashboardLayout>;
};

export default UsersPage;
