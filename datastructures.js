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
class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }

  push(val){
    let newNode = new Node(val)
    if (!this.first){
      this.first = newNode
      this.last = newNode
    } else {
      let temp = this.first
      this.first = newNode
      this.first.next = temp
    }
    return ++this.size
  }

  pop(){
    if (!this.first) return null
    let temp = this.first
    if (this.first === this.last){
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp.value
  }
}

class Queue {
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(val){
    let newNode = new Node(val)
    if(!this.first){
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    return ++this.size
  }    

  dequeue(){
    if (!this.first) return null
    let temp = this.first
    if(this.first === this.last){
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp.value
  }
}

