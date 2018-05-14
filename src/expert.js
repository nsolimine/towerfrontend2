import React from "react";
import { Modal, Button, closeButton } from "react-bootstrap";

export class Expert extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        expert: [],
        show: false
      }
      this.handleClose = this.handleClose.bind(this)
      this.handleShow = this.handleShow.bind(this)
    }

    loadData = () => {
      const url = "https://towerbackend.herokuapp.com/expert"
      return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ expert: data.expert })
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
        <h2>Expert Songs</h2>
        <p className="sub-header">
          The songs recommended for expert players are some of the most difficult to play songs of all time!  Not
          for the faint of heart, these songs employ the use of arpeggios, sweep picking, flamenco strumming,
          multi-finger tapping and legato.
        </p>
        <div>
          {this.state.expert.map(item =>
          <div>
            <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
              {item.song}
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>"{item.song}"</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <ul className = "expertList">
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
