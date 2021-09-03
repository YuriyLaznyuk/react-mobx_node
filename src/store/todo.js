import { makeAutoObservable } from 'mobx';

class Todo {

  todos = [
    { id: 1, title: 'go in shop', completed: false },
    { id: 2, title: 'go in sport gim', completed: false },
    { id: 3, title: 'reading the sport magazine', completed: false }
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(id) {
    this.todos = this.todos.filter(i => i.id !== id);
    console.log('remove');
  }

  completeTodo(id) {

    // this.todos.map(elem => (elem.id === id ? { ...elem, completed: !elem.completed } : elem));
    this.todos.map(elem => (elem.id === id ? elem.completed=!elem.completed : elem));
    console.log('completed');
  }


fetchTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res=>res.json())
      .then(json=>{
        this.todos=[...this.todos,...json.slice(4,15)]
      }).catch(err=>{
      console.log(err);
    })
}

}

export default new Todo();