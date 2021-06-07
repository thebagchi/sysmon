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
import DropdownItem from './components/DropdownItem';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Redirect, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import RoutesPage from './pages/RoutesPage';
import MetricsPage from './pages/MetricsPage';

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
        <Router>
        <Page>
          <Navbar>
            <div>
              <Hamburger handleClick={this.showSidebar}></Hamburger>
              <Branding> SMC MANAGER </Branding>
            </div>
          </Navbar>
          <Sidebar visible={sidebarOpen} clickedOutside={this.hideSidebar} escapePressed={this.hideSidebar}>
            <span className="fs-5 fw-semibold"> SMC MANAGER </span>
            <hr></hr>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <NavLink to="/web/home" className="nav-link text-white" activeClassName="active">
                  <i className="bi bi-house-door-fill mx-2"></i>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/web/dashboard" className="nav-link" activeClassName="active">
                  <i className="bi bi-speedometer2 mx-2"></i>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/web/orders" className="nav-link" activeClassName="active">
                  <i className="bi bi-table mx-2"></i>
                  Orders
                </NavLink>
              </li>
              <li>
                <NavLink to="/web/products" className="nav-link" activeClassName="active">
                  <i className="bi bi-grid mx-2"></i>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/web/customers" className="nav-link" activeClassName="active">
                  <i className="bi bi-people mx-2"></i>
                  Customers
                </NavLink>
              </li>
              <li>
                <NavLink to="/web/routes" className="nav-link" activeClassName="active">
                  <i className="bi bi-people mx-2"></i>
                  Routes
                </NavLink>
              </li>
            </ul>
            <hr/>
            <ul className="nav nav-pills flex-column">
              <li>
                <NavLink to="/web/tester" className="nav-link" activeClassName="active">
                  <i className="bi bi-terminal mx-2"></i>
                  Tester
                </NavLink>
              </li>
              <li>
                <NavLink to="/web/metrics" className="nav-link" activeClassName="active">
                  <i className="bi bi-terminal mx-2"></i>
                  Metrics
                </NavLink>
              </li>
            </ul>
          </Sidebar>
          <Content>
            <Switch>
              <Route exact path='/web/dashboard'>
                <DashboardPage> </DashboardPage>
              </Route>
              <Route exact path='/web/routes'>
                <RoutesPage> </RoutesPage>
              </Route>
              <Route exact path='/web/metrics'>
                <MetricsPage> </MetricsPage>
              </Route>
              <Route exact path='/'>
                <Redirect to='/web/dashboard'> </Redirect>
              </Route>
            </Switch>
          </Content>
        </Page>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;
