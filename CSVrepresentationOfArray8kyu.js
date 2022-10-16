////function that return csv representation of array

//2-dimentional array -> no linear array,no str, no number. only dimentional array
//return strings
//[[ 0, 1, 2, 3, 4 ],
// [ 10,11,12,13,14 ],
//    [ 20,21,22,23,24 ],
//    [ 30,31,32,33,34 ]] -> '0,1,2,3,4\n'
                            // +'10,11,12,13,14\n'
                            // +'20,21,22,23,24\n'
                            // +'30,31,32,33,34'
//[['name','now','then'],
//['cat','rat','mouse']
// ]  ->   'name,now,then\n'
//          +'cat,rat,mouse\n'

function toCsvText(array){
    return array.join('\n')
  
  }
  
  console.log(toCsvText( [[ 0, 1, 2, 3, 4 ],
      [ 10,11,12,13,14 ],
      [ 20,21,22,23,24 ],
      [ 30,31,32,33,34 ]]))
  console.log(toCsvText([['name','now','then'],
  ['cat','rat','mouse']]))