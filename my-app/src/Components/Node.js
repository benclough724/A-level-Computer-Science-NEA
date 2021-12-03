import React, {Component} from 'react';
import BFS from '../PathfindingAlgorithms/BreathFirstSearch.js';

class Node extends Component{
constructor(props) {
    super(props);
    this.state = {
        isWall: false,
        currentCol: this.props.currentCol,
        currentRow: this.props.currentRow,
        isStart: this.props.startNode
    }
}

    render() {
        const {
            
        } = this.props;
        
        const cssData= 
        this.state.isWall ? 'bg-black':
        this.state.isStart ? 'bg-blue-500':
        '';

        
        return(
        <div id={ this.state.currentCol + this.state.currentRow} className={`p-4 inline border-opacity-100 border-gray border-4 w-auto h-auto' ${cssData}`}
        onClick={() => this.setState({isWall: true})}>
        
        </div>
        ); 
       

       

    }


    }


    export default Node;

