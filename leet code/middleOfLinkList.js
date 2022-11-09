var middleNode = function(head) {
    let slow = head;
     let count=0
      let obj={}
     let count2=0
      
     while (slow != null) {
         slow = slow.next;
         count++
     }
     let first =0
     let last =count-1
     let num= Math.round(first+(last-first)/2)
     while (head != null){
       if(num == count2){
         obj.val=head.val
         obj.next=head.next
       }
       count2++
       head=head.next
     }
   return obj
 };



//the whole of the nodelist class and method that find the middle node
// class ListNode {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }
// class SinglyLinkedList{
// constructor(){
//   this.head = null
//   this.tail = null
//   this.length = 0
// }

// push(val){
// let newNode = new ListNode(val)

// if(!this.head){
//    this.head = newNode
//    this.tail = this.head
// } else {
//   this.tail.next = newNode
//   this.tail = newNode 
// }
// this.length++
// }
// }
// function isPalindrome(arr){
  
//    let num= new SinglyLinkedList
//    for(let i=0; i< arr.length;i++){
//      num.push(arr[i])
//    }
//   let condition = middleNode(num.head);
//   console.log("isPalidrome: " + condition.next);
//  }

// var middleNode = function(head) {
//     let slow = head;
//     let count=0
//      let obj={}
//     let count2=0
     
//     while (slow != null) {
//         slow = slow.next;
//         count++
//     }
//     let first =0
//     let last =count-1
//     let num= Math.round(first+(last-first)/2)
//     while (head != null){
//       if(num == count2){
//         obj.val=head.val
//         obj.next=head.next
//       }
//       count2++
//       head=head.next
//     }
//     return obj
    
// };

isPalindrome([1,2,3,4,5])