//This calculator takes values that could be written in a browsers route path as a single string. It then returns the result as a number (or an error message).
//Route paths use the '/' symbol so this can't be in our calculator. Instead we are using the '$' symbol as our divide operator.
//Your task is to break the string down and calculate the expression using this order of operations. (division => multiplication => subtraction => addition)

//PREP
//P : get a string of any length containing numbers and operators:'+' = add, '-' = subtract, '*' = multiply, and '$' = divide example '1000$2.5$5+5-5+6$6'

//R : return the value

//E : 
function calculator(sum){
    //1. extract add from sum and convert it to arrayand iterate over it
    let result=sum.splite('+').map(s =>
         //2. extract subs from the iteration of array in 1 above. convert to array and iterate over it.
        s.split('-').map(s=>
            //3. extract mult from the iteration of array in 2 above. convert to array and iterate over it.
            s.split('*').map(s=>
                //4. extract div from the iteration of array in 3 above. convert to array and iterate over it.
                s.split('$').map(s=>
                    Number
                    //5. divide the result of the iteration in 4 above
                    ).reduce((a,b)=> a/b)
                //6. mult the result of the iteration in 3 above
                ).reduce((a,b)=> a*b)
            //7. subs the result of the iteration in 2 above
            ).reduce((a,b)=> a-b)
            //8. add the result of the iteration in 1 above
        ).reduce((a,b)=> a+b)

        
        return (isNaN(result))? "400: Bad request": result;
    
}