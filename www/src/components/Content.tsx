import React from "react";

interface ContentProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

const Content: React.FunctionComponent<ContentProps> = (props: ContentProps) => (
  <main className="flex flex-row flex-grow">
    {props.children}
  </main>
)

export default Content