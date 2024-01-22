// this is a function that takes in 4 arguments.
// the salary inputed is reduced accoding to the other 3 arguments.
// nhif is the argument tht is shows how much a person is contributing to nhif
// nssf is just like nhif exept now the the money goes to nssf and not nhif
// I have declared all the variables uesed for my code (refference line 27 to to line 38)
    // the main dedeucter of the salary is tax (for example line 69 the tax is the (salary * 0.1)) (reference is the follwing lines
    // 71,81,94,104,117,127,139,149,162,172) all of these have been done in accordance to the persons gross salary.
    // Tax can be split into groups based on the salary:
    // 1) salaries below 24000 (refference line 42 to line 64)
    // 2) salaries =  24000 (refference line 64 to 87 )
    // 3) salaries greater than 24000 and less than 32333 (refference line 87 to 110)
    // 4) salaries greater than 32333 and less than 500000 (refference line 110 to 132)
    // 5) salaries grester than 500000 and less than 800000 (refference line 132 to 155)
    // 6) salaries greater than 800000 (refference line 155 to line 178 )
    // throughout my code there is a statement that checks the salary range and then the statement that checks the tier.
    // tier one means a person can only contrinute a maximum of 6000 to NHIF. Tier two means a person can contribute  a maximum of 18000 to NHIF.
    // For both tiers a person can contribute a maximum of 400 to NSSF
    // please not I have used the new rates for NHIF provided on the webpage link we were given(rates before Febuary 2023 and the new rates for NHIF on the webpage)
    // the statements for the tier are nested within the salary statements for the salary for example if you look at line line 46 and 47 you will see this nesting. 
    // I have checked for to see weather the contribution is valid for the given tier by doing contribution - maxpossiblecontribution
    // and then checking weather this result is > 0, if it is it is not valid.


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

    


    

    