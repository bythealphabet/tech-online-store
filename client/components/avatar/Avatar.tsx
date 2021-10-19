import React from "react";
import AvatarSvg from "../svgs/AvatarSvg";

function Avatar(props) {
  return (
    <div>
      <AvatarSvg color={props.color} />
    </div>
  );
}
export default Avatar;
