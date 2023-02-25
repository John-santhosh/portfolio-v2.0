const removeFromArray = function(src,...rmv) {
    // using for loop for checking existence of the element in src 
    for(let i = 0 ; i<rmv.length ; i++){ 
        if(src.includes(rmv[i])){ 
            // getting index of the elements to be removed 
            let a = src.indexOf(rmv[i]) 
            // removing elements from src (the parameter)
            src.splice(a,1) 
            };
        } 
        return src
}

// console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3))

const sumAll = function(start, end) {
    let result = 0 ;
    // checking whether the inputs are Number only
    if(start !== Number(start) || end !== Number(end)  ) return "ERROR" ;
    // checking for negative values
    if(start <0 || end < 0 ) return "ERROR"

    // swapping value if start is greater than end 
    if(start > end ){
        let temp = start ;
        start = end ;
        end  = temp
    }
    // adding each value using for loop and storing it to result
    for (let i = start ; i<=end ; i++){
        result+=i
    }
    return result;
};

console.log(sumAll(-10, 1))