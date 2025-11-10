// Helper function: merges two sorted arrays
function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    // Compare elements and push the smaller one first
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Main mergeSort function
function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Base case

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively split and merge
    return merge(mergeSort(left), mergeSort(right));
}

// Example usage
const numbers = [38, 27, 43, 3, 9, 82, 10];
console.log("Before sorting:", numbers);
console.log("After sorting:", mergeSort(numbers));
