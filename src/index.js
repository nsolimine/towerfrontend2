import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Header } from "./header.js";
import { Section1 } from "./beginner.js";
import { Section2 } from "./intermediate.js";
import { Section3 } from "./advanced.js";
import { Section4 } from "./expert.js";
import MyMap from "./map.js";
import SongForm from "./form.js";
import UpdateForm from "./update.js";
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, Button, Modal } from 'react-bootstrap';

ReactDOM.render(
  <Router>
    <div>
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
            <NavItem eventKey={5} href="/SongForm">
              Add a Song
            </NavItem>
            <NavItem eventKey={6} href="/MyMap">
              Find an Instructor
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
      path="/Beginner" component={ Section1 } 
      />
      <Route
      path="/Intermediate"
      render={(props) => <Section2 {...props} intermediatelistings={this.state.intermediate} updateSongObj={this.updateSongObj} loadData={this.loadData} />}
      />
      <Route
      path="/Advanced"
      render={(props) => <Section3 {...props} advancedlistings={this.state.advanced} updateSongObj={this.updateSongObj} loadData={this.loadData} />}
      />
      <Route
      path="/Expert"
      render={(props) => <Section4 {...props} expertlistings={this.state.expert} updateSongObj={this.updateSongObj} loadData={this.loadData} />}
      />
      <Route
      path="/Songform"
      render={(props) => <SongForm {...props} onSubmit={this.onSubmit} />}
      />
      <Route
      path="/MyMap"
      component={MyMap}
      />
    </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
