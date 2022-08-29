import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "../components/Header/Header";
import Theme from "../components/Header/Theme";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import store from "../Redux/store";
import "../styles/index.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Header",
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Header> = (args) => (
  <Provider store={store}>
    <ThemeProvider attribute="class">
      <Header />
    </ThemeProvider>
  </Provider>
);

export const ThemeStories = () => (
  <ThemeProvider attribute="class">
    <Theme />
  </ThemeProvider>
);

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: "Button",
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };
