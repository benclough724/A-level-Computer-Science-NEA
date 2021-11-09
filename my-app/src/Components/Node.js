import React, {Component} from 'react';

class Node extends Component{

    render() {
        const {
            x,
            y,
            isWall,
            isStart
        } = this.props;
        
        const cssData= 
        this.state.isWall ? 'bg-black':
        this.state.isStart ? 'bg-blue-500':

        
        return(
        <div id={this.state.currentCol + this.state.currentRow} className={`p-4 inline border-opacity-100 border-gray border-4 w-auto h-auto ${cssData}`}
        onMouseDown={() => onMouseDown(x, y)}
        onMouseEnter={() => onMouseEnter(x, y)}>
        onMouseUp={() => onMouseUp(x, y)}
        </div>
    
       );

       

    }


    }


    export default Node;

