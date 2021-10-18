import React, {Component} from 'react';

class Node extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isWall: false,
            startRow: props.startRow,
            startCol: props.startCol,
            currentCol: props.currentCol,
            currentRow: props.currentRow
        };
     
    }

   
    
    

    render() {
        
        const cssData= 
        this.state.isWall ? 'bg-black':
        this.state.isStart ? 'bg-blue-500':

        console.log(this.state.isWall)
        return(
        <button id={this.state.currentCol + this.state.currentRow} className={`p-4 inline border-opacity-100 border-gray border-4 w-auto h-auto ${cssData}`}
        onClick={() => this.setState({ isStart: true })}>
        </button>
    
       );

       

    }


    }


    export default Node;

