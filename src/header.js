import React from "react";

export class Header extends React.Component {
  render () {
    return (
      <header>
        <h1>Guitar Tower</h1>
        <p className="sub-header">Thanks for checking out Guitar Tower!  Guitar Tower is an app to recommend songs
          to learn on guitar to improve your playing and technique repertoire whether you are just beginning your
          musical journey or have been playing for years.  The difficulty levels of the songs are broken down into
          Beginner, Intermediate, Advanced, and Expert categories.  Click on a category in the menu at the top of
          the screen to start exploring.  In each category 5 songs will display, and upon clicking a song title,
          a menu will appear with the difficulty level, artist, the techniques used, a link to the song on YouTube,
          and a link to the tablature for the song.  If you like you are not making enough progress on your own,
          click on the "Find an Instructor" tab in the menu at the top of the screen to find a guitar teacher
          in the greater Denver area near you.  Good luck! 
        </p>
      </header>
    );
  }
}
