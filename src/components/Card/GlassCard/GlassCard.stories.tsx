import type { Meta, StoryObj } from '@storybook/react';
import GlassCard from "./GlassCard";

type T = typeof GlassCard;

export default {
    title: 'atoms/GlassCard',
    component: GlassCard,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  render: () => {
    return (
      <GlassCard>
        <h1>Card</h1>
        <p>Content</p>
      </GlassCard>
    )
  }
};
