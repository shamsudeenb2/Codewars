//sum the 4of5 to get min and max
function miniMaxSum(arr) {
    let sor = arr.sort((a,b)=>{
      return a-b
    })
    let max=0
    let min=0
     for(let i=0;i< sor.length-1;i++){
       min=min+sor[i]
     }
    for(let i=1;i< sor.length;i++){
       max=max+sor[i]
     }
     let maxmin=`${min} ${max}`
     console.log(maxmin)
  }
  
  console.log(miniMaxSum([3,2,5, 4, 1]))


  //Review solution
  
function minMax(arr){
  let min= sum(arr,'min')
   let max=sum(arr, 'max')
   
   return `${min} ${max}`
 }
 function sum(ar,minMax){
   let ini=0
   let arMin=[...ar]
   arMin.sort()
   if(minMax==='min') arMin.pop()
   if(minMax==='max') arMin.shift()
   return arMin.reduce((acc,pre)=> acc+pre, ini)
 }
 console.log(minMax([1,9,7,5,3]))