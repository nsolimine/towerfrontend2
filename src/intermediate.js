import React from "react";
import { Modal, Button, closeButton } from "react-bootstrap";

export class Intermediate extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        intermediate: [],
        show: false
      }
      this.handleClose = this.handleClose.bind(this)
      this.handleShow = this.handleShow.bind(this)
    }

    loadData = () => {
      const url = "https://towerbackend.herokuapp.com/intermediate"
      return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ intermediate: data.intermediate })
      })
    }

    componentDidMount() {
      this.loadData()
    }

    handleClose() {
      this.setState({ show: false })
    }

    handleShow() {
      this.setState({ show:true })
    }

  render () {
    return (
      <div>
        <div className="headerComponent">
          <h2>Intermediate Songs</h2>
          <p className="sub-header">
            The songs recommended for intermediate players are definitely a level up from the beginner songs!  This
            discipline introduces finger-picking, heavy riffs, complex strumming, hammer-ons and pull-offs, and
            alternate guitar tunings.
          </p>
        </div>
        <div className="songButtons">
          {this.state.intermediate.map(item =>
          <div>
            <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
              {item.song}
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>"{item.song}"</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <ul className = "intermediateList">
                  <li key={item.id}>
                    <p>Difficulty: {item.difficulty}</p>
                    <p>Artist: {item.artist}</p>
                    <p>Techniques: {item.technique}</p>
                    <iframe width="auto" height="auto" src={item.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
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
