import React from 'react';
import './BoardContents.css';

class BoardContents extends React.Component {
    render() {
        return (
            <div className="body">
                <div>ここには個人のボードが入ります</div>
                <div>ここにはチームのボードが入ります</div>
            </div>
        )
    }
}

export default BoardContents;