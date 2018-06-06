import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Header } from "./header.js";
import { Beginner } from "./beginner.js";
import { Intermediate } from "./intermediate.js";
import { Advanced } from "./advanced.js";
import { Expert } from "./expert.js";
import { Add } from "./add.js";
import MyMap from "./map.js";
import { Footer } from "./footer.js";
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

ReactDOM.render(
  <Router>
    <div>
      <div className="componentContainer">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Guitar Tower</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/Beginner">
                Beginner Songs
              </NavItem>
              <NavItem eventKey={2} href="/Intermediate">
                Intermediate Songs
              </NavItem>
              <NavItem eventKey={3} href="/Advanced">
                Advanced Songs
              </NavItem>
              <NavItem eventKey={4} href="/Expert">
                Expert Songs
              </NavItem>
              <NavItem eventKey={5} href="/Add">
                Add Your Own Song
              </NavItem>
              <NavItem eventKey={6} href="/MyMap">
                Find An Instructor
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <hr />

        <Route
        exact path="/"
        component={Header}
        />
        <Route
        path="/Beginner" component={ Beginner }
        />
        <Route
        path="/Intermediate" component={ Intermediate }
        />
        <Route
        path="/Advanced" component={ Advanced }
        />
        <Route
        path="/Expert" component={ Expert }
        />
        <Route
        path="/Add" component={ Add }
        />
        <Route
        path="/MyMap" component={ MyMap }
        />
      </div>

      <Footer />

    </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
