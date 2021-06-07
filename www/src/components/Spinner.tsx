import React from "react";

interface SpinnerProps extends React.HTMLProps<HTMLDivElement> {
  // Empty
}

function Spinner(props: SpinnerProps) {
return(
    <div className="rounded-full w-8 h-8 border-b-2 border-t-2 border-mat-purple-700 animate-spin">
      <span className="sr-only"> loading ... </span>
    </div>
  )
}

export default Spinner