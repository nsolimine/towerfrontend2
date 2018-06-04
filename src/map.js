import React, { Component } from 'react';

import { Map,
         TileLayer,
         Marker,
         Popup
       } from 'react-leaflet';

export default class MyMap extends Component {


  render() {
    return (
      <div>
        <div className="headerComponent">
          <h2>Find an Instructor</h2>
          <p className="sub-header">
            Feeling stuck? We have all been there before!  The most talented musicians have all had teachers in their past
            who helped to get them to where they are now.  Take a look at some of the instructors around the greater Denver
            area and see if there is anyone near you to help you get out of your rut and back to making music!
          </p>
        </div>
        <Map center={[39.7392, -104.9903]} zoom={11.5}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[39.765994, -105.048367]}>
            <Popup>
              <span>
                Make Great Music Singing &amp; Guitar Lessons<br />
                4725 W 35th Ave, Denver, CO 80212<br />
                (720) 663-7877<br />
                <a href="http://www.makegreatmusic.com/" target="blank">makegreatmusic.com/</a>
              </span>
            </Popup>
          </Marker>
          <Marker position={[39.764136, -104.977539]}>
            <Popup>
              <span>
                Strum &amp; Sip<br />
                3200 Larimer St, Denver, CO 80205<br />
                (303) 928-4121<br />
                <a href="https://strumandsip.com/" target="blank">strumandsip.com</a>
              </span>
            </Popup>
          </Marker>
          <Marker position={[39.742783, -104.966859]}>
            <Popup>
              <span>
                Sollohub School of Music<br />
                1660 Gilpin St, Denver, CO 80218<br />
                (303) 667-7957<br />
                <a href="https://www.sollohubmusic.com/" target="blank">sollohubmusic.com</a>
              </span>
            </Popup>
          </Marker>
          <Marker position={[39.729876, -104.988705]}>
            <Popup>
              <span>
                Taylor Robinson Music & Voice Lessons<br />
                816 Acoma St, Denver, CO 80204<br />
                (720) 285-2244<br />
                <a href="https://www.taylorrobinsonmusic.com/denver-music-lessons.html" target="blank">taylorrobinsonmusic.com</a>
              </span>
            </Popup>
          </Marker>
          <Marker position={[39.726070, -104.978526]}>
            <Popup>
              <span>
                Dave Brown&#8217;s Music Lessons<br />
                616 N Washington St #121, Denver, CO 80203<br />
                (413) 822-7401<br />
                <a href="https://www.davebrownsmusic.com/" target="blank">davebrownsmusic.com</a>
              </span>
            </Popup>
          </Marker>
          <Marker position={[39.721459, -104.988699]}>
            <Popup>
              <span>
                Guitar Lessons with Mike Brick - Denver CO<br />
                330 Acoma St, Denver, CO 80223<br />
                (646) 262-7510
              </span>
            </Popup>
          </Marker>
          <Marker position={[39.719659, -104.979395]}>
            <Popup>
              <span>
              Guitar Lessons with Nicholas Keith<br />
              211 N Washington St, Denver, CO 80203<br />
              (720) 503-3566<br />
              <a href="https://www.nicholaskeithmusic.com/" target="blank">nicholaskeithmusic.com</a>
              </span>
            </Popup>
          </Marker>
          <Marker position={[39.712721, -104.983701]}>
            <Popup>
              <span>
              School Of Rock Denver<br />
              216 S Grant St, Denver, CO 80209<br />
              (720) 221-6991<br />
              <a href="https://locations.schoolofrock.com/denver" target="blank">schoolofrock.com</a>
              </span>
            </Popup>
          </Marker>
          <Marker position={[39.696081, -104.982445]}>
            <Popup>
              <span>
                TakeLessons Music and Voice Lessons<br />
                1120 S Logan St, Denver, CO 80210<br />
                (303) 586-6435<br />
                <a href="https://takelessons.com/co/denver/music-lessons" target="blank">takelessons.com</a>
              </span>
            </Popup>
          </Marker>
          <Marker position={[39.730654, -104.918057]}>
            <Popup>
              <span>
                Denver Classical Jazz Guitar School<br />
                6001 E 9th Ave, Denver, CO 80220<br />
                (347) 247-3370
              </span>
            </Popup>
          </Marker>
          <Marker position={[39.697341, -104.917281]}>
            <Popup>
              <span>
                Sound Minded Music Academy<br />
                1060 S Kearney St, Denver, CO 80224<br />
                (720) 201-9744<br />
                <a href="https://soundmindedmusic.com/" target="blank">soundmindedmusic.com</a>
              </span>
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}
