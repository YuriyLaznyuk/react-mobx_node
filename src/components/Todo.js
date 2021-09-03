import React from 'react';
import {observer} from 'mobx-react-lite';
import todo from '../store/todo';
import './style-components/todo.scss'
const Todo = observer(() => {
  console.log('render');
  return (
    <div className='main'>
      <table className='todo'>
        <thead>
       <th colSpan={3}>
         <td>
           <button onClick={()=>todo.fetchTodos()}>FETCH</button>

         </td>
       </th>
        </thead>
        <tbody>
        {
          todo.todos.map((elem=>(
            <tr key={elem.id} >
              <td><input type="checkbox"
              checked={elem.completed} onChange={()=>todo.completeTodo(elem.id)}/></td>
              <td>{elem.title}</td>
              <td><button onClick={()=>todo.removeTodo(elem.id)}>X</button></td>
            </tr>
          )))
        }
        </tbody>
      </table>

    </div>
  );
});

export default Todo;