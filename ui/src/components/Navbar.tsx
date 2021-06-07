import React from "react";

interface NavbarProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

const Navbar: React.FunctionComponent<NavbarProps> = (props: NavbarProps) => (
  <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
      {props.children}
    </div>
  </nav>
)

export default Navbar