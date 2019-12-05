
import React from 'react';

export default class TaskMock extends React.Component {
    
    state= [
        "Javaプロジェクトのボード",
        "Kotlinプロジェクトのボード",
        "Perlプロジェクトのボード",
        "Goプロジェクトのボード",
    ]

    render() {
        return(this.setState(this.state));
    }
}


