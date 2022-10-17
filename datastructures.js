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

class Node{
  constructor(val){
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val){
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop(){
    if (!this.head) return undefined
    let poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }
    this.length--
    return poppedNode

  }

}