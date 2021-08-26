import React from "react";

export const UglyButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

export default UglyButton;
