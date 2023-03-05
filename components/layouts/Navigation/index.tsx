import Icon from "@/components/global/icons";
import { navigations } from "@/data/navigationData";
import { cn } from "@/helpers/utils";
import { useActiveLink } from "hooks/useActiveLink";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const Navigation = ({
	isOpen,
	setOpen,
}: {
	isOpen: boolean;
	setOpen: (isOpen: boolean) => void;
}) => {
	return (
		<>
			<section className='hidden xl:block w-[283px] fixed left-0 overflow-scroll top-[112px] h-[calc(100vh-112px)] bg-white py-10 navigation-shadow'>
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

				<div className='mt-[70px] text-primary border-t-[0.5px] border-primary pt-[10px]'>
					<button className='flex w-full px-8 py-[10px] items-center space-x-2'>
						<Icon.LogoutIcon />
						<span>Logout</span>
					</button>

					<div className='px-8 mt-10'>v1.2.0</div>
				</div>
			</section>
			<AnimatePresence initial={false}>
				{isOpen && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1, transition: { type: "just" } }}
							exit={{
								opacity: 0,
								transition: { type: "just", delay: 0.1 },
							}}
							className='fixed top-0 left-0 right-0 bottom-0 bg-[#545f7d80]'
							onClick={() => setOpen(false)}
						/>
						<motion.section
							initial={{ x: "-100%", opacity: 0 }}
							animate={{ x: 0, opacity: 1, transition: { type: "just" } }}
							exit={{
								x: -100,
								opacity: 0,
								transition: { type: "just", delay: 0.1 },
							}}
							className='w-[283px] fixed left-0 overflow-scroll top-[80px] h-[calc(100vh-80px)] bg-white py-10 navigation-shadow'>
							<button className='flex items-center space-x-2 px-8'>
								<Icon.BriefcaseIcon />
								<span className='text-primary'>Switch Organization</span>
								<Icon.ArrowDownIcon />
							</button>

							<nav className='mt-[52px] space-y-10'>
								{navigations.map((navigation, index) => {
									return (
										<div
											className='space-y-2'
											key={navigation.sectionTitle + index}>
											<h3 className='text-xs px-8 text-tc-light font-medium'>
												{navigation.sectionTitle}
											</h3>
											<ul>
												{navigation.links.map((link, index) => {
													return (
														<li
															onClick={() => setOpen(false)}
															key={link.label + index}>
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
																<span className='text-primary'>
																	{link.label}
																</span>
															</Link>
														</li>
													);
												})}
											</ul>
										</div>
									);
								})}
							</nav>

							<div className='mt-[70px] text-primary border-t-[0.5px] border-primary pt-[10px]'>
								<button className='flex w-full px-8 py-[10px] items-center space-x-2'>
									<Icon.LogoutIcon />
									<span>Logout</span>
								</button>

								<div className='px-8 mt-10'>v1.2.0</div>
							</div>
						</motion.section>
					</>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navigation;
