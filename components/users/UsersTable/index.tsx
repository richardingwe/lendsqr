import Icon from "@/components/global/icons";
import StatusPill from "@/components/global/StatusPill";
import { cn } from "@/helpers/utils";

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
		{
			organization: "Lendsqr",
			username: "Adedeji",
			email: "adedeji@lendsqr.com",
			phoneNumber: "08078903721",
			dateJoined: "May 15, 2020 10:00 AM",
			status: "Inactive",
		},
	];

	return (
		<>
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
								<tr
									className={cn("py-4", {
										"border-b border-[#213f7d1a]":
											index !== tableData.length - 1,
										"pb-0": index === tableData.length - 1,
									})}
									key={index}>
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
			<section className='mt-5 flex items-center justify-between'>
				<div className='flex items-center space-x-2 text-sm text-tc-light'>
					<div>Showing</div>
					<button className='flex items-center rounded bg-[#213f7d1a] px-3 py-2 space-x-4'>
						<span className='text-tc-dark font-medium'>100</span>
						<Icon.ArrowDownIcon />
					</button>
					<div>out of 100</div>
				</div>

				<div className='flex items-center space-x-5 text-tc-light'>
					<button className='flex items-center justify-center rounded bg-[#213f7d1a] p-2 rotate-90'>
						<Icon.ArrowDownIcon />
					</button>
					<button>1</button>
					<button>2</button>
					<button>3</button>
					<button>...</button>
					<button>15</button>
					<button>16</button>
					<button className='flex items-center justify-center rounded bg-[#213f7d1a] p-2 -rotate-90'>
						<Icon.ArrowDownIcon />
					</button>
				</div>
			</section>
		</>
	);
};

export default UsersTable;
