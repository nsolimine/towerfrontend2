import React from "react";
import { Modal, Button, closeButton } from "react-bootstrap";

export class Intermediate extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        intermediate: [],
        show: null
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
      this.setState({ show: null })
    }

    handleShow(e, item) {
      e.preventDefault()
      this.setState({
        show: item
      })
    }

    createListItem() {
      const { show } = this.state
      return (
        <li key={show.id}>
          <p>Difficulty: {show.difficulty}</p>
          <p>Artist: {show.artist}</p>
          <p>Techniques: {show.technique}</p>
          <iframe width="auto" height="auto" src={show.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <p><a href={show.tabUrl} target="blank">Look at the tablature</a></p>
        </li>
      )
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
          <div key={item.id}>
            <Button key={item.id} bsStyle="primary" bsSize="large" onClick={e => this.handleShow(e, item)}>
              {item.song}
            </Button>
          </div>
          )}
            <Modal show={this.state.show} onHide={this.handleClose}>
                {this.state.show ? (
              <div>
                <Modal.Header closeButton>
                  <Modal.Title>
                    "{this.state.show.song}"
                  </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <ul className = "intermediateList">
                    {this.createListItem()}
                  </ul>
                </Modal.Body>

                <Modal.Footer>
                  <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
              </div>
            ) : null }
            </Modal>
          </div>
      </div>
    );
  }
}
