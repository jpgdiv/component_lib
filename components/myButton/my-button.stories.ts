import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { screen } from "shadow-dom-testing-library"

import "./my-button";

const meta: Meta = {
  component: "MyButton",
};

export default meta;
type Story = StoryObj;

export const MyButton: Story = {
  render: () => html`<my-button name="World"></my-button>`,
};

export const ClickedButton: Story = {
  render: () => html`<my-button name="World"></my-button>`,
  play: async ({ canvasElement }) => {
    // const canvas = within(canvasElement);

        
    await userEvent.click(screen.getByShadowRole("button"));
    // await userEvent.click(canvas.getByRole('button'));
    // await userEvent.click(canvas.getByRole('button'));

    // 👇 Assert DOM structure
    await expect(
      screen.getByShadowText(
        'Click Count: 2'
      )
    ).toBeInTheDocument();
  },
};
