import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { screen, within } from "shadow-dom-testing-library";

import "./my-button";

const meta: Meta = {
	component: "MyButton",
};

export default meta;
type Story = StoryObj;

export const MyButton: Story = {
	name: "Standard Button",	
	render: () => html`<my-button name="World"></my-button>`,
};


export const ClickedButton: Story = {
	render: () => html`<my-button name="World"></my-button>`,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByShadowRole('button')
	

		await userEvent.click(button);

		// 👇 Assert DOM structure
		await expect(button).toHaveTextContent(/Click Count: 2/)
		await expect(screen.getByShadowText("Click Count: 2")).toBeInTheDocument();
	},
};
