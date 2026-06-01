function fibs(number) {
    if (number <= 1) return number === 1 ? [0] : [];

    const fibonacci = [0, 1];

    for (let i = 2; i < number; i++) {
        fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
    }
  return fibonacci;
}

/*This JavaScript function generates an array containing a specific amount of numbers from the Fibonacci sequence, 
depending on the number input. */

function fibsRec(number) {
    if (number <= 2) return number === 2 ? [0, 1] : number === 1 ? [0] : [];

    const previousFibonacci = fibsRec(number - 1);

    return previousFibonacci.concat(
        previousFibonacci.at(-1) + previousFibonacci.at(-2)
    );
}

/*This is a perfectly valid recursive JavaScript function that returns an array of the first number elements of the Fibonacci sequence, 
starting with 0 and 1.It generates the array by recursively
building the list from the ground up, adding the sum of the last two numbers to the end of the previous array. */

for(let i=0; i <=8; i++ ) {
    console.log(fibsRec(1));
}

/*This code initializes a loop that runs 9 times (when i goes from 0 to 8). Each time it runs, 
it will call the fibsRec(1) function and print its return value to the console */

export {fibs, fibsRec}

//We are exporting these two functions

/*Code for fibonacci  */