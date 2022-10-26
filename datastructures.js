// piece of data - val
//reference to next node - next

// class Node{
//   constructor(val){
//     this.val = val
//     this.next = null
//   }
// }
//
// class SinglyLinkedList{
//   constructor(){
//     this.head = null
//     this.tail = null
//     this.length = 0
//   }
//   push(val){
//     let newNode = new Node(val)
//     if (!this.head) {
//       this.head = newNode
//       this.tail = this.head
//     } else {
//       this.tail.next = newNode
//       this.tail = newNode
//     }
//     this.length++
//     return this
//   }
//   pop(){
//     if(!this.head) return undefined
//     let current = this.head
//     let newTail = current
//     while(current.next) {
//       newTail = current
//       current = current.next
//     }
//     this.tail = newTail
//     this.tail.next = null
//     this.length--
//     if(this.length === 0){
//       this.head = null
//       this.tail = null
//     }
//     return current
//   }
//   shift(){
//     if (!this.head) return undefined
//     let currentHead = this.head
//     this.head = currentHead.next
//     this.length--
//     if(this.length === 0){
//       this.tail = null
//     }
//     return currentHead
//   }
//   unshift(val){
//     let newNode = new Node(val)
//     if (!this.head) {
//       this.head = newNode
//       this.tail = this.head
//     } else {
//       newNode.next = this.head
//       this.head = newNode
//     }
//     this.length++
//     return this
//   }
//   get(index){
//     if (index < 0 || index >= this.length) return null
//     let counter = 0
//     let current = this.head
//     while(counter !== index){
//       current = current.next
//       counter++
//     }
//     return current
//   }
//   set(index, val){
//     let foundNode = this.get(index)
//     if (foundNode) {
//       foundNode.val = val
//       return true
//     }
//     return false
//   }
//   insert(index, val){
//     if (index < 0 || index > this.length) return false
//     if (index === this.length) return !!this.push(val)
//     if (index === 0) return !!this.unshift(val)

//     let newNode = new Node(val)
//     let prev = this.get(index-1)
//     let temp = prev.next
//     prev.next = newNode
//     newNode.next = temp
//     this.length++
//     return true
//   }
//   remove(index){
//     if (index < 0 || index >= this.length) return undefined
//     if (index === this.length - 1) return this.pop()
//     if (index === 0) return this.shift()

//     let previousNode = this.get(index - 1)
//     let removed = previousNode.next
//     previousNode.next = removed.next
//     this.length--
//     return removed
//   }
//   print(){
//     let arr = []
//     let current = this.head
//     while (current){
//       arr.push(current.val)
//       current = current.next
//     }
//     console.log(arr)
//   }
//   reverse(){
//     let node = this.head
//     this.head = this.tail
//     this.tail = node
//     let next
//     let prev = null
//     for(let i = 0; i < this.length; i++){
//       next = node.next
//       node.next = prev
//       prev = node
//       node = next
//     }
//     return this
//   }
// }

// // let first = new Node("Hi")
// // first.next = new Node("there")
// // first.next.next = new Node("how")
// // first.next.next.next = new Node("are")
// // first.next.next.next.next = new Node("you")

// let list = new SinglyLinkedList()
// // list.push("Hello")
// // list.push("Goodbye")
// // console.log(list)
// list.push("hi")
// list.push("goodbye")
// list.push("!")

// class Node{
//   constructor(val){
//     this.val = val
//     this.next = null
//     this.prev = null
//   }
// }

// class DoublyLinkedList {
//   constructor(){
//     this.head = null
//     this.tail = null
//     this.length = 0
//   }

//   push(val){
//     let newNode = new Node(val)
//     if (!this.head) {
//       this.head = newNode
//       this.tail = newNode
//     } else {
//       this.tail.next = newNode
//       newNode.prev = this.tail
//       this.tail = newNode
//     }
//     this.length++
//     return this
//   }

//   pop(){
//     if (!this.head) return undefined
//     let poppedNode = this.tail
//     if (this.length === 1) {
//       this.head = null
//       this.tail = null
//     } else {
//       this.tail = poppedNode.prev
//       this.tail.next = null
//       poppedNode.prev = null
//     }
//     this.length--
//     return poppedNode
//   }

//   shift(){
//     if(!this.head) return undefined
//     let oldHead = this.head
//     if (this.length === 1){
//       this.head = null
//       this.tail = null
//     } else {
//       this.head = oldHead.next
//       this.head.prev = null
//       oldHead.next = null
//     }
//     this.length--
//     return oldHead
//   }

