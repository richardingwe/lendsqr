import Icon from "@/components/global/icons";
import { navigations } from "@/data/navigationData";
import Link from "next/link";

const Navigation = () => {
	return (
		<section className='w-[283px] fixed left-0 overflow-scroll top-[112px] h-[calc(100vh-112px)] bg-white py-10 navigation-shadow'>
			<button className='flex items-center space-x-2 px-8'>
				<Icon.BriefcaseIcon />
				<span className='text-primary'>Switch Organization</span>
				<Icon.ArrowDownIcon />
			</button>

			<nav className='mt-[52px] space-y-10'>
				{navigations.map((navigation) => {
					return (
						<div className='space-y-2'>
							<h3 className='text-xs px-8 text-tc-light font-medium'>
								{navigation.sectionTitle}
							</h3>
							<ul>
								{navigation.links.map((link) => {
									return (
										<li className=''>
											<Link
												href={link.to}
												className='flex w-full opacity-60 hover:opacity-100 px-8 py-[10px] border-l-[3px] transition-all border-transparent hover:border-secondary hover:bg-[#39cdcc0f] items-center space-x-2'>
												{link.icon}
												<span className='text-primary'>{link.label}</span>
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
			</nav>
		</section>
	);
};

export default Navigation;
