import React from 'react';
import logo from './logo.svg';
import "./styles.css";
import './App.css';

function App() {
  return (
    // <div className="App">
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     {/* Edit <code>src/App.tsx</code> and save to reload. */}
      //     hello,React!!byシーラカンス
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>
    // </div>
    <>
    <div className="input-area">
        <input placeholder="input todo"/>
        <button>Add</button>
    </div>
    <div className="incomplete-area">
        <p className="title">未完</p>
        <ul>
          <div className="list-row">
            <li>羽が無い生き物が飛べたのは、羽が無かったから</li>
            <button>Mission Complete</button>
            <button>Delete</button>
          </div>
          <div className="list-row">
            <li>いっそ飛べない鳥の羽なんかもがれちまえばいい</li>
            <button>Mission Complete</button>
            <button>Delete</button>
          </div>
        </ul>
    </div>
    <div className="complete-area">
      <p className="title">end</p>
        <ul>
          <div className="list-row">
            <li>破り損なった手作りの地図</li>
            <button>return</button>
          </div>
        </ul>
    </div>
    </>
  );
}

export default App;
