import Icon from "@/components/global/icons";
import { navigations } from "@/data/navigationData";
import { cn } from "@/helpers/utils";
import { useActiveLink } from "hooks/useActiveLink";
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
				{navigations.map((navigation, index) => {
					return (
						<div className='space-y-2' key={navigation.sectionTitle + index}>
							<h3 className='text-xs px-8 text-tc-light font-medium'>
								{navigation.sectionTitle}
							</h3>
							<ul>
								{navigation.links.map((link, index) => {
									return (
										<li key={link.label + index}>
											<Link
												href={link.to}
												className={cn(
													"flex w-full opacity-60 hover:opacity-100 px-8 py-[10px] border-l-[3px] transition-all border-transparent hover:border-secondary hover:bg-[#39cdcc0f] items-center space-x-2",
													{
														"opacity-100 border-secondary bg-[#39cdcc0f]":
															useActiveLink(link.to),
													}
												)}>
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
