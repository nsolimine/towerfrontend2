import React from "react";
import { Modal, Button, closeButton } from "react-bootstrap";

export class Advanced extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        advanced: [],
        show: false
      }
      this.handleClose = this.handleClose.bind(this)
      this.handleShow = this.handleShow.bind(this)
    }

    loadData = () => {
      const url = "https://towerbackend.herokuapp.com/advanced"
      return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ advanced: data.advanced })
      })
    }

    componentDidMount() {
      this.loadData()
    }

    handleClose() {
      this.setState({ show: false })
    }

    handleShow() {
      this.setState({ show: true })
    }

  render () {
    return (
      <div>
        <h2>Advanced Songs</h2>
        <div>
          {this.state.advanced.map(item =>
          <div>
            <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
              {item.song}
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>"{item.song}"</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <ul className = "advancedList">
                  <li key={item.id}>
                    <p>Difficulty: {item.difficulty}</p>
                    <p>Artist: {item.artist}</p>
                    <p>Techniques: {item.technique}</p>
                    <p><a href={item.url} target="blank">Listen on YouTube</a></p>
                    <p><a href={item.tabUrl} target="blank">Look at the tablature</a></p>
                  </li>
                </ul>
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
            )}
        </div>
      </div>
    );
  }
}
