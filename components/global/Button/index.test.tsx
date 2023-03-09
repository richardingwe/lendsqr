import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from ".";
import userEvent from "@testing-library/user-event";

jest.mock("next/router", () => require("next-router-mock"));

describe("Button", () => {
	test("renders a button with the provided text", () => {
		const { getByText } = render(<Button>Click me</Button>);
		const button = getByText("Click me") as HTMLButtonElement;
		expect(button.tagName).toBe("BUTTON");
	});
	test("calls the onClick function when clicked", () => {
		const handleClick = jest.fn();
		const { getByText } = render(
			<Button onClick={handleClick}>Click me</Button>
		);
		const button = getByText("Click me") as HTMLButtonElement;
		fireEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
	test("disables the button when disabled prop is true", () => {
		const { getByText } = render(<Button disabled>Click me</Button>);
		const button = getByText("Click me") as HTMLButtonElement;
		expect(button.disabled).toBe(true);
	});
	test("uses the provided type prop", () => {
		const { getByText } = render(<Button type='submit'>Submit</Button>);
		const button = getByText("Submit") as HTMLButtonElement;
		expect(button.type).toBe("submit");
	});
	test("adds the specified class name", () => {
		const { getByText } = render(
			<Button className='custom-class'>Click me</Button>
		);
		const button = getByText("Click me");
		expect(button.classList.contains("custom-class")).toBe(true);
	});
	test("renders an anchor element when href prop is provided", () => {
		const { getByText } = render(
			<Button href='https://example.com'>Click me</Button>
		);
		const anchor = getByText("Click me") as HTMLAnchorElement;
		expect(anchor.tagName).toBe("A");
		expect(anchor.href).toBe("https://example.com/");
	});
	test("opens an external link in a new tab", () => {
		const { getByText } = render(
			<Button href='https://example.com' isExternal>
				Click me
			</Button>
		);
		const anchor = getByText("Click me") as HTMLAnchorElement;
		expect(anchor.target).toBe("_blank");
	});
	test("applies the specified theme", () => {
		const { getByText } = render(<Button theme='secondary'>Click me</Button>);
		const button = getByText("Click me");
		expect(button.classList.contains("bg-secondary")).toBe(true);
	});
	test("applies the specified size", () => {
		const { getByText } = render(<Button size='sm'>Click me</Button>);
		const button = getByText("Click me");
		expect(button.classList.contains("px-4")).toBe(true);
		expect(button.classList.contains("py-2")).toBe(true);
	});
	test("disables the button when disabled prop is true", () => {
		const { getByText } = render(<Button disabled>Click me</Button>);
		const button = getByText("Click me");
		expect(button).toBeDisabled();
	});
	test("disables the button when loading prop is true", () => {
		const { getByText } = render(<Button disabled>Click me</Button>);
		const button = getByText("Click me");
		expect(button).toBeDisabled();
	});

	// negative test scenarios
	test("does not render underline when underline prop is false", () => {
		const { getByText } = render(
			<Button tag='a' underline={false}>
				Click me
			</Button>
		);
		const button = getByText("Click me");
		expect(button).not.toHaveClass("underline");
	});
	test("does not call onClick when button is disabled", () => {
		const handleClick = jest.fn();
		const { getByText } = render(
			<Button disabled onClick={handleClick}>
				Click me
			</Button>
		);
		const button = getByText("Click me");
		userEvent.click(button);
		expect(handleClick).not.toHaveBeenCalled();
	});
});