//   unshift(val){
//     let newNode = new Node(val)
//     if (!this.head) {
//       this.head = newNode
//       this.tail = newNode
//     } else {
//       this.head.prev = newNode
//       newNode.next = this.head
//       this.head = newNode
//     }
//     this.length++
//     return this
//   }

//   get(index){
//     if (index < 0 || index >= this.length) return null
//     if(index <= this.length/2){
//       let count = 0
//       let current = this.head
//       while(count != index){
//         current = current.next
//         count++
//       }
//     } else {
//       let count = this.length - 1
//       let current = this.tail
//       while(count != index){
//         current = current.prev
//         count--
//       }
//     }
//     return current
//   }

//   set(index, val){
//     let foundNode = this.get(index)
//     if (foundNode !== null){
//       foundNode.val = val
//       return true
//     }
//     return false
//   }

//   insert(index, val){
//     if (index < 0 || index > this.length) return false
//     if (index === 0) return !!this.unshift(val)
//     if (index === this.length) return !!this.push(val)

//     let newNode = new Node(val)
//     let beforeNode = this.get(index - 1)
//     let afterNode = beforeNode.next

//     beforeNode.next = newNode
//     newNode.prev = beforeNode
//     afterNode.prev = newNode
//     newNode.next = afterNode
//     this.length++
//     return true
//   }

//   remove(index) {
//     if (index < 0 || index >= this.length) return undefined
//     if (index === 0) return !!this.shift()
//     if(index === this.length - 1) return !!this.pop()

//     let removedNode = this.get(index)
//     let beforeNode = removedNode.prev
//     let afterNode = removedNode.next

//     beforeNode.next = afterNode
//     afterNode.prev = beforeNode
//     removedNode.prev = null
//     removedNode.next = null
//     this.length--
//     return removedNode

//   }

// }
// class Node {
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }

// class Stack {
//   constructor(){
//     this.first = null
//     this.last = null
//     this.size = 0
//   }

//   push(val){
//     let newNode = new Node(val)
//     if (!this.first){
//       this.first = newNode
//       this.last = newNode
//     } else {
//       let temp = this.first
//       this.first = newNode
//       this.first.next = temp
//     }
//     return ++this.size
//   }

//   pop(){
//     if (!this.first) return null
//     let temp = this.first
//     if (this.first === this.last){
//       this.last = null
//     }
//     this.first = this.first.next
//     this.size--
//     return temp.value
//   }
// }

// class Queue {
//   constructor(){
//     this.first = null
//     this.last = null
//     this.size = 0
//   }

//   enqueue(val){
//     let newNode = new Node(val)
//     if(!this.first){
//       this.first = newNode
//       this.last = newNode
//     } else {
//       this.last.next = newNode
//       this.last = newNode
//     }
//     return ++this.size
//   }

//   dequeue(){
//     if (!this.first) return null
//     let temp = this.first
//     if(this.first === this.last){
//       this.last = null
//     }
//     this.first = this.first.next
//     this.size--
//     return temp.value
//   }
// }

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     let newNode = new Node(value);
//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     } else {
//       let current = this.root;
//       while (true) {
//         if (value === current.value) return undefined;
//         if (value < current.value) {
//           if (current.left === null) {
//             current.left = newNode;
//             return this;
//           } else {
//             current = current.left;
//           }
//         } else if (value > current.value) {
//           if (current.right === null) {
//             current.right = newNode;
//             return this;
//           } else {
//             current = current.right;
//           }
//         }
//       }
//     }
//   }

//   find(value) {
//     if (this.root === null) return false;
//     let current = this.root;
//     let found = false;
//     while (current && !found) {
//       if (value < current.value) {
//         current = current.left;
//       } else if (value > current.value) {
//         current = current.right;
//       } else {
//         found = true;
//       }
//     }
//     if (!found) return undefined;
//     return current;
//   }
//   BFS() {
//     let data = [];
//     let queue = [];
//     let node = this.root;

//     queue.push(node);
//     while (queue.length) {
//       node = queue.shift();
//       data.push(node);
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     return data;
//   }
//   DFSPreOrder() {
//     let data = [];
//     let current = this.root;
//     function traverse(node) {
//       data.push(node.value);
//       if (node.left) traverse(node.left);
//       if (node.right) traverse(node.right);
//     }
//     traverse(current);
//     return data;
//   }
//   DFSPostOrder() {
//     let data = [];
//     let current = this.root;
//     function traverse(node) {
//       if (node.left) traverse(node.left);
//       if (node.right) traverse(node.right);
//       data.push(node.value);
//     }
//     traverse(current);
//     return data;
//   }
//   DFSInOrder() {
//     let data = [];
//     let current = this.root;
//     function traverse(node) {
//       if (node.left) traverse(node.left);
//       data.push(node.value);
//       if (node.right) traverse(node.right);
//     }
//     traverse(current);
//     return data;
//   }
// }

