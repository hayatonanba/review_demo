import type { Meta, StoryObj } from '@storybook/react';
import Simple from "./Simple";

type T = typeof Simple;

export default {
    title: 'atoms/Simple',
    component: Simple,
    parameters: {
      layout: ["centered"]
    }
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    children: "Button"
  }
};
