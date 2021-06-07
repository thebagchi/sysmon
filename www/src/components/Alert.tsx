import React from "react";

interface AlertProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

function Alert(props: AlertProps) {
  return(
    <div className="bg-indigo-600 rounded">
      
    </div>
  )
}

export default Alert