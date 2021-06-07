import React from 'react';
import Centered from "./components/Centered";
import Icon from "./components/Icon";
import Page from "./components/Page";
import Spinner from "./components/Spinner";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Hamburger from './components/Hamburger';
import Branding from './components/Branding';
import Dropdown from './components/Dropdown';
import DropdownMenu from './components/DropdownMenu';
import DropdownItem from './components/DropdownItem'

interface State {
  sidebarOpen: boolean;
}

interface Props {
  // Empty
}

export class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.showSidebar = this.showSidebar.bind(this)
    this.hideSidebar = this.hideSidebar.bind(this)
    this.state = {
      sidebarOpen: false
    }
  }

  componentDidMount() {
    // Do Nothing
  }

  componentWillUnmount() {
    // Do Nothing
  }

  hideSidebar() {
    const {sidebarOpen} = this.state
    if (sidebarOpen) {
      this.setState(prev =>({
        sidebarOpen: !prev.sidebarOpen
      }))
    }
  }

  showSidebar(event: React.MouseEvent) {
    this.setState(prev =>({
      sidebarOpen: !prev.sidebarOpen
    }))
  }

  render() {
    const {sidebarOpen} = this.state
    return (
      <React.Fragment>
        <Page>
          <Navbar>
            <div>
              <Hamburger handleClick={this.showSidebar}></Hamburger>
              <Branding> SMC MANAGER </Branding>
            </div>
          </Navbar>
          <Sidebar visible={sidebarOpen} clickedOutside={this.hideSidebar} escapePressed={this.hideSidebar}>
          </Sidebar>
          <Content>
            <Centered>
              <Dropdown> 
                <DropdownMenu>
                  <DropdownItem clicked={(e)=>{console.log("Action - I")}}> Action - I </DropdownItem>
                  <DropdownItem clicked={(e)=>{console.log("Action - II")}}> Action - II </DropdownItem>
                  <DropdownItem clicked={(e)=>{console.log("Action - III")}}> Action - III </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Spinner> </Spinner>
            </Centered>
          </Content>
        </Page>
      </React.Fragment>
    )
  }
}

export default App;
