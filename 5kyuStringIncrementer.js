// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
//PREP
//P: strings with or without number attach at the end of the string

//R: return string

//E

function incrementString (strng) {
    //use regex to extract number from the end of the string
    //increment the number 
    //join the incremented string back to the end of the string
    // return incrementedString
    let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)
  }

//   foo -> foo1
// foobar23 -> foobar24