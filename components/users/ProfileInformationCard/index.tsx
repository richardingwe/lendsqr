import { cn } from "@/helpers/utils";

const ProfileInformationCard = () => {
	const user = [
		{
			sectionTitle: "Personal Information",
			sections: [
				{
					title: "full Name",
					value: "Grace Effiom",
				},
				{
					title: "Phone Number",
					value: "07060780922",
				},
				{
					title: "Email Address",
					value: "grace@gmail.com",
				},
				{
					title: "Bvn",
					value: "07060780922",
				},
				{
					title: "Gender",
					value: "Female",
				},
				{
					title: "Marital status",
					value: "Single",
				},
				{
					title: "Children",
					value: "None",
				},
				{
					title: "Type of residence",
					value: "Parent’s Apartment",
				},
			],
		},
		{
			sectionTitle: "Education and Employment",
			sections: [
				{
					title: "level of education",
					value: "B.Sc",
				},
				{
					title: "employment statuss",
					value: "Employed",
				},
				{
					title: "sector of employment",
					value: "FinTech",
				},
				{
					title: "Duration of employment",
					value: "2 years",
				},
				{
					title: "office email",
					value: "grace@lendsqr.com",
				},
				{
					title: "Monthly income",
					value: "₦200,000.00- ₦400,000.00",
				},
				{
					title: "loan repayment",
					value: "40,000",
				},
			],
		},
		{
			sectionTitle: "Socials",
			sections: [
				{
					title: "Twitter",
					value: "@grace_effiom",
				},
				{
					title: "Facebook",
					value: "Grace Effiom",
				},
				{
					title: "Instagram",
					value: "@grace_effiom",
				},
			],
		},
		{
			sectionTitle: "Guarantor",
			sections: [
				{
					title: "full Name",
					value: "Debby Ogana",
				},
				{
					title: "Phone Number",
					value: "07060780922",
				},
				{
					title: "Email Address",
					value: "debby@gmail.com",
				},
				{
					title: "Relationship",
					value: "Sister",
				},
			],
		},
	];

	return (
		<section className='p-8 rounded box-shadow border border-[rgba(33, 63, 125, 0.06)] mt-8'>
			{user.map((item, index) => {
				return (
					<div
						key={item.sectionTitle + index}
						className={cn("pb-8", {
							"border-b-[0.5px] border-primary": user.length - 1 !== index,
						})}>
						<h3 className='text-primary mt-8 font-medium'>
							{item.sectionTitle}
						</h3>
						<div className='mt-8 grid grid-cols-5 gap-8'>
							{item.sections.map((section, index) => {
								return (
									<div
										className='text-tc-dark'
										key={section.title + section.value + index}>
										<div className='text-xs uppercase'>{section.title}</div>
										<div className='text-medium'>{section.value}</div>
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</section>
	);
};

export default ProfileInformationCard;
