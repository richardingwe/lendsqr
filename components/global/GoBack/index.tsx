import { cn } from "helpers/utils";
import { useRouter } from "next/router";
import Icon from "../icons";

const GoBack = ({
	text,
	className,
	onClick,
}: {
	text?: string;
	className?: string;
	onClick?: () => void;
}) => {
	const router = useRouter();

	return (
		<button
			onClick={() => {
				onClick || router.back();
			}}
			className={cn("flex items-center space-x-2 text-tc-light", className)}>
			<div>
				<Icon.BackIcon />
			</div>
			<div>{text}</div>
		</button>
	);
};

export default GoBack;
