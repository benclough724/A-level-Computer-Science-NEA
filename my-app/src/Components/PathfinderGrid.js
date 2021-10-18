import React, { Component } from "react";
import Node from './Node.js';

//const grid = [];

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
    
  }
  
  return grid;

};


// Uses the grid 2D array and assigns x an y values to each node
function createNode (grid, x, y)  {
  grid[x][y] = 1;
  return grid;
}

function getStart(grid, x, y){
  const randomNum = [Math.floor(Math.random() * grid.length)]
  const start = grid[randomNum] [Math.floor(Math.random() * grid[randomNum].length)]
  console.log(start)
//   console.log(startRow, startCol);
//   return(startRow, startCol);
 }



export default PathfinderGrid;

