import type { Meta, StoryObj } from '@storybook/react';
import Gradation from "./Gradation";

type T = typeof Gradation;

export default {
    title: 'atoms/Gradation',
    component: Gradation,
    parameters: {
      layout: ["centered"]
    }
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    text: "dammy"
  }
};
