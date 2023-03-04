import Button from "@/components/global/Button";
import GoBack from "@/components/global/GoBack";
import ProfileInformationCard from "@/components/users/ProfileInformationCard";
import ProfileTopCard from "@/components/users/ProfileTopCard";
import DashboardLayout from "@/layouts/DashboardLayout";
import type { ReactElement } from "react";
import { NextPageWithLayout } from "../../_app";

const UsersPage: NextPageWithLayout = () => {
	return (
		<section>
			<GoBack text='Back to Users' />
			<div className='mt-6 flex justify-between items-center'>
				<h1 className='text-primary font-medium text-2xl'>Users</h1>

				<div className='flex items-center space-x-5'>
					<Button
						size='sm'
						className='uppercase border-status-error-100 text-status-error-100'
						theme='outline'>
						Blacklist User
					</Button>
					<Button
						size='sm'
						className='uppercase border-secondary text-secondary'
						theme='outline'>
						Activate User
					</Button>
				</div>
			</div>

			<ProfileTopCard />

			<ProfileInformationCard />
		</section>
	);
};

UsersPage.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout title='Lendsqr | User'>{page}</DashboardLayout>;
};

export default UsersPage;
