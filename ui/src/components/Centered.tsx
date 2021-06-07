import React from "react";

interface CenteredProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

const Centered: React.FunctionComponent<CenteredProps> = (props: CenteredProps) => (
  <div className="d-flex flex-grow-1 align-items-center justify-content-center">
    {props.children}
  </div>
)

export default Centered