/* Dependencies */

function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0; // Handle the case where the array is empty
    }
    
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

// Example usage:
const numbers = [5, 10, 15, 20, 25];
const average = calculateAverage(numbers);
console.log("Average:", average);