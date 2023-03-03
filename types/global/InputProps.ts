import { ValidationRules } from "@/components/global/Input";

export type InputProps = {
	label?: string;
	placeholder?: string;
	type?:
		| "text"
		| "password"
		| "email"
		| "number"
		| "tel"
		| "url"
		| "search"
		| "date"
		| "time"
		| "datetime-local"
		| "month"
		| "week"
		| "color"
		| "file"
		| "range"
		| "hidden"
		| "image"
		| "checkbox"
		| "radio"
		| "submit"
		| "reset"
		| "button"
		| "amount";
	id?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value?: boolean | string | number;
	autoComplete?: string | boolean;
	theme?: "outline" | "plain";
	focused?: boolean | (() => boolean);
	disabled?: boolean;
	step?: number;
	name: string;
	showPassword?: boolean;
	optional?: boolean;
	className?: string;
	customError?: string;
	customMessage?: string;
	left?: JSX.Element;
	right?: JSX.Element;
	paddingLeft?: string;
	paddingRight?: string;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	rules?: Array<keyof ValidationRules>;
	pattern?: string;
	hint?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
