const arr1 = [1, 2, 3, 4, 5, 7];  
const arr2 = [2, 3, 4, 6, 7, 4, 5];  

const difference = arr2.filter(num => !arr1.includes(num));  
console.log(`Ikki massiv orasidagi farq: ${difference}`);