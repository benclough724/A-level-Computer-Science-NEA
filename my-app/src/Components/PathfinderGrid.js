import React, { Component }from "react";
import Node from './Node.js';
const test = ["Ben", "Joe", "CHris"];

class PathfinderGrid extends Component{
    constructor(){
      super()
      this.state = {
       // grid: [],
      };
    }
    
    componentDidMount(){
      const grid = createGrid();
     // this.setState({grid});
    }
    
  render(){
    return(
      <div>
         {grid.map((grid) => {
           return(
              <h1>{grid}</h1>
           );
         })}
      </div>
    );
  }
}

const createGrid = () => {
  const grid = [];
  for(let row = 0; row < 15; row++){
    const currentRow = [];
    for (let col = 0; col < 50; col++){
      currentRow.push();
      }
      grid.push(currentRow);
     // console.log(grid);

    }
    return grid;
  }
  
export default PathfinderGrid;

  