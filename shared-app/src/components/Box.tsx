import React, { HTMLAttributes } from "react";

export const Box: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  style,
  ...rest
}) => {
  return (
    <div
      style={{ width: 50, height: 50, backgroundColor: "red", ...style }}
      {...rest}
    />
  );
};

export default Box;
