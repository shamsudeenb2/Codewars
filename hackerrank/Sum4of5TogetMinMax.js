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