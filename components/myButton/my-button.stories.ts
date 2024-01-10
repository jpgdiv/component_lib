import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "./my-button";

const meta: Meta = {
  component: "MyButton",
};

export default meta;
type Story = StoryObj;

export const MyButton: Story = {
  render: () => html`<my-button name="World"></my-button>`,
};
