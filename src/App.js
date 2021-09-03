import React from 'react';
import "./app.scss"
import Counter from './components/Counter';
import Todo from './components/Todo';
function App(props) {
  return (
    <div>
      <h1>Hello mobx1</h1>
      <Counter/>
      <Todo/>
      <Todo/>
    </div>
  );
}

export default App;