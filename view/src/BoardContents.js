import React from 'react';
import './BoardContents.scss';
import { findPersonalTasks, findTeamTasks } from './mock/TaskMock.js';

class BoardContents extends React.Component {

    constructor(props) {
        super(props)
        this.state = { focus: false }
    }

    _onFocus = () => {
        if (!this.state.focus) {
            this.setState({
                focus: true,
            });
        }
    }

    _onBlur = () => {
        if (this.state.focus) {
            this.setState({
                focus: false,
            });
        }
    }

    _hoge() {
        console.log("hoge")
    }

    render() {
        return (
            <div className="body">
                <div className="board-section favorite-board">
                    <div className="header">
                        <div className="header__icon">▷</div>
                        <div className="header__name">スター付きボード</div>
                    </div>
                    <ul className="section-list">
                        {/* {findPersonalTasks().map(c => <li className="section-item">{c}</li>)} */}
                    </ul>
                </div>
                <div className="board-section personal-board">
                    <div className="header">
                        <div className="header__icon">▷</div>
                        <div className="header__name">パーソナルボード</div>
                    </div>
                    <ul className="section-list">
                        {findPersonalTasks().map((task) => <li className="section-item" key={task}>{task}</li>)}
                    </ul>
                </div>
                <div className="board-section team-board">
                    <div className="header">
                        <div className="header__icon">▷</div>
                        <div className="header__name">チームボード</div>
                    </div>
                    <ul className="section-list">
                        {findTeamTasks().map(task =>
                            <li className="section-item" key={task}
                                onMouseOver={this._onFocus}
                                onMouseOut={this._onBlur}>
                                <span>{task}</span>
                                {this.state.focus ? <div className="star">ほし</div> : null}
                            </li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default BoardContents;