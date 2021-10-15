import React from "react";
import AvatarDropDown from "../../client/components/dropdown/AvatarDropDown";

export default {
  title: "DropDown/AvatarDropDown",
  component: AvatarDropDown,
  subcomponent: TestContent,
};

// export const Default = (args) => <AvatarDropDown {...args} />;

const Template = (args) => (
  <AvatarDropDown {...args}>
    <TestContent />
  </AvatarDropDown>
);

export const Avatar = Template.bind({});
Avatar.args = {
  color: "green",
  children: TestContent,
};

function TestContent() {
  return (
    <>
      {" "}
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <button>SIGN OUT</button>
    </>
  );
}
