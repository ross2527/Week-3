// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// 1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
// •	Do not use numbers to reference the last element, find it programmatically, 
// •	ages[7] – ages[0] is not allowed!

// 1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// 1c.	Use a loop to iterate through the array and calculate the average age. 

let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log(ages[0])

console.log(ages[ages.length - 1])

ages.push(1, 3, 5)
console.log(ages)

console.log(ages[ages.length - 1])
console.log(ages[ages.length - 1] - ages[0])
