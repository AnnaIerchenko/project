import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ErorPage } from './ErrorPage';

export default {
  title: 'widget/ErrorPage',
  component: ErorPage,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ErorPage>;

const Template: ComponentStory<typeof ErorPage> = (args) => <ErorPage{...args} />;

export const Light = Template.bind({});

Light.args = {};


export const Dark = Template.bind({});
Dark.args = {};



