import React, { Component } from 'react';
import Node from '../Components/Node.js';
import PathfinderGrid from '../Components/PathfinderGrid.js';

// startNodeCol = 10;
// startNodeRow = 15;

function BFS(grid, row, col){
    
    // const getShortestRoute=(grid)=>{
        
    // }

    // function checkIfVisited(){

    // }

    const getNeighbours = (grid, row, col) => {
        let neighbours = [];
        let left;
        let right;
        if(row > 0 ){
          neighbours[left] = neighbours.push(grid[row - 1][col]);
        }
        else if(row === 0){
          right = row + 1
          neighbours[right] = []; 
        }
        else{
          
        }
        console.log(neighbours[left])
      }
      
}
