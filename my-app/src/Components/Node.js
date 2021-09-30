import React, {Component} from 'react';

export default class Node extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isWall: false,
        };
    }

    render() {
       return(
        <div class = " w-10 h-10 outline-black">
            
        </div>
    );
    }
}