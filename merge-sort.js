function mergeSort(arr) {
    const midPoint = arr.length / 2; // Get array middle point

    if (arr.length < 2) {
        return arr; // Base case: if there's 1 or 0 items the array is already sorted:
    }

    const left = arr.splice(0, midPoint); // Divide the array:  arr becomes the right part
    return mergeHalves(mergeSort(left), mergeSort(arr)); // Then return both parts that are already sorted, merged:
}

function mergeHalves(left, right) {
    let sortedArray = [];
    // We need to take items of both arrays and compare them
    // As the arrays are being modified we can use a while loop
    // that does the sorting while theres items in both left and right arrays
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            // Compare first elements
            // If true put the first element of the left array in the sorted array
            // and removet it from the left array:
            sortedArray.push(left.shift());
        } else {
            sortedArray.push(right.shift()); // Else push the first element of the right array:
        }
    }
    // Return the sorted array and any elements left on the left or right arrays
    return [...sortedArray, ...left, ...right];
}

console.log(mergeSort([1, 4, 6, 7, 43, 2, 12, 5])); //[ 1, 2,  4,  5, 6, 7, 12, 43]
