import React from "react";
import { Menu } from "@headlessui/react";
import DropdownItem from "./DropdownItem";

interface DropdownMenuProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

const DropdownMenu: React.FunctionComponent<DropdownMenuProps> = (props: DropdownMenuProps) => {
  return (
    <Menu.Items as="ul" className="dropdown-menu show">
      {props.children}
    </Menu.Items>
  )
}

export default DropdownMenu