import React, { useState } from 'react';
import './index.css';
import history from './history';

function DateList() {
  function reroll() {

  }
  
  function chooserandom() {
    const number = document.getElementById('num');
  }
  
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
                <img src="place.jpg"></img>
                <h4>Place Name 1</h4>
              </th>
              <th>
                <img src="./img/arrow.png"></img>
              </th>
              <th>
                <img src="./img/place.jpg"></img>
                <h4>Place Name 2</h4>
              </th>
              <th>
                <img src="./img/arrow.png"></img>
              </th>
              <th>
                <img src="./img/place.jpg"></img>
                <h4>Place Name 3</h4>
              </th>
            </tr>
            </table>
            {isShown1 && (
              <div style={{paddingTop:'2vh'}}>
                  <h4 className="leftAlign">Place Name 1</h4>
                  <p className="leftAlign">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <br></br>
                  <h4 className="leftAlign">Place Name 2</h4>
                  <p className="leftAlign">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <br></br>
                  <h4 className="leftAlign">Place Name 3</h4>
                  <p className="leftAlign">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            )}
        </div>
        
        <br></br>
        <br></br>

        <div className="card" onMouseEnter={() => setIsShown2(true)} onMouseLeave={() => setIsShown2(false)}>
            <table className="center">
            <tr>
              <th>
                <img src="place.jpg"></img>
                <h4>Place Name 1</h4>
              </th>
              <th>
                <img src="./img/arrow.png"></img>
              </th>
              <th>
                <img src="./img/place.jpg"></img>
                <h4>Place Name 2</h4>
              </th>
              <th>
                <img src="./img/arrow.png"></img>
              </th>
              <th>
                <img src="./img/place.jpg"></img>
                <h4>Place Name 3</h4>
              </th>
            </tr>
            </table>
            {isShown2 && (
              <div style={{paddingTop:'2vh'}}>
                  <h4 className="leftAlign">Place Name 1</h4>
                  <p className="leftAlign">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <br></br>
                  <h4 className="leftAlign">Place Name 2</h4>
                  <p className="leftAlign">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <br></br>
                  <h4 className="leftAlign">Place Name 3</h4>
                  <p className="leftAlign">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            )}
        </div>

        <br></br>
        <br></br>

        <div className="card" onMouseEnter={() => setIsShown3(true)} onMouseLeave={() => setIsShown3(false)}>
            <table className="center">
            <tr>
              <th>
                <img src="place.jpg"></img>
                <h4>Place Name 1</h4>
              </th>
              <th>
                <img src="./img/arrow.png"></img>
              </th>
              <th>
                <img src="./img/place.jpg"></img>
                <h4>Place Name 2</h4>
              </th>
              <th>
                <img src="./img/arrow.png"></img>
              </th>
              <th>
                <img src="./img/place.jpg"></img>
                <h4>Place Name 3</h4>
              </th>
            </tr>
            </table>
            {isShown3 && (
              <div style={{paddingTop:'2vh'}}>
                  <h4 className="leftAlign">Place Name 1</h4>
                  <p className="leftAlign">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <br></br>
                  <h4 className="leftAlign">Place Name 2</h4>
                  <p className="leftAlign">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <br></br>
                  <h4 className="leftAlign">Place Name 3</h4>
                  <p className="leftAlign">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            )}
        </div>
        
      </div>
    </div>
    
  );
}

export default DateList;