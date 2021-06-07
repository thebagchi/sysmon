import React from "react";

interface HamburgerProps extends React.HTMLProps<HTMLButtonElement> {
  handleClick: React.MouseEventHandler<HTMLButtonElement>
}

const Hamburger: React.FunctionComponent<HamburgerProps> = (props: HamburgerProps) => (
  <button className="navbar-toggler" type="button" onClick={props.handleClick}>
    <span className="navbar-toggler-icon"></span>
  </button>
)

export default Hamburger