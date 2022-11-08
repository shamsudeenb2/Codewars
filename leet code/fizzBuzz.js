var fizzBuzz = function(n) {
    let answer =[]
    for(let i=1;i<=n;i++){

        if(i%3===0 && i%5===0){
            answer.push( 'fizzBuzz');
         }else if(i%3===0){
          answer.push('fizz');
         }else if(i%5===0){
             answer.push('Buzz')
         }else{
            answer.push(`${i}`)
            
         }
    }
     return answer;
  }

console.log(fizzBuzz(15))