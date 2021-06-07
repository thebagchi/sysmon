import React from 'react';
import Centered from "./components/Centered";
import Page from "./components/Page";
import Card from "./components/Card";
import Spinner from "./components/Spinner"
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";
import Pane from "./components/Pane";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Page>
          <Navbar>

          </Navbar>
          <Content>
            <Sidebar> </Sidebar>
            <Pane>
              <Centered>
                <Spinner>
                </Spinner>
              </Centered>
            </Pane>
          </Content>
        </Page>
      </Container>
    </React.Fragment>
  );
}

export default App;
