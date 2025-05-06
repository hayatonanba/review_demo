import type { Meta, StoryObj } from '@storybook/react';
import ThreeDCard from "./ThreeDCard";

type T = typeof ThreeDCard;

export default {
    title: 'atoms/ThreeDCard',
    component: ThreeDCard,
    // parameters: {
    //   layout: ["centered"]
    // }
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  render: () => {
    return (
      <ThreeDCard>
        <h2 className='text-2xl font-bold'>Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
          Corporis aliquam, recusandae dolor atque modi quam. 
        </p>
      </ThreeDCard>
    )
  }
};
