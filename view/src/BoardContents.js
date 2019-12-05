import React from 'react';
import './BoardContents.scss';
import { findAllTasks } from './mock/TaskMock.js';

class BoardContents extends React.Component {
    render() {
        return (
            <div className="body">
                <div class="board-section">
                    <div class="header">
                        <div class="header__icon">▷</div>
                        <div class="header__name">パーソナルボード</div>
                    </div>
                    <ul class="section-list">
                        {findAllTasks().map(c => <li class="section-item">{c}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default BoardContents;