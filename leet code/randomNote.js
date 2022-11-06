// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.



var canConstruct = function(ransomNote, magazine) {
    let copemagaz = magazine.split('');
    let copy=[]
     for(let i=0;i<ransomNote.length;i++){
       for(let j=0;j<copemagaz.length;j++){
         if(ransomNote[i]===copemagaz[j]){
             copy.push(ransomNote[i])
            copemagaz.splice(j,1)
            break;
         }
       }
     }
     let ncopy = copy.join('')
     if(ransomNote===ncopy){
       return true
     }else{
       return false
     }
 };
 
 console.log(canConstruct('aa','aab'))