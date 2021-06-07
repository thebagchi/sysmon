import React from "react";

interface State {
  // Empty   
}
  
interface Props {
    children: React.ReactNode
    clickedOutside: () => void
    escapePressed: () => void
}

class OutsideClicked extends React.Component<Props, State> {
  
  wrapper: React.RefObject<HTMLDivElement>

  constructor(props: Props) {
    super(props)
    this.wrapper        = React.createRef<HTMLDivElement>()
    this.handleClick    = this.handleClick.bind(this)
    this.handleKeyboard = this.handleKeyboard.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick)
    document.addEventListener('keyup', this.handleKeyboard)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick)
    document.removeEventListener('keyup', this.handleKeyboard)
  }

  handleClick(event: MouseEvent) {
    if (this.wrapper) {
      if (this.wrapper.current) {
        if (event.target) {
          const target = event.target as Element
          if (!this.wrapper.current.contains(target)) {
            this.props.clickedOutside()
          }
        }
      }
    }
  }

  handleKeyboard(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.props.escapePressed()
    }
  }

  render() {
    return (
      <div ref={this.wrapper}>
        {this.props.children}
      </div>
    )
  }
}

export default OutsideClicked;