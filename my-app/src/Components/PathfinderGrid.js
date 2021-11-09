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
    const start = getStart();
    const grid = createGrid();
    this.setState({ grid });
    
  }

  render() {
    
    return (
      <div className="text-center margin-top-100">
        {this.state.grid.map((rows, currentRow) => {
          return (

              <div className="">
                <ol>
                  {rows.map((cols, currentCol) => {
                    return <Node 
                    currentCol={currentCol} 
                    currentRow={currentRow}
                    isStart={isStart}
                    isWall={isWall}/>
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
  let grid = [];
  for (let row = 1; row < 20; row++) {
    grid[row]= [];
    for (let col = 0; col < 47; col++) {
      
      grid = createNode(grid, row, col);
    }
    
    grid.push(grid[row]);
    console.log(grid)
    
  }
  
  return grid;

};


// Uses the grid 2D array and assigns x an y values to each node
function createNode (grid, x, y)  {
  grid[x][y] = 1;
  // isWall: false,
  // isStart: x === startNodeCol && y === startNodeRow,
  return grid;
}





export default PathfinderGrid;

