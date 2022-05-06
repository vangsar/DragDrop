import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import DraggableLists from 'react-draggable-lists'
import DraggableList from 'react-draggable-list'
import DragDrop from '../src/DragDrop'

const listItems = [
  "Entertainment",
  "Private Time",
  "Rest",
  "Meal",
  "Exercise",
  "Work",
  "Home Projects",
  "Family"
];
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  return (
    <div className="App">
    <DragDrop />
      <header className="App-header">
      {/* <div className="App">
        <div style={{ width: 300, margin: "0 auto" }}>
          <DraggableLists width={300} height={50} rowSize={1}>
            {listItems.map((item, index) => (
              <li key={index}>{`${index + 1}.  ${item}`}</li>
            ))}
          </DraggableLists>
        </div>
      </div> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
  }
}

export default App;
