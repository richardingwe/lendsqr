import Dropdown from "@/components/global/Dropdown";
import Icon from "@/components/global/icons";
import StatusPill from "@/components/global/StatusPill";
import { cn, formatDate } from "@/helpers/utils";
import { UsersResponse } from "@/types/services/users";
import Link from "next/link";
import { useEffect, useState } from "react";
import UsersFilter from "../UsersFilter";

const UsersTable = ({ data }: { data: UsersResponse }) => {
	const [tableData, setTableData] = useState([]);
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

	useEffect(() => {
		if (data) {
			let formattedData = data.map((user) => {
				const {
					orgName: organization,
					userName: username,
					email,
					phoneNumber,
					createdAt: dateJoined,
				} = user;
				return {
					organization,
					username,
					email,
					phoneNumber,
					dateJoined: formatDate(dateJoined),
					status: "Active",
				};
			});
			setTableData(formattedData);
		}
	}, [data]);

	return (
		<>
			<section className='bg-white p-8 w-full box-shadow mt-10 border border-[#213f7d0f] rounded'>
				<table className='table-auto w-full text-tc-light'>
					<thead>
						<tr>
							{tableHead.map((item, index) => {
								return (
									<th key={item.label + index}>
										<Dropdown
											className='left-0'
											trigger={
												<button className='flex space-x-2'>
													<span className='text-xs font-semibold uppercase'>
														{item.label}
													</span>
													{item.label && <Icon.FilterResultsIcon />}
												</button>
											}>
											<UsersFilter />
										</Dropdown>
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
										<Dropdown
											className='right-0'
											trigger={
												<button className='flex items-center justify-center'>
													<Icon.MoreActionIcon />
												</button>
											}>
											<div className='w-[180px] bg-white rounded box-shadow text-sm py-2.5 text-tc-light'>
												<Link
													href='/users/1'
													className='flex w-full items-center hover:bg-[#39cdcc0f] space-x-2 px-5 py-2.5'>
													<Icon.ViewIcon />
													<span>View Details</span>
												</Link>
												<button className='flex w-full items-center hover:bg-[#39cdcc0f] space-x-2 px-5 py-2.5'>
													<Icon.BlacklistIcon />
													<span>Blacklist User</span>
												</button>
												<button className='flex w-full items-center hover:bg-[#39cdcc0f] space-x-2 px-5 py-2.5'>
													<Icon.ActivateIcon />
													<span>Activate User</span>
												</button>
											</div>
										</Dropdown>
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
