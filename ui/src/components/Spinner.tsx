import React from "react";

interface SpinnerProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

const Spinner: React.FunctionComponent<SpinnerProps> = (props: SpinnerProps) => (
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
)

export default Spinner