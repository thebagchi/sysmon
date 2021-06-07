import React from 'react';

interface PageProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

const Page: React.FunctionComponent<PageProps> = (props: PageProps) => (
  <div className="h-screen flex flex-col">
    {props.children}
  </div>
)

export default Page