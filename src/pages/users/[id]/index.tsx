import Button from "@/components/global/Button";
import GoBack from "@/components/global/GoBack";
import ProfileInformationCard from "@/components/users/ProfileInformationCard";
import ProfileTopCard from "@/components/users/ProfileTopCard";
import DashboardLayout from "@/layouts/DashboardLayout";
import { useLazyGetUserQuery } from "@/src/services/users";
import { User } from "@/types/services/users";
import { useRouter } from "next/router";
import { ReactElement, use, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { NextPageWithLayout } from "../../_app";

const UsersPage: NextPageWithLayout = () => {
	const router = useRouter();
	const [user, setUser] = useState<User>();

	const [getUser, result] = useLazyGetUserQuery();

	const { data, error, isLoading, isSuccess } = result;

	useEffect(() => {
		router.query.id &&
			getUser({
				id: Number(router.query.id),
			});
	}, [router.query.id]);

	useEffect(() => {
		if (isSuccess) {
			setUser(data);
		}
		if (error) {
			console.log(error);
		}
	}, [isSuccess, data, error]);

	return (
		<section className='mb-4'>
			<GoBack text='Back to Users' />
			<div className='mt-6 flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-between sm:items-center'>
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

			{isLoading ? (
				<div className='w-full min-h-[400px] flex items-center justify-center'>
					<ClipLoader color='#39CDCC' size={70} />
				</div>
			) : (
				<>
					<ProfileTopCard data={user} />

					<ProfileInformationCard data={user} />
				</>
			)}
		</section>
	);
};

UsersPage.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout title='Lendsqr | User'>{page}</DashboardLayout>;
};

export default UsersPage;
