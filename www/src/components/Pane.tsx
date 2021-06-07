import React from "react";

interface PaneProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

const Pane: React.FunctionComponent<PaneProps> = (props: PaneProps) => (
  <div className="flex flex-col flex-grow">
    {props.children}
  </div>
)

export default Pane