import React from "react";

interface CenteredProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

const Centered: React.FunctionComponent<CenteredProps> = (props: CenteredProps) => (
  <div className="flex flex-grow items-center justify-center">
    {props.children}
  </div>
)

export default Centered