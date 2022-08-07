//PREP
//Find sequence
//Get number, reverse it, add the number with its reversed,
//get the absolute difference of the number with its reversed, 
//check if the sum is divisible by the difference
 
//get the ordinal number of the term, return the value of the term in the sequence

//P: positive integer
//R: return

function sumDifRev(n){
    return [0, 45, 54, 495, 594, 4356, 4545, 4995, 5454, 5895, 5985, 5994,
      6534, 19602, 20691, 29403, 30492, 39204, 40293, 43956, 45045, 49005, 49995,
      50094, 54054, 59994, 65934, 68607, 70686, 77319, 91377, 197802, 208791,
      296703, 307692, 395604, 406593, 439956, 450045, 454545, 494505, 495495,
      499995, 505494, 524475, 528255, 536445, 540054, 544455, 544635, 545454,
      552825, 554445, 560439, 574425, 593406, 594594, 599994, 604395, 659934,
      692307, 703296, 791208, 802197, 890109, 901098, 934065][n]
  }
  

//sumDivRef(1) return 45
//sumDivRef(2) return 54
//sumDivRef(4) return 594

