import { Menu } from "@headlessui/react";
import React from "react";
import DropdownMenu from "./DropdownMenu";

interface DropdownProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

const Dropdown: React.FunctionComponent<DropdownProps> = (props: DropdownProps) => (
  <div className="dropdown">
    <Menu as="div">
      <Menu.Button className="btn btn-secondary dropdown-toggle"> Dropdown button </Menu.Button>
      {props.children}
    </Menu>
  </div>
)

export default Dropdown