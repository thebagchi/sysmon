import React from "react";
import { Menu } from "@headlessui/react";

interface DropdownItemProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
  clicked: (event: React.MouseEvent) => void
}

const DropdownItem: React.FunctionComponent<DropdownItemProps> = (props: DropdownItemProps) => {
  return (
    <Menu.Item as="li">
      <a className="dropdown-item" onClick={props.clicked}>{props.children}</a>
    </Menu.Item>
  )
}

export default DropdownItem