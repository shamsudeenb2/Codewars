if(target === itemCount){
    return target
  }
  let total = itemCount[0]
for(let i=1; i<=itemCount.length-1;i++){
    if (total === target){
      return total
    }else if(total > target){
      return total-target
    }
    total=total+itemCount[i];
    console.log(itemCount[i],total,i)
}

return target-total

//
function connectedSum(graphNodes, graphFrom, graphTo) {
    //find edges
    let edges=graphFrom.map((a,b,ar)=>{
       if(graphTo.includes(a)){
         
       }
    })
    let edgesd=[]
    for(let i=0;i<graphFrom.length; i++){
      if(graphFrom.includes(graphTo[i])){
           edgesd.push(graphFrom[i])
            edgesd.push(graphTo[i])
       }
       if(graphTo.includes(graphFrom[i])){
            edgesd.push(graphTo[i])
         }
    }
  
  }
  console.log(connectedSum(10,[1,1,2,3,7],[2,3,4,5,8]))

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


  //To Complete 

  var minStickers = function(stickers, target) {
    let count =0
    let targ =target.split('')
    for(let i=0;i<stickers.length;i++){
      let sticks = stickers[i].split('')
      for(let j=0; j<targ.length;j++){
        if(sticks.includes(targ[j])){
          targ.splice(j,1)     
          console.log(j,sticks,targ)
        }
      }
      // if(target.length == i){
      //   break
      // }
    }
    return count
};
console.log(minStickers(['with','example','science'],'thehat'))