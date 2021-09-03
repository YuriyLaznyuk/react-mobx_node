import { makeAutoObservable } from 'mobx';

class Counter {
  count = 0;
  timer = 50;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count = this.count + 1;
    console.log('increment ', this.count);
  }

  decrement() {
    this.count = this.count - 1;
    console.log('decrement ', this.count);
  }

  get total(){
    return `Count + timer = ${this.count+this.timer}`
  }

}

export default new Counter();