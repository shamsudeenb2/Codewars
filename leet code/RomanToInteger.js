// Algorithm to convert Roman Numerals to Integer Number:  

// Split the Roman Numeral string into Roman Symbols (character).
// Convert each symbol of Roman Numerals into the value it represents.
// Take symbol one by one from starting from index 0: 
// If current value of symbol is greater than or equal to the value of next symbol, then add this value to the running total.
// else subtract this value by adding the value of next symbol to the running total.


function romanToInt( s) {
    let res = 0
          for(let i=0; i<s.length;i++){          
            let s1= value(s[i])
            let s2 
            if(i+1 < s.length){
               s2= value(s[i+1])
               if(s1 >= s2){
                 res =res + s1
                }
                else{
                 res = res + s2 - s1;
                  i++;
               }
            }else{
              res = res + s1
              }
            
          }
              
              return res
      }
    function value(r){
           if (r == 'I')
              return 1;
          if (r == 'V')
              return 5;
          if (r == 'X')
              return 10;
          if (r == 'L')
              return 50;
          if (r == 'C')
              return 100;
          if (r == 'D')
              return 500;
          if (r == 'M')
              return 1000;
   
      return -1
      }
  
      console.log(romanToInt('III'))