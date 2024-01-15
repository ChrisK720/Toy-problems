// I need to do the following:
// 1) prompt the user to enter in student mark
// 2) I need to collect that studen mark.
// 3) place it as an argument into gradeGen. (gradeGen is the function that calculates the grade)
// 4) Lastly I will ouput to the user the grade. I will assume user is working in console, therefore, I will console.log it



// Number one and two is handled using readline node module:
const readLine = require('readline')
   
const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("What is the student's mark ", gradeGen)




// Number 3 and 4 is handled by Gradegen function below
// This function does the following:
// 1) makes sure user input is vaid so no values less than 0 or greater than 100. (Check is made using If satement)
// 2) Once the user's input passes that criteria it simply checks what range the users mark falls in. (Check is made using else if statements)
// 3) Once range is obtained it assigns correct grade to result variable
// 4) Lastly readline interface is closed and result is loged. (Once again I assumed that user is working the console)
function gradeGen(answer){
const trueMark = Math.round(answer)
let result
 if(trueMark < 0 || trueMark > 100){
     result = 'enter a valid mark'
 }else if (trueMark > 79){
    result = 'A'
 }else if(trueMark <= 79 && trueMark >= 60){
    result = 'B'
 }
 // The instructions said 59-49 is a C and 49 - 40 is a D so ranges seemed to be overlapping at 49 so I just assumed that 59-50 is a C and 49-40 is a D.
 else if(trueMark <= 59 && trueMark > 49 ){
    result = 'C'
 }else if (trueMark <= 49 && trueMark >= 40){
    result = 'D'
 }else if (trueMark < 40){
    result = 'E'
 }

 console.log(result)
 rl.close()
 


}



