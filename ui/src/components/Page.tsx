import React from "react";

interface PageProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

const Page: React.FunctionComponent<PageProps> = (props: PageProps) => (
  <div className="bg-white d-flex flex-column vh-100 vw-100">
    {props.children}
  </div>
)

export default Page