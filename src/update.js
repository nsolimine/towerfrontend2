import React from "react";

export default function UpdateForm({ onUpdate, updateObj }){
  return (
    <form className="update-form" onSubmit={onUpdate}>
      <label htmlFor="id">Level Up: </label>
      <input type="text" id="namedisplay" name="namedisplay" value={updateObj.artist} />
      <input type="hidden" id="id" name="id" value={updateObj.id} />
      <label htmlFor="difficulty">Difficulty: </label>
      <input type="text" name="difficulty" id="difficulty" value={updateObj.difficulty} />
      <label htmlFor="artist">Update the artist: </label>
      <input type="text" name="artist" id="artist" placeholder="Update the artist" />
      <label htmlFor="song">Update the song: </label>
      <input type="text" name="song" id="song" placeholder="Update the song" />
      <label htmlFor="technique">Update the techniques used: </label>
      <textarea name="technique" rows="3" cols="20" id="technique" placeholder="Update the techniques used"></textarea>
      <label htmlFor="url">Update the YouTube link: </label>
      <input type="text" name="url" id="url" placeholder="Update the YouTube link" />
      <label htmlFor="tabUrl">Update the tab link: </label>
      <input type="text" name="tabUrl" id="tabUrl" placeholder="Update the tab link" />
      <input type="submit" name="update" value="Submit" />
    </form>
  );
}
