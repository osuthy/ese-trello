import React from 'react';
import './App.scss';
import BoardMenu from './BoardMenu.js';
import BoardContents from './BoardContents'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Hello!
        </header>
        <div className="board-container">
          <div className="board-menu">
            <BoardMenu></BoardMenu>
          </div>
          <div className="board-contents">
            <BoardContents></BoardContents>
          </div>
        </div>
      </div>
    );
  }
}

// export default App


// App全体にflexをきかせるようにする(headerとbodyに対して上下で)