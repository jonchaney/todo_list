import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodo } from './actions/todo_actions';
import { receiveTodos } from './actions/todo_actions';
import App from './components/app';


const ToDo = () => (
  <div>
    <h1>Todos App</h1>
  </div>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('content');
  const store = configureStore();
  ReactDOM.render(<ToDo />, root);
  ReactDOM.render(<App />, root);

  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;

  window.store = store;
});
