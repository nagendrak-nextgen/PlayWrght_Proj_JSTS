// let e = 25
// let s
// {let a = 44
//     s = 12
//     console.log(a)
// }
// //let b : Number = 23

// console.log("1 ",s)
// console.log("2 ",s++)
// console.log("3 ",s)
// ++s
// console.log("4 ",s)



// let i = function(a,b)
// {
//     return a+b
// }

// console.log(i(2,5))

// ******************* Anonymous Function *******************

function add(a:number, func:Function)
				{
					const b = 20
					const c = 30
                    let result = func(b,c)
					console.log("Sum of 3 numbers - ", a + result)
				}
				
// add(10, function(b: number, c: number){return b + c })
 //add(12, async function(b: number, c: number){return b + c })
 //add(10, (b: number, c: number) => b + c )
// *********************************************************
 
// 	let arr_T = [1,2,3,4,5]
//     let sum = 0
//     for(let i = 0; i<arr_T.length;i++)
//     {
//         sum += arr_T[i]
//     }
    
// console.log(sum)

// let str_Temp = "Agendra"
// console.log(str_Temp.charCodeAt(1))


function add3num(a:number, add2num:Function)
{
	const b = 20
	const c = 30
	//console.log(a + add2num(b,c))
	return a + add2num(b,c)
}

// let res1 = add3num(10, function(d:number,e:number)
// {
// 	return d+e
// })	



let af = function(a:number,b:number)
	{
		console.log("Addition - ",a+b)
		console.log("Substraction - ",a-b)
		console.log("Multiplication - ",a*b)
		console.log("Devision - ",a/b)

		
	}

	//af(10,2)

	console.log("*******************************")
	//af(12,2)

	let arrf = (fname:string,a:number,b:number) =>{
		console.log(`${fname} Addition - `,a+b)
		console.log(`${fname} Substraction - `,a-b)
		console.log(`${fname} Multiplication - `,a*b)
		console.log(`${fname} Devision - `,a/b)

	}

	//arrf("arrf",14,2)

	let afun = () => "This is arrow funcation without arguments"

	console.log(afun())