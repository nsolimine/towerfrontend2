import React, { Component } from 'react';
import './App.css';
import { HashRouter } from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      beginner: [],
      intermediate: [],
      advanced: [],
      expert: [],
      updateObject: {}
  };
  this.onUpdate = this.onUpdate.bind(this);
}

  loadData = () => {
    this.setState({loading: true})
    Promise.all([this.getSongs("beginner"), this.getSongs("intermediate"), this.getSongs("advanced"), this.getSongs("expert")])
    .then(() => {
      this.setState({loading: false})
    });
  }

  componentDidMount() {
    this.loadData();
  }

  getSongs = (level) => {
    return fetch("https://towerbackend.herokuapp.com/" + level)
    .then(response => response.json())
    .then(response => {
      if (!response[level]) {throw new Error('Expected "level" ' + level + ' in JSON response');}
      this.setState({[level]: response[level]})
    });
  };

  createSong = (level, data) => {
    return fetch('https://towerbackend.herokuapp.com/' + level, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
        })
      })
    .then(res => res.json())
    .then(response => this.loadData())
    .catch(error => console.error('Error:', error));
  }

  onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const postObj = {
      difficulty: data.get("selectDifficulty"),
      artist: data.get("artist"),
      song: data.get("song"),
      technique: data.get("technique"),
      url: data.get("url"),
      tabUrl: data.get("tabUrl")
    };
    this.createSong(postObj.difficulty, postObj)
    event.target.reset();
  }

  updateSongObj = (event) => {
    var updateObj = {
      id: event.id,
      difficulty: event.difficulty,
      artist: event.artist,
      song: event.song,
      technique: event.technique,
      url: event.url,
      tabUrl: event.tabUrl
    }
    this.setState({
      updateObject: updateObj
    })
  }

  updateSong = (level, updateData) => {
    return fetch('https://towerbackend.herokuapp.com/' + level + '/' + updateData.id, {
      method: 'PUT',
      body: JSON.stringify(updateData),
      headers: new Headers({
        'Content-Type': 'application/json',
        })
      })
    .then(res => res.json())
    .then(response => this.loadData())
    .catch(error => console.error('Error:', error));
  }

  onUpdate = (event) => {
    event.preventDefault();
    const updateData = new FormData(event.target);
    const updateObj = {
      id: updateData.get("id"),
      difficulty: updateData.get("difficulty"),
      artist: updateData.get("artist"),
      song: updateData.get("song"),
      technique: updateData.get("technique"),
      url: updateData.get("url"),
      tabUrl: updateData.get("tabUrl")
    };
    this.updateSong(updateObj.difficulty, updateObj)
    event.target.reset();
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
        </div>
      </HashRouter>
    );
  }
}

export default App;
