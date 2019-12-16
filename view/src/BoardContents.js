import React from 'react';
import './BoardContents.scss';
import { findPersonalTasks, findTeamTasks } from './mock/TaskMock.js';

class BoardContents extends React.Component {

    constructor(props) {
        super(props)
        this._onBlur = this._onBlur.bind(this)
        this._onFocus = this._onFocus.bind(this)
        this.state = {
            focus: false,
            hoverTask: null
        }
    }

    _onFocus = (taskId) => {
        if (!this.state.focus) {
            this.setState({
                focus: true,
                hoverTask: taskId
            });
        }
    }

    _onBlur = (taskId) => {
        if (this.state.focus) {
            this.setState({
                focus: false,
                hoverTask: taskId
            });
        }
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
                        {findPersonalTasks().map((task) => <li className="section-item" key={task.id}>{task.name}</li>)}
                    </ul>
                </div>
                <div className="board-section personal-board">
                    <div className="header">
                        <div className="header__icon">▷</div>
                        <div className="header__name">パーソナルボード</div>
                    </div>
                    <ul className="section-list">
                        {findPersonalTasks().map((task) =>
                            <div className="section-item" key={task.id}
                                onMouseOver={this._onFocus.bind(this, task.id)}
                                onMouseOut={this._onBlur.bind(this, task.id)}>
                                <span className="section-item__name">{task.name}</span>
                                {this.state.focus && this.state.hoverTask === task.id
                                    ? <div className="section-item__icon">☆</div>
                                    : null}
                            </div>)}
                    </ul>
                </div>
                <div className="board-section team-board">
                    <div className="header">
                        <div className="header__icon">▷</div>
                        <div className="header__name">チームボード</div>
                    </div>
                    <ul className="section-list">
                        {findTeamTasks().map(task =>
                            <div className="section-item" key={task.id}
                                onMouseOver={this._onFocus.bind(this, task.id)}
                                onMouseOut={this._onBlur.bind(this, task.id)}>
                                <span className="section-item__name">{task.name}</span>
                                {this.state.focus && this.state.hoverTask === task.id
                                    ? <div className="section-item__icon">☆</div>
                                    : null}
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default BoardContents;