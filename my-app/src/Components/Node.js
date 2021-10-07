import React, {Component} from 'react';

export default class Node extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isWall: false,
            currentCol:props.currentCol,
            currentRow:props.currentRow
        };
    }

    render() {
       return(
        <button className="p-4 inline border-opacity-100 border-red-400 border-4 w-auto h-auto"
        onClick={() => alert(`ROW: ${this.state.currentRow}\nCOL: ${this.state.currentCol}`)}>
        </button>
    );
    }
}
