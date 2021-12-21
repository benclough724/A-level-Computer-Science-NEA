import React, { Component } from "react";
import Node from './Node.js';

const startNodeCol = 10;
const startNodeRow = 15;

class PathfinderGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: [],
      neighbours: [],
    };
  }
  

  componentDidMount() {
    const grid = createGrid();
    this.setState({ grid });
    
  }

  render() {
    
    return (
      <div class="grid hover: grid-flow-row">
        {this.state.grid.map((rows, currentRow) => {
          return (

              <div className="">
                <ol>
                  {rows.map((cols, currentCol) => {
                    return <Node 
                    currentCol={currentCol} 
                    currentRow={currentRow}
                    />
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
  for (let row = 1; row < 20; row++) {
    grid[row]= [];
    
    for (let col = 1; col < 47; col++) {
      //neighbours[col] = [col - 1 && col + 1];
      
      grid = createNode(grid, row, col);
      
    }
    
    grid.push(grid[row]);
    
  }
  
  return grid;

};


// Uses the grid 2D array and assigns x an y values to each node
const createNode = (grid, row, col)  => {
  
  grid[row][col] = -1;

  return grid;
};





export default PathfinderGrid;

