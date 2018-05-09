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

    handleShow() {
      this.setState({ show: !false })
    }



    updateSongBeginner = (event) => {
      this.props.updateSongBeginner(this.state.beginner)
    }

    deleteSong = (event) => {
      this.props.deleteSong(this.state.beginner)
    }

    deleteSongBeginner = (level, id) => {
      return fetch("https://towerbackend.herokuapp.com/beginner/" + id,  {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json',
          })
      })
      .then(response => this.props.loadData())
      .catch(error => console.error('Error', error));
    }

    onDelete = (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      this.deleteSongBeginner('beginner', data.get('id'))
    }

    renderDeleteButton = (item) => {
      if(item.id < 6) {
        return ''
      } else {
        return <button className="delete" onClick={() => this.deleteSongBeginner(item.difficulty, item.id)}>Delete</button>
      }
    }

    renderUpdateButton = (item) => {
      if(item.id < 6) {
        return ''
      } else {
        return <button className="update" onClick={() => this.props.updateSongObj(item)}>Update</button>
      }
    }




  createListItemBeginner(item){
    return (
      <li key={item.id}>
        <div className="profile">
        <h4 className="profileLevel">{item.song}</h4>
        </div>
        <div>
          <p>"{item.song}"</p>
          <p>Difficulty: {item.difficulty}</p>
          <p>Artist: {item.artist}</p>
          <p>Techniques: {item.technique}</p>
          <p><a href={item.url} target="blank">Listen on YouTube</a></p>
          <p><a href={item.tabUrl} target="blank">Check out the tab!</a></p>
        </div>
      </li>
    );
  }

  render () {
    return (
      <div>
      <h2>Beginner Songs</h2>
      <div>

      {this.state.beginner.sort((a, b) => a.id - b.id).map(item =>
        <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          {item.song}
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>{item.song}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <section>
        <ul className = "beginnerList">
        <li key={item.id}>
          <div className="profile">
          <h4 className="profileLevel">{item.song}</h4>
          </div>
          <div>
            <p>"{item.song}"</p>
            <p>Difficulty: {item.difficulty}</p>
            <p>Artist: {item.artist}</p>
            <p>Techniques: {item.technique}</p>
            <p><a href={item.url} target="blank">Listen on YouTube</a></p>
            <p><a href={item.tabUrl} target="blank">Check out the tab!</a></p>
          </div>
        </li>
      {/*  {this.state.beginner.sort((a, b) => a.id - b.id).map(this.createListItemBeginner)} */}
        </ul>
        </section>
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
