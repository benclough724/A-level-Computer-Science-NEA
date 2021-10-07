import React, {Component} from 'react';

export default class Node extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isWall: false,
             
            currentCol: props.currentCol,
            currentRow:props.currentRow
        };
    }

    render() {
       return(
    <div>
        <button className="p-4 justify-items-center border-opacity-100 border-gray border-2 w-auto h-auto"
        onClick()={this.setState({ isWall: true })>
       
        </button>
        {/* <button className =""
        onCLick>

        </button> */}
    </div>
       );
}
    }


