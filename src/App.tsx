import React, { useState } from 'react';
import logo from './logo.svg';
import "./styles.css";
import './App.css';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState(['羽が無い生き物が飛べたのは、羽が無かったから', 'いっそ飛べない鳥の羽なんかもがれちまえばいい']);
  const [completeTodos, setCompleteTodos] = useState(['破り損なった手作りの地図']);
  const onChangeTodoText = (event: any) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }
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
        <input placeholder="input todo" value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>Add</button>
    </div>
    <div className="incomplete-area">
        <p className="title">未完</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>Mission Complete</button>
                <button>Delete</button>
              </div>
            );
          })}
        </ul>
    </div>
    <div className="complete-area">
      <p className="title">end</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
          <div key={todo} className="list-row">
            <li>{todo}</li>
            <button>return</button>
          </div>
            )
          })}
        </ul>
    </div>
    </>
  );
}

export default App;
