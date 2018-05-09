import React from "react";
import { Modal, Button, closeButton } from "react-bootstrap";

export class Section1 extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        beginner: [],
        show: false
      }
      this.handleClose = this.handleClose.bind(this)
      this.handleShow = this.handleShow.bind(this)
    }

    loadData = () => {
      const url = "https://towerbackend.herokuapp.com/beginner"
      return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ beginner: data.beginner })
      })
    }

    componentDidMount() {
      this.loadData()
    }

    handleClose() {
      this.setState({ show: false })
    }

    handleShow(event) {
      this.setState({ show: true })
      console.log("sup dawg", event.target.id);
    }

    createListItemBeginner(item){
      return (
          <li key={item.id}>
            <p>Difficulty: {item.difficulty}</p>
            <p>Artist: {item.artist}</p>
            <p>Techniques: {item.technique}</p>
            <p><a href={item.url} target="blank">Listen on YouTube</a></p>
            <p><a href={item.tabUrl} target="blank">Look at the tablature</a></p>
          </li>

      );
    }


  render () {
    return (
      <div>
        <h2>Beginner Songs</h2>
        <div>
          {this.state.beginner.map(item =>
            <Button id={item.song} bsStyle="primary" bsSize="large" onClick={this.handleShow}>
            {item.song}
            </Button>
            )}
            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <ul className = "beginnerList">

            </ul>
            </Modal.Body>

            <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
            </Modal>
        </div>
      </div>
    );
  }
}
