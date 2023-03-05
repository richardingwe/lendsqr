import UsersAnalytics from "@/components/users/UsersAnalytics";
import UsersTable from "@/components/users/UsersTable";
import DashboardLayout from "@/layouts/DashboardLayout";
import { useGetUsersQuery } from "@/src/services/users";
import { User, UsersResponse } from "@/types/services/users";
import { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "../_app";

const UsersPage: NextPageWithLayout = () => {
	const [users, setUsers] = useState<User[]>();

	const { data, error, isLoading, isSuccess, isFetching } = useGetUsersQuery(
		{}
	);

	useEffect(() => {
		if (isSuccess) {
			setUsers(data);
			console.log(data);
		}
	}, [isSuccess, data, error]);

	return (
		<section>
			<h1 className='text-primary font-medium text-2xl'>Users</h1>
			<UsersAnalytics />
			<UsersTable data={data} />
		</section>
	);
};

UsersPage.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout title='Lendsqr | Users'>{page}</DashboardLayout>;
};

export default UsersPage;
