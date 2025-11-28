// ********************** Reverse an array **************************
        /* ********* Method 1 *********
        let arr_Temp = [1,2,3,4,5,6,7,8,9,10]
        let arr_Temp2 = []
        let int_Cnt = 0
        for (let i = arr_Temp.length-1 ; i>=0 ; i--)
        {
            arr_Temp2[int_Cnt] = arr_Temp[i]
            int_Cnt = int_Cnt + 1
        }
        console.log(arr_Temp2)
        */
        /* ********* Method 2 *********
        let arr_Temp = [1,2,3,4,5,6,7,8,9,10]
        let int_Temp
        let arrlength = arr_Temp.length
        for(let i = 0;i<arrlength/2;i++)
        {
            int_Temp = arr_Temp[arrlength-1-i]
            arr_Temp.splice(arrlength-1-i,1,arr_Temp[i])
            arr_Temp.splice(i,1,int_Temp)
            //console.log(i, " --------",arr_Temp)
        }
        
        console.log("Final ------- ",arr_Temp)
        */

        let arr_Temp1 = [1,2,3,4,5,6,7,8,9,10]
        let arr_Temp2 = [1,2,3,4,5,6,7,8,9,10]
        let arr_Temp3 = [1,2,3,4,5,6,7,8,9,10]
        arr_Temp1.concat(arr_Temp1,arr_Temp2,arr_Temp3)
        console.log(arr_Temp1.concat(arr_Temp1,arr_Temp2,arr_Temp3))
       // arr_Temp1.findIndex()