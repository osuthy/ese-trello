import React from 'react';
import './App.css';
import BoardMenu from './BoardMenu.js';
import BoardContents from './BoardContents'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Hello!
      </header>
      <body className="board-container">
        <div className="board-menu">
          <BoardMenu></BoardMenu>
        </div>
        <div className="board-contents">
          <BoardContents></BoardContents>
        </div>
      </body>
    </div>
  );
}

export default App;


// App全体にflexをきかせるようにする(headerとbodyに対して上下で)