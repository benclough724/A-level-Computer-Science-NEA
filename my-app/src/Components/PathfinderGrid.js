import React, { Component } from "react";
import Node from './Node.js';
const test = ["Ben", "Joe", "CHris"];
//const grid = [];

class PathfinderGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: [],
    };
  }


  componentDidMount() {
    const grid = createGrid();
    this.setState({ grid });
    //console.log(this.state.grid)
  }

  render() {
    //console.log(this.state.grid)
    return (
      <div>
        {this.state.grid.map((row, rowIdx) => {
          return <Node />
        })}
      </div >
    );
  }
}



const createGrid = () => {
  const grid = [];
  for (let row = 0; row < 15; row++) {
    const currentRow = [];
    for (let col = 0; col < 50; col++) {
      currentRow.push(createNode(row, col));
    }
    grid.push(currentRow);
    grid.push(currentRow)
    console.log(grid);

  }
  return grid;
};

const createNode = (row, col) => {
  return {
    row,
    col,
  };
  console.log(row);
  console.log(col);
};

export default PathfinderGrid;

