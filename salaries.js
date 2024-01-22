// Readline interface is created in fiorst part of code 
// after 4 questions are answered process is started. At the end of process the net Salary is loged
// First part of function checks if all inputs are adequate. First part is the function called checker
// Checker calls a given deduction function based on salary before deduction
// Salary is apprpriately deducted in each deduction function
// at the end of each deduction function the net salary is loged to the user.


    let salary
    let tier
    let nhif
    let nssf

     const readLine = require('readline');

    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question('What is the salary before deduction: ', (answer) => {
        salary = answer
        
        secondQuestion()
        
    });
  function secondQuestion()  {
    rl.question('what is the tier: ', (answer) => {
        tier = answer
        thirdQuestion()
    })
  }  
  function thirdQuestion()  {
    rl.question('what is the NHIF contribution: ', (answer) => {
        nhif = answer
        forthQuestion()
    })
  }  

  function forthQuestion(){
    rl.question('what is the NSSF contribution: ', (answer) => {
        nssf = answer
        runProcess(salary,tier,nhif,nssf)
    })
  }

  function runProcess(salary,tier,nhif,nssf){
    checker(salary,tier,nhif,nssf)
  }



    function checker(salary,tier,nhif,nssf){
       salary =  Number(salary)
       tier = Number(tier)
        nhif = Number(nhif)
        nssf = Number(nssf)
        let realSalary = 0
        if(salary < 0){
            return console.log('salary not valid')
        }
        if(tier < 0 || tier > 2){
            return console.log('invalid tier')
        }
        realSalary = parseInt(salary)

        if(realSalary < 24000){
            deductNoTax(realSalary,tier,nhif,nssf)
           
            
        }else if(realSalary === 24000){
            deduct10Percent(realSalary,tier,nhif,nssf)


        }else if(realSalary > 24000 && realSalary < 32333){
            console.log(realSalary)
            deduct25Percent(realSalary,tier,nhif,nssf)
            
            
        }else if(realSalary > 32333 && realSalary < 500000 ){
            deduct30Percent(realSalary,tier,nhif,nssf)
            
            
        }else if(realSalary > 500000 && realSalary < 800000){
            deduct30Percent(realSalary,tier,nhif,nssf)
            
            
            
        }else if( realSalary > 800000){
            deduct35Percent(realSalary,tier,nhif,nssf)
           
        }

    }

    function deductNoTax(realSalary,tier,nhif,nssf){
        let netPay = realSalary
        if(tier === 1 && nssf <= 400 && nhif <= 6000){
            netPay = realSalary - nssf - nhif
            return console.log(`Your net pay is: ${netPay}`)
        }else if(tier === 2 && nssf <= 400 && nhif <= 18000){
            netPay = realSalary - nssf - nhif
            return console.log(`Your net pay is: ${netPay}`)
        }else{
            console.log('Something went wrong. You can cotribute a maximum of 400 to nssf. Maximum of 6000 to nhif if tier = 1 and a maximum of 18000 if tier = 2')
        }
    }


    function deduct10Percent(realSalary,tier,nhif,nssf){
        let netPay = realSalary
        if(tier === 1 && nssf <= 400 && nhif <= 6000){
            netPay -= (netPay * 0.1)
            netPay -= (nhif + nssf)
            return console.log(`Your net pay is: ${netPay}`)
        }else if(tier === 2 && nssf <= 400 && nhif <= 18000){
            netPay -= (netPay * 0.1)
            netPay -= (nhif + nssf)
            return console.log(`Your net pay is: ${netPay}`)
        }else{
            console.log('Something went wrong. You can cotribute a maximum of 400 to nssf. Maximum of 6000 to nhif if tier = 1 and a maximum of 18000 if tier = 2')
        }
    }

    
    function deduct25Percent(realSalary,tier,nhif,nssf){
        let netPay = realSalary
        if(tier === 1 && nssf <= 400 && nhif <= 6000){
            netPay -= (netPay * 0.25)
            netPay -= (nhif + nssf)
            return console.log(`Your net pay is: ${netPay}`)
        }else if(tier === 2 && nssf <= 400 && nhif <= 18000){
            netPay -= (netPay * 0.25)
            netPay -= (nhif + nssf)
            return console.log(`Your net pay is: ${netPay}`)
        }else{
            console.log('Something went wrong. You can cotribute a maximum of 400 to nssf. Maximum of 6000 to nhif if tier = 1 and a maximum of 18000 if tier = 2')
        }
    }


    function deduct30Percent(realSalary,tier,nhif,nssf){
        let netPay = realSalary
        if(tier === 1 && nssf <= 400 && nhif <= 6000){
            netPay -= (netPay * 0.30)
            netPay -= (nhif + nssf)
            return console.log(`Your net pay is: ${netPay}`)
        }else if(tier === 2 && nssf <= 400 && nhif <= 18000){
            netPay -= (netPay * 0.30)
            netPay -= (nhif + nssf)
            return console.log(`Your net pay is: ${netPay}`)
        }else{
            console.log('Something went wrong. You can cotribute a maximum of 400 to nssf. Maximum of 6000 to nhif if tier = 1 and a maximum of 18000 if tier = 2')
        }
    }


    function deduct35Percent(realSalary,tier,nhif,nssf){
        let netPay = realSalary
        if(tier === 1 && nssf <= 400 && nhif <= 6000){
            netPay -= (netPay * 0.35)
            netPay -= (nhif + nssf)
            return console.log(`Your net pay is: ${netPay}`)
        }else if(tier === 2 && nssf <= 400 && nhif <= 18000){
            netPay -= (netPay * 0.35)
            netPay -= (nhif + nssf)
            
            return console.log(`Your net pay is: ${netPay}`)
        }else{
            console.log('Something went wrong. You can cotribute a maximum of 400 to nssf. Maximum of 6000 to nhif if tier = 1 and a maximum of 18000 if tier = 2')
        }
    }

    


    

    