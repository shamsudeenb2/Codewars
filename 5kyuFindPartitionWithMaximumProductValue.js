//PREP
//Get integer number, pertitions the number, search the partitions of n, return the partition with maximum product value
//P: integer, +
//R: return



    function findPartMaxProd(n){ 
        let a=n/3|0, b=n%3;
         let o = Array.from({length:a},_=>3);
         let x = 3**a;
         
         if(!b) console.log([o, x]);
         if(b==1){
             let o2 = o.slice();
             o2[a-1]--; o2.push(2);
             o[0]++;
             console.log([o,o2,x/3*4])
         }
         o.push(2);
         return [o, x*2];
       
     }

//8 -->  [[3, 3, 2], 10]
//10 --> [[4,3,3], [3, 3, 2, 2], 36]