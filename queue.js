class Queue {
  constructor() {
      this.items = [];
  }

  enqueue(element) {
      this.items.push(element);
  }

  dequeue() {
      if (this.isEmpty()) {
          return "Queue is empty";
      }
      return this.items.shift();
  }

  peek() {
      if (this.isEmpty()) {
          return "Queue is empty";
      }
      return this.items[0];
  }

  isEmpty() {
      return this.items.length === 0;
  }

  size() {
      return this.items.length;
  }

  print() {
      console.log(this.items);
  }
}

const queue = new Queue();
queue.enqueue(30);
queue.enqueue(90);
queue.enqueue(10000);
queue.print(); // Output: [30, 90, 1000]
console.log(queue.dequeue()); // Output: 30
console.log(queue.peek()); // Output: 90
console.log(queue.size()); // 2
console.log(queue.isEmpty()); // Output: false

console.log(queue.dequeue()); // Output: 90
console.log(queue.dequeue()); // Output: 1000
console.log(queue.isEmpty()); // Output: true
