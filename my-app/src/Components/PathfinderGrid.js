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
      <div className="grid grid-flow-row">
        {this.state.grid.map((rows, currentRow) => {
          return (

              <div className="">
                <ol>
                  {rows.map((cols, currentCol) => {
                    return <Node currentCol={currentCol} currentRow={currentRow}/>
                  })}
                </ol>
              </div>

          )
        })}
      </div >
    );
  }
}



const createGrid = () => {
  let grid = [];
  for (let row = 1; row < 15; row++) {
    grid[row]= [];
    for (let col = 0; col < 50; col++) {
      grid = addCell(grid, row, col);
    }
    grid.push(grid[row]);

  }
  return grid;

};

function addCell(grid, x, y) {
  grid[x][y] = 1
  return grid
}

export default PathfinderGrid;

