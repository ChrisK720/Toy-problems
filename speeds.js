
// Below is the question:
// Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

//   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.


// Below is the creation of the readline interface:
const readLine = require('readline')
 
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("What is the speed of the Car? ", speedDetective)

// Below is the solution:

// The function below is the one that handles the whole the process it has all been explained below.
function speedDetective(speed){
    let result1 // This is the rounded version of the speed inputed so decimals are valid inputs
    let result2 // This is the number of Km/h the person has above 70. So if 84Km/h then result 2 is 14
    let result3 // The number of demerit points for numbers divisable by 5
    let result4 // The number of demerit points for numbers not divisable by 5
    
    // The function is centered around these above variables. Let me explain:
    // funstion must first round input to allow for decimals. This result is strored as result 1
    // function gets number of Km/h above 70, and stores it in result 2
    // function then divides this number(result 2) by 5,and stores the result in result 3. Please not: The division of reault 2 by 5 is the demerit points.
    // If result 2 is divisable by 5 there the result of the division will be a whole number, but not so if reault 2 is not diviasble by 5. So to avoid outputing decimal demerit points we use result 3 right away if the division result is a whole number, and if not we bring in result 4 which will be the rounded version of result 3, and lastly will be used in results 3's place.
    
// below is the functions main body:
   result1 = Math.round(speed) // result 1
   result2 = result1 - 70 // result 2
   result3 = result2 / 5 // the number of demerit points
   if (speed < 0) {
       console.log("Speed can't be less than 0")
   }else if(result2 <= 0){ // checking if speed ok
        console.log('speed is ok')
    }else if((result2 % 5) === 0){ // if not run this else if statement. Please Note: this checks the disablity with 5 and thus uses result 3 no need for reault 4.
       if(result3 > 12 ){
        console.log('lisence suspended')
       }else{
           console.log(`you got ${result3} demerit points`)
       }

    
    }else if((result2 % 5) !== 0){ // At this point the user has a chnace of getting demerit points and the divisability with 5 gave a decimal. So result 4 is needed
     result4 = Math.round(result3)
     if(result4 === 0){ // result 4 is then used in reault 3's place.
         console.log('speed is ok')
     }else if(result4 > 0 && result4 <= 12){
         console.log(`you got ${result4} demerit points`)
     }else if(result4 > 12){
         console.log('lisence suspended')
     }
  }
  rl.close()


}


