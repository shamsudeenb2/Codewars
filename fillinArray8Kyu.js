//Write a function that produces an array with the numbers 0 to N-1 in it.
//Note: The parameter is optional. So you have to give it a default value.

//PREM
//P: parameter is integer value
//R: it return array
//E: 
function arr(p){
    //create an empty array
    //loop over parameter stating from index 0
    //push index into the array
    let arra = new Array()
    for(let i=0; i< p; i++){
         arra.push(i)
    }
    return arra
}

//arr(1)=> return [0]
//arr()=> return []
//arr(4)=> return [0,1,2,3]


///another Solution

//const arr = n => Array.from({length: n}, (_, i) => i);