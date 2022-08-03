function cutFruits(fruits){
    let fruitsName = ['banana','apple','pear','orange','mango', 'guava', 'pineapple','water melon','date','berry','graves','blue berries','avocados','lychee','straw berries','cherries']


let newFruits =[]
    fruits.forEach(element => {
        if(fruitsName.includes(element)){
            if(element.length %2 === 0){
               let first = element.slice(0,element.length/2)
                           let second = element.slice(element.length/2,element.length)
                           newFruits.push(first)
                           newFruits.push(second)

            }else{
                  let first = element.slice(0,element.length/2+1)
                           let second = element.slice(element.length/2+1)
                           newFruits.push(first)
                           newFruits.push(second)
            }
        }
    });
    return newFruits
}


//other solution
const cut = (x, n =  Math.ceil(x.length/2)) => fruitsName.includes(x) ? [x.substr(0, n), x.substr(n)] : [x]
const cutFruits = ([x, ...xs]) => x ? cut(x).concat(cutFruits(xs)) : []

////////////////////////////
function cutFruits(fruits){
    let slicedFruits = fruits.map(fruit => {
      if(fruitsName.includes(fruit)) {
        let middle = Math.ceil(fruit.length / 2);
        return [fruit.slice(0, middle), fruit.slice(middle)];
      } else {
        return fruit
      }
    });
    
    return [].concat.apply([], slicedFruits)
  }