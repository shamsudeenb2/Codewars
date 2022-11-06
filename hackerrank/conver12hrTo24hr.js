// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.


function timeConversion(s) {
    // Write your code here
    
    let reg=/[A-Z]/g
    let pmOrAm = s.match(reg)
    let first = s.split(":").shift()
    let hours = Number(first)
    console.log(s.match(reg),hours)
    
    if(pmOrAm.join('')==='PM'){
      if(Number(hours) < 12){
         hours = Number(hours)+12
         hours= hours.toString()}
    }else{
      if(Number(hours)===12){
          hours = 0
          hours= hours.toString().concat('0')
        }else{
          hours = Number(hours)
          if(hours<=9){
            hours= hours.toString()
            hours='0'.concat(hours)
          }
          hours= hours.toString()
        }
    }

      let time = s
      let timeN=time.split(':')
      timeN.splice(0,1,hours)
      let reg1 = /[0-9]/g
       let last = timeN.pop()
       let lastN = last.match(reg1).join('')
      timeN.push(lastN)
      let timem=timeN.join(':')
      return timem

}



console.log(timeConversion('12:00:00PM'))