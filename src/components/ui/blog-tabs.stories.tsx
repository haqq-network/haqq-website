import { Meta, StoryObj } from '@storybook/react';
import { BlogTabs as BlogTabsComponent } from './blog-tabs';

const meta: Meta<typeof BlogTabsComponent> = {
  component: BlogTabsComponent,
};

export default meta;
type Story = StoryObj<typeof BlogTabsComponent>;

const tabs = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5'];

export const BlogTabs: Story = {
  args: {
    tabs: tabs,
    current: tabs[3],
  },
};
