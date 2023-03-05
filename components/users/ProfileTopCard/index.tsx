import Icon from "@/components/global/icons";
import { cn } from "@/helpers/utils";
import { User } from "@/types/services/users";
import Link from "next/link";

const ProfileTopCard = ({ data }: { data: User }) => {
	const profileNavigation = [
		{
			text: "General Details",
		},
		{
			text: "Documents",
		},
		{
			text: "Bank Details",
		},
		{
			text: "Loans",
		},
		{
			text: "Savings",
		},
		{
			text: "App and System",
		},
	];

	return (
		<section className='p-8 pb-0 rounded box-shadow border border-[rgba(33, 63, 125, 0.06)] mt-10'>
			<div className='flex items-center space-x-5 mb-12'>
				<div className='p-8 rounded-full bg-[#213f7d29] w-fit'>
					<Icon.ProfileIcon />
				</div>
				<div className='flex items-center space-x-8'>
					<div className='space-y-2'>
						<div className='text-primary text-[22px] font-medium'>
							{data?.profile?.firstName} {data?.profile?.lastName}
						</div>
						<div className='text-tc-light text-sm'>{data?.accountNumber}</div>
					</div>

					<div className='px-8 py-4 border-r border-l border-tc-light space-y-2'>
						<div className='text-tc-light text-sm'>User’s Tier</div>
						<div>
							<Icon.RatingIcon />
						</div>
					</div>

					<div className='space-y-2'>
						<div className='text-primary text-[22px] font-medium'>
							₦{data?.accountBalance}
						</div>
						<div className='text-tc-light text-sm'>
							9912345678/Providus Bank
						</div>
					</div>
				</div>
			</div>

			<ul className='flex items-center justify-between'>
				{profileNavigation.map((nav, index) => {
					return (
						<li key={nav.text}>
							<Link
								href='/users/1'
								className={cn(
									"px-6 pb-2 inline-block border-b-2 border-transparent text-[rgba(0, 0, 0, 0.8)]",
									{ "border-secondary text-secondary": index === 0 }
								)}>
								{nav.text}
							</Link>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default ProfileTopCard;
