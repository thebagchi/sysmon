import React from "react";

interface BrandingProps extends React.HTMLProps<HTMLSpanElement> {
    children: React.ReactNode
}

const Branding: React.FunctionComponent<BrandingProps> = (props: BrandingProps) => (
  <span className="navbar-brand px-2">
    {props.children}
  </span>
)

export default Branding