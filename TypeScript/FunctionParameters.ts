/*
Types of parameters
		1. Default Parameter
		2. Option Parameter (Only part of Type script)
		3. Rest Parameter 
	
*/
//************************ Default Parameter ************************
function arthematicoperation(num1:number,num2:number,operator:string="ADD")
{
    switch (operator.toUpperCase())
    {
        case "ADD":
            console.log(`${operator} of ${num1} and ${num2} is - `,num1 + num2)
            break
        case "SUB":
            console.log(`${operator} of ${num1} and ${num2} is - `, num1-num2)
            break
        case "MUL":
            console.log(`${operator} of ${num1} and ${num2} is - `, num1*num2)
            break
        default:
            console.log(`${operator} operatgor is not in the list. please correct`)
    }  
}

/*
arthematicoperation(10,2)
arthematicoperation(10,2,"add")
arthematicoperation(10,2,"mul")
arthematicoperation(10,2,"nag")
*/
//************************ Optional Parameter ************************
function AddingMultipleNumbers(num1:number,num2:number,num3?:number,num4?:number)
{
    let sum = 0
    if (num3 !=undefined)
    {
       sum += num3 
    }

 if (num4 !=undefined)
    {
       sum += num4
    }
    console.log(num1+num2+sum)
}

/*
AddingMultipleNumbers(1,2)
AddingMultipleNumbers(1,2,3)
AddingMultipleNumbers(1,2,3,4)
*/

//************************ Rest (...) Parameter ************************
function AddingMultipleValues(a:number,...num:number[])
{
    let sum = 0
   for (let e of num)
   {
        sum += e
   }
    console.log("Addition using Rest Parameters - ",sum)
}

AddingMultipleValues(1,1,2,3,4,5)
