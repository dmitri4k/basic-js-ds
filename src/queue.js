const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  getUnderlyingList() {
    return this.front;
  }
  
  enqueue(value) {
    if (this.front == null) {
      this.front = new ListNode(value);
			return
    }

    let current = this.front;

    while (current.next) {
      current = current.next; // переход на следующий
    }
    current.next = new ListNode(value);

  }

  dequeue() {
    let current = this.front;
    this.front = current.next;
    return current.value;
  }
}

module.exports = {
  Queue
};
