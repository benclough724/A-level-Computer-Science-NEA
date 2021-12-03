import React, { Component } from "react";
import Node from './Node.js';

const startNodeCol = 10;
const startNodeRow = 15;

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
    
  }

  render() {
    
    return (
      <div >
        {this.state.grid.map((rows, currentRow) => {
          return (

              <div className="">
                <ol>
                  {rows.map((cols, currentCol, isStart) => {
                    return <Node 
                    currentCol={currentCol} 
                    currentRow={currentRow}
                    isStart={isStart}
                    onMouseDown={(x, y) => this.handleMouseDown(x, y)}
                    onMouseEnter={(x, y) =>
                        this.handleMouseEnter(x, y)
                    }/>
                  })}
                </ol>
                
              </div>

          )
        })}
      </div >
    );
  }
}


/* Loops through from 0-20 rows and 0-47 columns and stores 
 it in the 2D array grid */ 
const createGrid = () => {
  let neighbours = [];
  let grid = [];
  for (let row = 0; row < 20; row++) {
    grid[row]= [];
    neighbours[row] = [row - 1 && row + 1];
    for (let col = 0; col < 47; col++) {
      neighbours[col] = [col - 1 && col + 1]; 
      grid = createNode(grid, row, col);
    }
    neighbours.push(grid[row]);
    grid.push(grid[row]);
    console.log(neighbours);
  }
  
  return grid;

};


// Uses the grid 2D array and assigns x an y values to each node
const createNode = (grid, row, col)  => {
  
  

  return{
    row, 
    col,
    isStart: row === startNodeCol && col === startNodeRow,
    grid
  };
}





export default PathfinderGrid;

