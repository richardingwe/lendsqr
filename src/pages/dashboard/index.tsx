import DashboardLayout from "@/layouts/DashboardLayout";
import type { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const DashboardPage: NextPageWithLayout = () => {
	return <section></section>;
};

DashboardPage.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout title='Lendsqr | Dashboard'>{page}</DashboardLayout>;
};

export default DashboardPage;
