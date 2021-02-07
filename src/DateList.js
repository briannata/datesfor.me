import React, { useState } from 'react';
import './index.css';
import axios from 'axios';
import history from './history';
require('dotenv').config();

function DateList() {
  const state = {
    place1: "Dulles Town Center",
    place2: "Chick-fil-A",
    place3: "1757 Golf Club",
    place4: "Meadowlark Botanical Gardens",
    place5: "Cafe Renaissance",
    place6: "Tysons Corner",
    place7: "Water Mine Family Swimmin' Hole",
    place8: "MOD Pizza",
    place9: "Dulles Town Center Ice Skating Pavilion",
    place1des: "21100 Dulles Town Cir, Sterling, VA 20166",
    place2des: "21100 Dulles Town Cir Ste 244, Dulles, VA 20166",
    place3des:  "1757 Golf Club, 45120 Waxpool Rd, Dulles, VA 20166",
    place4des: "9750 Meadowlark Gardens Ct, Vienna, VA 22182",
    place5des: "163 Glyndon St SE, Vienna, VA 22180",
    place6des:  "8449 Leesburg Pike, Vienna, VA 22182",
    place7des: "1400 Lake Fairfax Dr, Reston, VA 20190",
    place8des: "11642 Plaza America Dr, Reston, VA 20190",
    place9des:  "11900 Market St, Reston, VA 20190",
    place1img : require("./img/dullestowncenter.jpg"),
    place2img : require("./img/chickfila.png"),
    place3img : require("./img/place.jpg"),
    place4img : require("./img/meadowlark.png"),
    place5img : require("./img/place.jpg"),
    place6img : require("./img/tysons.png"),
    place7img : require("./img/watermine.png"),
    place8img : require("./img/modpizza.png"),
    place9img : require("./img/iceskating.png"),
    types : ['amusement_park', 'art_gallery', 'bakery', 'bowling_alley', 'cafe', 'department_store', 'library', 'movie_theater', 'museum', 'park', 'restaurant', 'shopping_mall', 'spa', 'tourist_attraction', 'zoo'],
    //coordinates : navigator.geolocation.getCurrentPosition(success, error, options)
  }
  
  /*var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

    axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + state.coordinates.latitude + ',' + state.coordinates.longitude + '&radius=2500&openNow=true&type=' + getrandom(state.types) + '&key=' + process.env.API_KEY)
      .then(res => {
        const stuff = res.data;
        state.setState({ place1:stuff.results[0].name, place1des:stuff.results[0].formatted_address, place1img:stuff.results[0].icon});
      })

      axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + state.coordinates.latitude + ',' + state.coordinates.longitude + '&radius=2500&openNow=true&type=' + getrandom(state.types) + '&key=' + process.env.API_KEY)
      .then(res => {
        const stuff = res.data;
        state.setState({ place2:stuff.results[0].name, place2des:stuff.results[0].formatted_address, place2img:stuff.results[0].icon});
      })

      axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + state.coordinates.latitude + ',' + state.coordinates.longitude + '&radius=2500&openNow=true&type=' + getrandom(state.types) + '&key=' + process.env.API_KEY)
      .then(res => {
        const stuff = res.data;
        state.setState({ place3:stuff.results[0].name, place3des:stuff.results[0].formatted_address, place3img:stuff.results[0].icon});
      })

      axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + state.coordinates.latitude + ',' + state.coordinates.longitude + '&radius=2500&openNow=true&type=' + getrandom(state.types) + '&key=' + process.env.API_KEY)
      .then(res => {
        const stuff = res.data;
        state.setState({ place4:stuff.results[0].name, place4des:stuff.results[0].formatted_address, place4img:stuff.results[0].icon});
      })

      axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + state.coordinates.latitude + ',' + state.coordinates.longitude + '&radius=2500&openNow=true&type=' + getrandom(state.types) + '&key=' + process.env.API_KEY)
      .then(res => {
        const stuff = res.data;
        state.setState({ place5:stuff.results[0].name, place5des:stuff.results[0].formatted_address, place5img:stuff.results[0].icon});
      })

      axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + state.coordinates.latitude + ',' + state.coordinates.longitude + '&radius=2500&openNow=true&type=' + getrandom(state.types) + '&key=' + process.env.API_KEY)
      .then(res => {
        const stuff = res.data;
        state.setState({ place6:stuff.results[0].name, place6des:stuff.results[0].formatted_address, place6img:stuff.results[0].icon});
      })

      axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + state.coordinates.latitude + ',' + state.coordinates.longitude + '&radius=2500&openNow=true&type=' + getrandom(state.types) + '&key=' + process.env.API_KEY)
      .then(res => {
        const stuff = res.data;
        state.setState({ place7:stuff.results[0].name, place7des:stuff.results[0].formatted_address, place7img:stuff.results[0].icon});
      })

      axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + state.coordinates.latitude + ',' + state.coordinates.longitude + '&radius=2500&openNow=true&type=' + getrandom(state.types) + '&key=' + process.env.API_KEY)
      .then(res => {
        const stuff = res.data;
        state.setState({ place8:stuff.results[0].name, place8des:stuff.results[0].formatted_address, place8img:stuff.results[0].icon});
      })

      axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + state.coordinates.latitude + ',' + state.coordinates.longitude + '&radius=2500&openNow=true&type=' + getrandom(state.types) + '&key=' + process.env.API_KEY)
      .then(res => {
        const stuff = res.data;
        state.setState({ place9:stuff.results[0].name, place9des:stuff.results[0].formatted_address, place9img:stuff.results[0].icon});
      })
  
  function getrandom(l)
  {
    const num = Math.floor(Math.random() * Math.floor(l.size()-1));
    return l[num];
  }

  function reroll() {

  }
  
  function chooserandom() {
    const num = Math.floor(Math.random() * Math.floor(2) + 1);
    return num;
  }*/
  
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  
  return (
    <div>
      <div className="borderbox">
        <div>
          <h1 style={{paddingBottom:'2.25vh'}}>Date List</h1>
        </div>
        <div>
          <table className="center">
            <tr>
              <th>
                <button onclick="reroll()" class="btn">Reroll</button>
              </th>
              <th>
                <br></br>
              </th>
              <th>
                <br></br>
              </th>
              <th>
                <br></br>
              </th>
              <th>
              <button onclick="chooserandom()" class="btn">Random</button>
              </th>
            </tr>
          </table>
        </div>

        <div className="card" onMouseEnter={() => setIsShown1(true)} onMouseLeave={() => setIsShown1(false)}>
            <table className="center">
            <tr>
              <th>
                <img src={state.place1img}></img>
                <h4>{state.place1}</h4>
              </th>
              <th>
                <img src="./img/arrow.png"></img>
              </th>
              <th>
                <img src={state.place2img}></img>
                <h4>{state.place2}</h4>
              </th>
              <th>
                <img src="./img/arrow.png"></img>
              </th>
              <th>
                <img src={state.place3img}></img>
                <h4>{state.place3}</h4>
              </th>
            </tr>
            </table>
            {isShown1 && (
              <div style={{paddingTop:'2vh'}}>
                  <h4 className="leftAlign">{state.place1}</h4>
                  <p className="leftAlign">{state.place1des}</p>
                  <br></br>
                  <h4 className="leftAlign">{state.place2}</h4>
                  <p className="leftAlign">{state.place2des}</p>
                  <br></br>
                  <h4 className="leftAlign">{state.place3}</h4>
                  <p className="leftAlign">{state.place3des}</p>
              </div>
            )}
        </div>

        <br></br>
        <br></br>

        <div className="card" onMouseEnter={() => setIsShown2(true)} onMouseLeave={() => setIsShown2(false)}>
            <table className="center">
            <tr>
              <th>
                <img src={state.place4img}></img>
                <h4>{state.place4}</h4>
              </th>
              <th>
                <img src="./img/arrow.png"></img>
              </th>
              <th>
                <img src={state.place5img}></img>
                <h4>{state.place5}</h4>
              </th>
              <th>
                <img src="./img/arrow.png"></img>
              </th>
              <th>
                <img src={state.place6img}></img>
                <h4>{state.place6}</h4>
              </th>
            </tr>
            </table>
            {isShown2 && (
              <div style={{paddingTop:'2vh'}}>
                  <h4 className="leftAlign">{state.place4}</h4>
                  <p className="leftAlign">{state.place4des}</p>
                  <br></br>
                  <h4 className="leftAlign">{state.place5}</h4>
                  <p className="leftAlign">{state.place5des}</p>
                  <br></br>
                  <h4 className="leftAlign">{state.place6}</h4>
                  <p className="leftAlign">{state.place6des}</p>
              </div>
            )}
        </div>

        <br></br>
        <br></br>

        <div className="card" onMouseEnter={() => setIsShown3(true)} onMouseLeave={() => setIsShown3(false)}>
            <table className="center">
            <tr>
              <th>
                <img src={state.place7img}></img>
                <h4>{state.place7}</h4>
              </th>
              <th>
                <img src="./img/arrow.png"></img>
              </th>
              <th>
                <img src={state.place8img}></img>
                <h4>{state.place8}</h4>
              </th>
              <th>
                <img src="./img/arrow.png"></img>
              </th>
              <th>
                <img src={state.place9img}></img>
                <h4>{state.place9}</h4>
              </th>
            </tr>
            </table>
            {isShown3 && (
              <div style={{paddingTop:'2vh'}}>
                  <h4 className="leftAlign">{state.place7}</h4>
                  <p className="leftAlign">{state.place7des}</p>
                  <br></br>
                  <h4 className="leftAlign">{state.place8}</h4>
                  <p className="leftAlign">{state.place8des}</p>
                  <br></br>
                  <h4 className="leftAlign">{state.place9}</h4>
                  <p className="leftAlign">{state.place9des}</p>
              </div>
            )}
        </div>
        
      </div>
    </div>
    
  );
}

export default DateList;