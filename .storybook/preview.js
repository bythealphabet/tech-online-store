import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import EmotionThemeProvider from "./decorator";

addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));
addDecorator(EmotionThemeProvider);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
