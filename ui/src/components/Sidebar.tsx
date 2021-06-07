import React from "react";
import { join } from "../utilities/strings";
import OutsideClicked from "./OutsideClicked";

interface SidebarProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
  visible: boolean
  clickedOutside: () => void
  escapePressed: () => void
}

const Sidebar: React.FunctionComponent<SidebarProps> = (props: SidebarProps) => {

  let classnames = join("offcanvas", "offcanvas-start")
  if (props.visible) {
    classnames = join(classnames, "show", "visible")
  }

  return (
    <OutsideClicked clickedOutside={props.clickedOutside} escapePressed={props.escapePressed}>
      <div className={classnames} role="dialog" aria-modal="true">
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark vh-100">
          {props.children}  
        </div>
      </div>
    </OutsideClicked>
    
  )
}

export default Sidebar