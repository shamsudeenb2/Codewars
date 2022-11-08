
function findMedian(arr) {
    // Write your code here
   let sorted= arr.sort((a,b)=>{
      return a-b
    })
    let i1=sorted[0]
    let i2=sorted[sorted.length-1]
    let ind= 0
    let ind2 = sorted.length-1
    
    //find middle Numner in an array
    let midN = i1 +(i2-i1)/2

    //find the middle index in an array
    let midI = ind +(ind2-ind)/2
return midI
}

console.log(findMedian([2,3,1,4,5]))