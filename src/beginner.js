import React from "react";
import { Modal, Button, closeButton } from "react-bootstrap";

export class Beginner extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        beginner: [],
        show: null
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
      this.setState({ show: null })
    }

    handleShow(e, index) {
      this.setState({ show: index })
    }

  render () {
    const { beginner } = this.state.beginner;
    const displaySongs = Object.keys(beginner).filter(key => {
      return beginner[key]
    }).map((key, index) => {

    return (
      <div>
        <div className="headerComponent">
          <h2>Beginner Songs</h2>
          <p className="sub-header">
            The songs recommended for beginners are testament that the fundamentals are still relevant
            when writing hits!  This discipline introduces strumming patterns, open chord shapes, alternate picking,
            and single-string melodic ideas.
          </p>
        </div>
        <div className="songButtons">
          <div>
            <Button id={key} bsStyle="primary" bsSize="large" onClick={e => this.handleShow(e, index)}>
              {beginner[key].song}
            </Button>

            <Modal id={key} show={this.state.show === index} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>"{beginner[key].song}"</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <ul className = "beginnerList">
                  <li key={beginner[key].id}>
                    <p>Difficulty: {beginner[key].difficulty}</p>
                    <p>Artist: {beginner[key].artist}</p>
                    <p>Techniques: {beginner[key].technique}</p>
                    <iframe width="auto" height="auto" src={beginner[key].url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    <p><a href={beginner[key].tabUrl} target="blank">Look at the tablature</a></p>
                  </li>
                </ul>
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    )
  })
  }
}
