function swapCase(str) {  
    let result = '';  

    for (let char of str) {  
        if (char === char.toUpperCase()) {  
            result += char.toLowerCase();  
        } else {  
            result += char.toUpperCase();  
        }  
    }  

    return result;  
}  

const input = 'Bugun ob-havo savuq va yomgirli';  
const output = swapCase(input);  
console.log(output);