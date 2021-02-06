import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default class TitlePage extends React.Component {

  render() {
    return (
      <div className="box">
        <h1>Date Idea Generator</h1>
        <h3>Click start to generate a list of fun dates!</h3>
        <div style={{textAlign: "center"}}>
          <button class="btn">Start</button>
        </div>
      </div>
    )
  }
} 

ReactDOM.render(
  <TitlePage />,
  document.getElementById('root')
);