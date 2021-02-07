import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import history from './history';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default class TitlePage extends React.Component {
  
  render() {
    return (
        <div className="box">
            <h1>Date Idea Generator</h1>
            <h3>Click start to generate a list of fun dates!</h3>
            <form style={{textAlign: "center"}}>
              <button onClick={() => history.push('/datelist')} class="btn">Start</button>
            </form>
        </div>
    )
  }
} 

ReactDOM.render(
  <TitlePage />,
  document.getElementById('root')
);