import React from "react";

export class Section4 extends React.Component {

  constructor(props){
      super(props);
      this.state = {
      toggleClass: true,
      togglePanels: []
      }
      this.toggleFunction = this.toggleFunction.bind(this);
      this.createListItemExpert = this.createListItemExpert.bind(this);
      this.deleteSong = this.deleteSong.bind(this);
      this.updateSongExpert = this.updateSongExpert.bind(this);
    }

    updateSongExpert = (event) => {
      this.props.updateSongExpert(this.state.item)
    }

    deleteSong = (event) => {
      this.props.deleteSong(this.state.item)
    }

    deleteSongExpert = (level, id) => {
      return fetch('https://towerbackend.herokuapp.com/' + level + '/' + id,  {
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
      this.deleteSongExpert('expert', data.get('id'))
    }

    renderDeleteButton = (item) => {
      if(item.id < 6) {
        return ''
      } else {
        return <button className="delete" onClick={() => this.deleteSongExpert(item.difficulty, item.id)}>Delete</button>
      }
    }

    renderUpdateButton = (item) => {
      if(item.id < 6) {
        return ''
      } else {
        return <button className="update" onClick={() => this.props.updateSongObj(item)}>Update</button>
      }
    }

    toggleFunction = (item) => {
      const { togglePanels } = this.state
      const index = togglePanels.indexOf(item.id)
      if(index !== -1){
        togglePanels.splice(index, 1)
      } else {
        togglePanels.push(item.id)
      }
      this.setState({ togglePanels })
    }

  createListItemExpert(item){
    return (
      <li key={item.id}>
        <div className="profile">
          <h4 className="profileLevel" onClick={() => this.toggleFunction(item)}>Level Up: {item.artist}</h4>
        </div>
        <div className={this.state.togglePanels.includes(item.id)?"skills-container":"skills-container hidden"}>
          <p>Difficulty: {item.difficulty && item.difficulty.replace(/s$/,"")}</p>
          <p>Artist: {item.artist}</p>
          <p>Song: "{item.song}"</p>
          <p>Techniques Used: {item.technique}</p>
          <p><a href={item.url} target="blank">Listen on YouTube</a></p>
          <div className="buttons">
              {this.renderUpdateButton(item)}
              {this.renderDeleteButton(item)}
          </div>
        </div>
      </li>
    );
  }
  render () {
    return (
      <section>
        <h2>Expert Songs</h2>
        <ul className = "expertList">
          {this.props.expertlistings.sort((a, b) => a.id - b.id).map(this.createListItemExpert)}
        </ul>
      </section>
    );
  }
}
