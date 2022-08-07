//PREP
//get text , invert the text as it would in the mirrow, print the text and the mirrow

//P: only strings,
//R: console,
//E

function mirrow(str){
    //convert str to array and get max length
    //loop over the max length to get top and bottom border of the mirrow 
    //invert text
    //console the inverted text
    let strAr = str.split(' ').reduce((a,b)=> Math.max(a.length,b.length))
    let hash = '*'
    for(let i=0; i < strAr+2; i++){
      hash +="*"
    }
    let newAr =[]
    console.log(hash)
    str.split(' ').forEach(strN=>{
      newAr = []
      strN.split('').forEach((e) =>{
        newAr.unshift(e)
      })
      console.log('*'+ newAr.join('') +' *' )
    })
    console.log(hash)
    
}

//mirrow('Hello world') *********
                    //   * olleH *
                    //   * dlrow *
                    //   *********
// mirrow('Having fun')  *********
                    //   * ginvaH *
                    //   * nuf    *


////////////Other solution ///////
function mirror(s){
    let a = s.split(' ');
    console.log(a)
    let m = Math.max(...a.map(x=>x.length));
    a = a.map(x=>'* '+[...x].reverse().join('')+' '.repeat(m-x.length)+' *');
    return ['*'.repeat(m+4),...a,'*'.repeat(m+4)].join('\n');
  }