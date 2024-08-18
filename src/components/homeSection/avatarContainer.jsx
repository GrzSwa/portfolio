import React from "react";

export const AvatarContainer = ({ avatar }) => {
  return (
    <img
      src={avatar}
      alt={"me"}
      className="max-h-72 md:max-h-[30rem] lg:max-h-96 xl:max-h-[34rem]"
    />
  );
};
