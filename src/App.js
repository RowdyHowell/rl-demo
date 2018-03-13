import React, { Component } from 'react';
import './App.css';

const makeDefaultState = () => ({
  rows: [['square',['square ','circle ','triangle '],'']],
  score: 0
});

class App extends Component {
  constructor() {
    super();
    this.state = makeDefaultState();
    this.resetState = this.resetState.bind(this);
    this.addRow = this.addRow.bind(this);
  }
  resetState() {
    this.setState(makeDefaultState());
  }
  addRow(s) {
      console.log(arguments)
        var rows = this.state.rows
        var score = this.state.score

        // calculate what we need to add to score
        var addtoscore = 2;

        // append new score to old row
        var newscore = score + ' +(' + addtoscore + ')';
        rows[0][2] = newscore;

        var newactions = ['square', 'circle', 'triangle'];

        // adds new row to top of array
        rows.unshift([s, newactions, ''])

        // updates state
        this.setState({rows: rows, score: score+addtoscore})
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
            {this.state.rows.map((r) => (
                      <tr>
                          <td>{r[0]}</td>
                          <td>
                            <button onClick={(e) => this.addRow(r[1][0])}>{r[1][0]}</button>
                            <button onClick={(e) => this.addRow(r[1][1])}>{r[1][1]}</button>
                            <button onClick={(e) => this.addRow(r[1][2])}>{r[1][2]}</button>
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
