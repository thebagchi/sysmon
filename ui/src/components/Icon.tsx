import React from "react";

interface IconProps extends React.HTMLProps<HTMLElement> {
  name: string
  size: number
}

const Icon: React.FunctionComponent<IconProps> = (props: IconProps) => {
  const style = {
    fontSize: props.size + 'rem'
  }
  return (
    <i className={props.name} style={style}> </i>
)
}

export default Icon