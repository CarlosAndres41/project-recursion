// Iteration

function fibs(number) {
    let numbers = [];
    for (let i = 0; i <= number; i++) {
        if (i === 0) {
            numbers.push(0);
        } else if (i === 1) {
            numbers.push(1);
        } else {
            numbers.push(numbers[i - 1] + numbers[i - 2]);
        }
    }
    return numbers;
}

console.log(fibs(8)); //[0, 1, 1, 2, 3, 5, 8, 13];

// Recursion
function fibsRec(n) {
    return n === 0
        ? [].concat(0)
        : n === 1
        ? [].concat(fibsRec(n - 1), [1])
        : [].concat(
              fibsRec(n - 1),
              fibsRec(n - 1)[fibsRec(n - 1).length - 1] +
                  fibsRec(n - 1)[fibsRec(n - 1).length - 2]
          );
}

console.log(fibsRec(8));
