import React, { Component } from 'react';
import './App.css';

const makeDefaultState = () => ({
  rows: [['square', ['square ', 'circle ', 'triangle '], '', true]],
  score: 0
});

class App extends Component {
  constructor() {
    super();
    this.state = makeDefaultState();
    this.resetState = this.resetState.bind(this);
    this.addRow = this.addRow.bind(this);
    this.randomShapes = this.randomShapes.bind(this);
  }
  randomShapes() {
    const shapes = ['square','circle','triangle','pentagon','rectangle'];
    var rand1 = parseInt(Math.random() * 4);
    var s1 = shapes[rand1];
    shapes.splice(rand1, 1);

    var rand2 = parseInt(Math.random() * 3);
    var s2 = shapes[rand2];
    shapes.splice(rand2, 1);

    var rand3 = parseInt(Math.random() * 2);
    var s3 = shapes[rand3];

    return [s1, s2, s3];
  }
  resetState() {
    this.setState(makeDefaultState());
  }
  addRow(s, i) {
    var rows = this.state.rows;
    var score = this.state.score;

    // disable buttons on old rows
    rows[0][3] = false;

    // show what was clicked on last row
    rows[0][1][i] = "X";

    // calculate what we need to add to score
    var addtoscore = parseInt(Math.random() * (200) - 100);

    // append new score to old row
    var newscore = score + ' +(' + addtoscore + ')';
    rows[0][2] = newscore;

    var newactions = this.randomShapes();

    // adds new row to top of array
    rows.unshift([s, newactions, '', true]);

    // updates state
    this.setState({ rows: rows, score: score + addtoscore });
  }
  render() {
    return (
      <div className="App">
        <div>
          <div className="App-header">
            <h1 className="App-title">demo</h1>
            <button onClick={this.resetState}>Reset State</button>
          </div>
        </div>
        <div>
          <table className="table">
            <tbody>
              <tr>
                <th>State</th>
                <th>Action</th>
                <th>Score</th>
              </tr>
              {this.state.rows.map(r => (
                <tr key={r}>
                  <td>{r[0]}</td>
                  <td>
                    <button onClick={r[3] ? () => this.addRow(r[1][0], 0) : null}>
                      {r[1][0]}
                    </button>
                    <button onClick={r[3] ? () => this.addRow(r[1][1], 1) : null}>
                      {r[1][1]}
                    </button>
                    <button onClick={r[3] ? () => this.addRow(r[1][2], 2) : null}>
                      {r[1][2]}
                    </button>
                  </td>
                  <td>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
