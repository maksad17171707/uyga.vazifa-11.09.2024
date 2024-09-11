function splitArray(arr, size) {  
    const result = [];  
    
    for (let i = 0; i < arr.length; i += size) {  
        result.push(arr.slice(i, i + size));  
    }  
    
    return result;  
}  
const arr = [1, 2, 3, 4];  
const size = 2;  
const splitResult = splitArray(arr, size);  

console.log(`Berilgan massiv: ${arr}`);  
console.log(`Qism massivlar: ${JSON.stringify(splitResult)}`);