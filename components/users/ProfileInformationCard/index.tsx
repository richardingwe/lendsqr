import { cn } from "@/helpers/utils";
import { User } from "@/types/services/users";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const ProfileInformationCard = ({ data }: { data: User }) => {
	const [user, setUser] = useState([]);

	useEffect(() => {
		if (data) {
			const formattedData = [
				{
					sectionTitle: "Personal Information",
					sections: [
						{
							title: "full Name",
							value: data?.profile.firstName + " " + data?.profile.lastName,
						},
						{
							title: "Phone Number",
							value: data.phoneNumber,
						},
						{
							title: "Email Address",
							value: data.email,
						},
						{
							title: "Bvn",
							value: data.profile.bvn,
						},
						{
							title: "Gender",
							value: data.profile.gender,
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
							value: data.education.level,
						},
						{
							title: "employment statuss",
							value: data.education.employmentStatus,
						},
						{
							title: "sector of employment",
							value: data.education.sector,
						},
						{
							title: "Duration of employment",
							value: data.education.duration,
						},
						{
							title: "office email",
							value: data.education.officeEmail,
						},
						{
							title: "Monthly income",
							value: `₦${data.education.monthlyIncome[0] || 0} - ₦${
								data.education.monthlyIncome[1] || 0
							}`,
						},
						{
							title: "loan repayment",
							value: data.education.loanRepayment,
						},
					],
				},
				{
					sectionTitle: "Socials",
					sections: [
						{
							title: "Twitter",
							value: data.socials?.twitter,
						},
						{
							title: "Facebook",
							value: data.socials?.facebook,
						},
						{
							title: "Instagram",
							value: data.socials?.instagram,
						},
					],
				},
				{
					sectionTitle: "Guarantor",
					sections: [
						{
							title: "full Name",
							value: data?.guarantor.firstName + " " + data?.guarantor.lastName,
						},
						{
							title: "Phone Number",
							value: data.guarantor.phoneNumber,
						},
						{
							title: "Address",
							value: data.guarantor.address,
						},
						{
							title: "Relationship",
							value: "Sister",
						},
					],
				},
			];
			setUser(formattedData);
		}
	}, [data]);

	return (
		<section className='p-4 lg:p-8 rounded box-shadow border border-[rgba(33, 63, 125, 0.06)] mt-8'>
			{user.map((item, index) => {
				return (
					<div
						key={item.sectionTitle + index}
						className={cn("pb-2 lg:pb-8", {
							"border-b-[0.5px] border-primary": user.length - 1 !== index,
						})}>
						<h3
							className={cn("text-primary font-medium", {
								" mt-4 lg:mt-8": index !== 0,
							})}>
							{item.sectionTitle}
						</h3>
						<div className='mt-4 lg:mt-8 grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-8'>
							{item.sections.map((section, index) => {
								return (
									<div
										className='text-tc-dark'
										key={section.title + section.value + index}>
										<div className='text-xs uppercase'>{section.title}</div>
										<div className='text-medium break-all'>{section.value}</div>
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
