import { cn } from "@/helpers/utils";

const StatusPill = ({
	status,
}: {
	status: "Active" | "Inactive" | "Blacklisted" | "Pending";
}) => {
	const statusTheme = {
		Active: "bg-status-success-10 text-status-success-100",
		Inactive: "bg-[#545f7d0f] text-pc-light",
		Blacklisted: "bg-status-error-10 text-status-error-100",
		Pending: "bg-status-warning-10 text-status-warning-100",
	};

	return (
		<div
			className={cn(
				"px-3 py-[7px] capitalize text-sm w-fit rounded-[100px]",
				statusTheme[status]
			)}>
			{status}
		</div>
	);
};

export default StatusPill;
