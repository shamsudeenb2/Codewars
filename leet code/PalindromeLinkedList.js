// Follow the steps below to solve the problem:

// A simple solution is to use a stack of list nodes. This mainly involves three steps.
// Traverse the given list from head to tail and push every visited node to stack.
// Traverse the list again. For every visited node, pop a node from the stack and compare data of popped node with the currently visited node.
// If all nodes matched, then return true, else false.


class Node {
    constructor(val) {
        this.data = val;
        this.ptr = null;
    }
}
class SinglyLinkedList{
constructor(){
  this.head = null
  this.tail = null
  this.length = 0
}

push(val){
let newNode = new Node(val)

if(!this.head){
   this.head = newNode
   this.tail = this.head
} else {
  this.tail.ptr = newNode
  this.tail = newNode 
}
this.length++
}
}
function isPalindrome(arr){
  
   let num= new SinglyLinkedList
   for(let i=0; i< arr.length;i++){
     num.push(arr[i])
   }
  let condition = checkIsPalindrome(num.head);
  console.log("isPalidrome: " + condition);
 }
function checkIsPalindrome(head) {
var slow = head;
    let ispalin = true;
    let stack = [];
     console.log(head)
    while (slow != null) {
        stack.push(slow.data);
        slow = slow.ptr;
    }

    while (head != null) {

        let i = stack.pop();
        if (head.data == i) {
            ispalin = true;
        } else {
            ispalin = false;
            break;
        }
        head = head.ptr;
    }
    return ispalin;
}