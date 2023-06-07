function solution(priorities, location) {
  var answer = 0;
  while (!(location == 0 && priorities[location] >= Math.max(...priorities))) {
    const temp = priorities.shift();
    if (temp >= Math.max(...priorities)) {
      location--;
      answer++;
      continue;
    }
    if (location == 0) location = priorities.length;
    else location--;
    priorities.push(temp);
  }
  return ++answer;
}

// Linked List 이용해서 구현
// class Node{
//   constructor(value){
//       this.value = value;
//       this.next = null;
//   }
// }

// class Queue{
//   constructor() {
//       this.head = null;
//       this.tail = null;
//   }

//   enqueue(newValue){
//       const newNode = new Node(newValue);
//       if (this.head === null){
//           this.head = this.tail = newNode;
//       } else {
//           this.tail.next = newNode;
//           this.tail = newNode;
//       }
//   }

//   dequeue(){
//       const value = this.head.value;
//       this.head = this.head.next;
//       return value;
//   }

//   peek() {
//       return this.head.value;
//   }
// }

// function solution(priorities, location) {
//   const queue = new Queue();
//   for (let i = 0; i < priorities.length; i++){
//       queue.enqueue([priorities[i], i]);
//   }

//   priorities.sort((a, b) => b - a);

//   let count = 0;
//   while (true){
//       const currentValue = queue.peek();
//       if (currentValue[0] < priorities[count]){
//           queue.enqueue(queue.dequeue());
//       } else {
//           const value = queue.dequeue();
//           count++;
//           if (location === value[1])
//               return count;
//       }
//   }
// }
