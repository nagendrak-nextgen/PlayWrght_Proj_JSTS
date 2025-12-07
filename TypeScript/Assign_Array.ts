/*
1. display all the elements in an array using for loop, for of loop and while loop.
2. display even numbers in an array
3. dsplay all even numbers in single line
4. change even numbers to odd and odd numbers to even
5. Find duplicate numbers in an array
6. find duplicate values in an array
7. Arrange numbers in assending order in an array
8. Find if the array values are in assending or decending order
10. Find the index of second occurance of a given value in an array
11. Find the sum of all even numbers and sum of odd numbers in an array and add even sum in the begining of the array and odd sum at the end of the same array
12. Find the count of numbers and string values in an array
13. Add even number nex to each odd number in an array
14. In a given main string array, find the position of the sub string.
	example mainstring = ["h","i","p","p","o","p","o","t","a","m","u","s"]
			subsring = ["p","o","t"]
			O/P - Index 5 to 7 or Position 6 to 8
15. Convert below array into string
    let arr_Temp12 = ["j","a","v","a"," ","s","c","r","i","p","t"," ","c","o","d","e"]
    O/P = "java script code"

*/


//########################## Assignment 1 ##########################
//display all the elements in an array using for loop, for of loop and while loop.
let arr_Array_Ass1 = [1,2,3,4,5,6,7,8]
	//************* Method 1  - Using for loop *************
	/*for (let i = 0; i<arr_Array_Ass1.length; i++)
	{
		console.log(arr_Array_Ass1[i])
	}*/

	//************* Method 2 - Using for of loop *************
	/*for (let e of arr_Array_Ass1)
	{
		console.log(e)
	}*/

	//************* Method 3 - Using while loop *************
	/*let int_cnt = 0
	while (int_cnt < arr_Array_Ass1.length)
	{
		console.log(arr_Array_Ass1[int_cnt])
		int_cnt+= 1
	}*/

	//########################## Assignment 2 ##########################
	//display even numbers in an array