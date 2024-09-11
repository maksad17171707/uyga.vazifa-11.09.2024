function getUniqueElements(arr1, arr2) {  
  
    const combinedArray = arr1.concat(arr2);  
    const uniqueElements = [...new Set(combinedArray)];  
    return uniqueElements;  
}  
const array1 = [1, 2, 3, 4, 5];  
const array2 = [4, 5, 6, 7, 8];  

const result = getUniqueElements(array1, array2);  
console.log(`Birlashtirilgan va noyob elementlar: ${result}`);