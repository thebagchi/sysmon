import React from "react";

interface SidebarProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

function Sidebar(props: SidebarProps) {
  return(
    <div className="w-72 bg-gray-100 h-full border-r border-gray-300">
      {props.children}
    </div>
  )
}

export default Sidebar