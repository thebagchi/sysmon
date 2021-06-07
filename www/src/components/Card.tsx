import React from "react";

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

function Card(props: CardProps) {
  return(
    <div className="p4 mx-auto border rounded">
      {props.children}
    </div>
  )
}

export default Card