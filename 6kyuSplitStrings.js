//Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

//PREP
//P : string, no number, no symbol, no white space
//R : return an array of pairs of two characters
//E : 
function solution(str){
    
   //check if the string length is even
   if(str.length%2 === 0){
    let newStr = str
      return loop(newStr)
   }else{
    
    let newStr = str
    newStr+="_"
    // console.log(newStr)
    return loop(newStr)
   }

   function loop(st){
    //  console.log(st)
    let arr =[]
    let j =0
    for(let i=0; i < st.length; i+=2){
        arr[j] = st.slice(i, i+2)
        j++
    }
    return arr
   }
   //if even loop over,concatonate two character and put into an array 
   //if not, concatonate string with '_' and do same above
}