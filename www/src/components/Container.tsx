import React from "react";

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

const Container: React.FunctionComponent<ContainerProps> = (props: ContainerProps) => (
  <div className="w-screen h-screen">
    {props.children}
  </div>
)

export default Container