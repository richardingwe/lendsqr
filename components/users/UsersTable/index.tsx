import Icon from "@/components/global/icons";
import StatusPill from "@/components/global/StatusPill";

const UsersTable = () => {
	const tableHead = [
		{
			label: "organization",
		},
		{
			label: "Username",
		},
		{
			label: "Email",
		},
		{
			label: "Phone number",
		},
		{
			label: "Date joined",
		},
		{
			label: "Status",
		},
		{
			label: "",
			type: "action",
		},
	];

	const tableData = [
		{
			organization: "Lendsqr",
			username: "Adedeji",
			email: "adedeji@lendsqr.com",
			phoneNumber: "08078903721",
			dateJoined: "May 15, 2020 10:00 AM",
			status: "Inactive",
		},
		{
			organization: "Irorun",
			username: "Debby Ogana",
			email: "debby2@irorun.com",
			phoneNumber: "08160780928",
			dateJoined: "Apr 30, 2020 10:00 AM",
			status: "Pending",
		},
		{
			organization: "Lendstar",
			username: "Grace Effiom",
			email: "grace@lendstar.com",
			phoneNumber: "07060780922",
			dateJoined: "Apr 30, 2020 10:00 AM",
			status: "Blacklisted",
		},
		{
			organization: "Lendsqr",
			username: "Tosin Dokunmu",
			email: "tosin@lendsqr.com",
			phoneNumber: "07003309226",
			dateJoined: "Apr 10, 2020 10:00 AM",
			status: "Active",
		},
		{
			organization: "Lendsqr",
			username: "Adedeji",
			email: "adedeji@lendsqr.com",
			phoneNumber: "08078903721",
			dateJoined: "May 15, 2020 10:00 AM",
			status: "Inactive",
		},
		{
			organization: "Irorun",
			username: "Debby Ogana",
			email: "debby2@irorun.com",
			phoneNumber: "08160780928",
			dateJoined: "Apr 30, 2020 10:00 AM",
			status: "Pending",
		},
		{
			organization: "Lendstar",
			username: "Grace Effiom",
			email: "grace@lendstar.com",
			phoneNumber: "07060780922",
			dateJoined: "Apr 30, 2020 10:00 AM",
			status: "Blacklisted",
		},
		{
			organization: "Lendsqr",
			username: "Tosin Dokunmu",
			email: "tosin@lendsqr.com",
			phoneNumber: "07003309226",
			dateJoined: "Apr 10, 2020 10:00 AM",
			status: "Active",
		},
	];

	return (
		<section className='bg-white p-8 w-full box-shadow mt-10 border border-[#213f7d0f] rounded'>
			<table className='table-auto w-full text-tc-light'>
				<thead>
					<tr>
						{tableHead.map((item, index) => {
							return (
								<th key={item.label + index}>
									<div className='flex space-x-2'>
										<span className='text-xs font-semibold uppercase'>
											{item.label}
										</span>
										{item.label && <Icon.FilterResultsIcon />}
									</div>
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					<tr>
						<div className='mt-5' />
					</tr>
					{tableData.map((item, index) => {
						return (
							<tr className='py-5 border-b border-[#213f7d1a]'>
								{Object.keys(item).map((key, index) => {
									return (
										<td key={key + index}>
											{key !== "status" ? (
												<div className='py-5'>
													<span className='text-sm'>{item[key]}</span>
												</div>
											) : (
												<StatusPill status={item[key]} />
											)}
										</td>
									);
								})}
								<td>
									<button className='flex items-center justify-center'>
										<Icon.MoreActionIcon />
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</section>
	);
};

export default UsersTable;
