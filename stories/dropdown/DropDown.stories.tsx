import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import DropDown from "../../client/components/dropdown/DropDown";

export default {
  title: "DropDown/DropDown",
  component: DropDown,
  subcomponent: TestContent,
};

const Template = (args) => (
  <DropDown {...args}>
    <TestContent />
  </DropDown>
);

export const Drop = Template.bind({});
Drop.args = {
  children: TestContent,
  content: Content,
};

function TestContent() {
  return (
    <div
      css={css`
        background: salmon;
        width: 300px;
        height: 500px;
      `}
    ></div>
  );
}

function Content() {
  return <h1 className="t">CLick Here</h1>;
}
