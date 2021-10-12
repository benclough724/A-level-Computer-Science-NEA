import React, {Component} from 'react';

export default class Node extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isWall: false,
            count: 10,
            currentCol: props.currentCol,
            currentRow: props.currentRow
        };
     
    }

    render() {
        

        return(
        <button id={'node-${currentCol}-{currentRow}'} className={"p-4 inline border-opacity-100 border-gray border-4 w-auto h-auto" + isWall ? "bg-black" : "bg-white}
        onClick={() => this.setState({ isWall: true })}>

        </button>
    
       );

       

    }
    


    }


