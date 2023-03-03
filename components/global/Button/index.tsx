import Link from "next/link";
import { BeatLoader } from "react-spinners";
import { useRouter } from "next/router";
import { ButtonProps } from "@/types/global/ButtonProps";

const Button: React.FC<ButtonProps> = ({
	loading = false,
	disabled,
	theme = "primary",
	icon = null,
	href,
	size = "md",
	underline = true,
	outline = false,
	isExternal = false,
	children,
	tag,
	className,
	type = "button",
	...rest
}) => {
	const router = useRouter();

	const buttonTheme = (theme: string) => {
		switch (theme) {
			case "primary":
				return "bg-primary hover:bg-pc-08 disabled:bg-pc-06 disabled:border-pc-06 text-white border-2 border-primary hover:border-pc-08 rounded-lg";
			case "plain":
				return ``;
			case "outline":
				return `bg-transparent text-primary border-2 border-[#DDE4F6] rounded-[5px]`;
			case "secondary":
				return "bg-secondary text-white rounded-[5px] rounded-lg";
			default:
				return "bg-primary text-white border-2 border-transparent rounded-[5px]";
		}
	};

	const LinkTheme = (theme: string) => {
		switch (theme) {
			case "primary":
				return "text-primary";
			case "secondary":
				return "text-secondary";
			case "plain":
				return "";
			default:
				return "text-primary";
		}
	};

	const buttonSize = (size: string) => {
		switch (size) {
			case "sm":
				return "px-4 py-2";
			case "md":
				return "px-6 py-3 h-12";
			case "lg":
				return "py-4 h-[59.98px]";
			case "xl":
				return "px-10 py-5";
			default:
				return "px-6 py-3";
		}
	};

	const iconColor = (theme: string) => {
		switch (theme) {
			case "primary":
				return "#fff";
			case "outline":
				return "#7F4433";
			default:
				return "#fff";
		}
	};

	if (tag === "a") {
		return (
			<Link
				href={
					isExternal
						? !href?.includes("https" || "http")
							? `https://${href}`
							: href
						: href || router.pathname
				}
				className={`${LinkTheme(theme)} ${
					underline ? "underline" : null
				} ${className}`}>
				{children}
			</Link>
		);
	}

	return (
		<button
			type={type}
			disabled={disabled || loading}
			className={`flex items-center justify-center transition-all tracking-[0.1em] font-semibold ease-in text-sm text-center gap-4 disabled:cursor-not-allowed ${buttonTheme(
				theme
			)} ${buttonSize(size)} ${className}`}
			{...rest}>
			{loading ? (
				<BeatLoader color={iconColor(theme)} loading={loading} size={12} />
			) : (
				children
			)}
		</button>
	);
};

export default Button;
