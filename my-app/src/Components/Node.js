import React, { Component } from 'react';

export default class Node extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isWall: false,
        };
    }

    render() {
        return (
            <div class='w-30 h-30 outline-black md: flex'>
                <div className="flex"></div>
            </div>
        );
    }
}

//export default Node;
