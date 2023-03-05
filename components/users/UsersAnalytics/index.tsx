import Icon from "@/components/global/icons";

const UsersAnalytics = () => {
	const analyticsData = [
		{
			label: "Users",
			icon: <Icon.AllUsersIcon />,
			count: "2,453",
		},
		{
			label: "Active Users",
			icon: <Icon.ActiveUsersIcon />,
			count: "2,453",
		},
		{
			label: "Users with Loans",
			icon: <Icon.UsersWithLoansIcon />,
			count: "12,453",
		},
		{
			label: "Users with Savings",
			icon: <Icon.UsersWithSavingsIcon />,
			count: "102,453",
		},
	];

	return (
		<div className='grid sm:grid-cols-2 xl:grid-cols-4 mt-5 lg:mt-10 gap-6'>
			{analyticsData.map((data) => {
				return (
					<div
						className='p-4 lg:p-8 lg:pt-5 bg-white box-shadow rounded border border-[#213f7d0f]'
						key={data.label}>
						<div className='mb-[14px]'>{data.icon}</div>
						<div className='font-medium mb-3 text-sm text-tc-light uppercase'>
							{data.label}
						</div>
						<div className='font-semibold text-2xl text-tc-dark'>
							{data.count}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default UsersAnalytics;
