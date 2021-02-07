import React from 'react';
import './index.css';

function DateList() {
  return (
    <div>
      <div className="borderbox">
        <h1>Date List</h1>
        <div className="card">
            <table className="center">
            <tr>
              <th>
                <img src="img/place.jpg" alt="Place"></img>
                <p>Place Name 1</p>
              </th>
              <th>
                <img src="./img/arrow.png"></img>
              </th>
              <th>
                <img src="./img/place.jpg" alt="Place"></img>
                <p>Place Name 2</p>
              </th>
              <th>
                <img src="./img/arrow.png"></img>
              </th>
              <th>
                <img src="./img/place.jpg" alt="Place"></img>
                <p>Place Name 3</p>
              </th>
            </tr>
            </table>
        </div>
      </div>
    </div>
    
  );
}

export default DateList;