import React from 'react';
import './BoardContents.scss';
import { findPersonalTasks, findTeamTaskss, findTeamTasks } from './mock/TaskMock.js';

class BoardContents extends React.Component {
    render() {
        return (
            <div className="body">
                <div class="board-section personal-board">
                    <div class="header">
                        <div class="header__icon">▷</div>
                        <div class="header__name">パーソナルボード</div>
                    </div>
                    <ul class="section-list">
                        {findPersonalTasks().map(c => <li class="section-item">{c}</li>)}
                    </ul>
                </div>
                <div class="board-section team-board">
                    <div class="header">
                        <div class="header__icon">▷</div>
                        <div class="header__name">チームボード</div>
                    </div>
                    <ul class="section-list">
                        {findTeamTasks().map(c => <li class="section-item">{c}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default BoardContents;