// let tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(6);
// tree.insert(3);
// tree.insert(8);
// tree.insert(15);
// tree.insert(20);

// class MaxBinaryHeap {
//   constructor() {
//     this.values = [];
//   }
//   insert(element) {
//     this.values.push(element);
//     this.bubbleUp();
//   }
//   bubbleUp() {
//     let idx = this.values.length - 1;
//     const element = this.values[idx];
//     while (idx > 0) {
//       let parentIdx = Math.floor((idx - 1) / 2);
//       let parent = this.values[parentIdx];
//       if (element <= parent) break;
//       this.values[parentIdx] = element;
//       this.values[idx] = parent;
//       idx = parentIdx;
//     }
//   }
//   extractMax() {
//     const max = this.values[0];
//     const end = this.values.pop();
//     if(this.values.length > 0){
//       this.values[0] = end;
//       this.sinkDown();
//     }
//     return max;
//   }
//   sinkDown() {
//     let idx = 0;
//     const length = this.values.length;
//     const element = this.values[0];
//     while (true) {
//       let leftChildIdx = 2 * idx + 1;
//       let rightChildIdx = 2 * idx + 2;
//       let leftChild, rightChild;
//       let swap = null;

//       if (leftChildIdx < length) {
//         leftChild = this.values[leftChildIdx];
//         if (leftChild > element) {
//           swap = leftChildIdx;
//         }
//       }
//       if (rightChildIdx < length) {
//         rightChild = this.values[rightChildIdx];
//         if (
//           (swap === null && rightChild > element) ||
//           (swap !== null && rightChild > leftChild)
//         ) {
//           swap = rightChildIdx;
//         }
//       }

//       if (swap === null) break;
//       this.values[idx] = this.values[swap]
//       this.values[swap] = element
//       idx = swap
//     }
//   }
// }

// class Node {
//   constructor(val, priority){
//     this.val = val
//     this.priority = priority
//   }
// }

// class PriorityQueue {
//   constructor() {
//     this.values = [];
//   }
//   enqueue(val, priority) {
//     let newNode = new Node(val, priority)
//     this.values.push(newNode);
//     this.bubbleUp();
//   }
//   bubbleUp() {
//     let idx = this.values.length - 1;
//     const element = this.values[idx];
//     while (idx > 0) {
//       let parentIdx = Math.floor((idx - 1) / 2);
//       let parent = this.values[parentIdx];
//       if (element.priority >= parent.priority) break;
//       this.values[parentIdx] = element;
//       this.values[idx] = parent;
//       idx = parentIdx;
//     }
//   }
//   dequeue() {
//     const min = this.values[0];
//     const end = this.values.pop();
//     if(this.values.length > 0){
//       this.values[0] = end;
//       this.sinkDown();
//     }
//     return min;
//   }
//   sinkDown() {
//     let idx = 0;
//     const length = this.values.length;
//     const element = this.values[0];
//     while (true) {
//       let leftChildIdx = 2 * idx + 1;
//       let rightChildIdx = 2 * idx + 2;
//       let leftChild, rightChild;
//       let swap = null;

//       if (leftChildIdx < length) {
//         leftChild = this.values[leftChildIdx];
//         if (leftChild.priority < element.priority) {
//           swap = leftChildIdx;
//         }
//       }
//       if (rightChildIdx < length) {
//         rightChild = this.values[rightChildIdx];
//         if (
//           (swap === null && rightChild.priority < element.priority) ||
//           (swap !== null && rightChild.priority < leftChild.priority)
//         ) {
//           swap = rightChildIdx;
//         }
//       }

//       if (swap === null) break;
//       this.values[idx] = this.values[swap]
//       this.values[swap] = element
//       idx = swap
//     }
//   }
// }




// let ER = new PriorityQueue()
// ER.enqueue("common cold", 5)
// ER.enqueue("gunshot wound", 1)
// ER.enqueue("high fever", 4)
// ER.enqueue("broken arm", 2)
// ER.enqueue("glass in foot", 3)
// console.log(ER)
// console.log(ER.dequeue())
// console.log(ER)

function hash(key, arrayLen){
  let total = 0
  for(let char of key){
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen
  }
  return total
}

