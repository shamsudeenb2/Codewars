//Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

//PREP
//P : string, 
function topThreeWords(text) {
    text = text.replace(/\,/g, '')
    text = text.replace(/\./g, '')
    text = text.replace(/\?/g, '')
    text = text.replace(/\!/g, '')
    text = text.replace(/  /g, ' ')
    text = text.replace(/\\/g, '')
    text = text.replace(/\//g, '')
    text = text.trim()
    text = text.toLowerCase()
    let array = text.split(' ')
    let hash = {}
  
    // return if just ''
    if (array[0] == '') return []
  
    // put in hash
    for (let word of array) {
      if (word in hash) {
        hash[word] += 1
      }
      else hash[word] = 1
    }
  
    // get rid of single quote matches
    delete hash["'"]
  
    // copy to array
    let arrayToSort = []
    for (let key in hash) arrayToSort.push([key, hash[key]])
  
    // sort the array by frequency
    let sorted = arrayToSort.sort((a, b) => b[1] - a[1])
  
    // get the top three
    let result = []
    for (let i = 0; i < 3; i += 1) {
      if (sorted[i]) result.push(sorted[i][0])
    }
    return result
  }