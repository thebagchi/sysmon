import React from "react";

interface ContentProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

const Content: React.FunctionComponent<ContentProps> = (props: ContentProps) => (
  <main className="d-flex flex-grow-1 container-fluid">
    {props.children}
  </main>
)

export default Content