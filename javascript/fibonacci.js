function fibonacci(num) {
  let arr = [0, 1]
  if (num < 0) {
    return "Please enter a number greater than or equal to zero"
  } else if (num < 2) {
    return arr[num]
  } else {
    for (let i = 0; i < num-1; i++) {
      arr.push(arr[i] + arr[i+1])
    }
    return arr[num]
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
// IN OWN WORDS: Want to find the nth element in Fibonacci series. 
// If looking for nth element, want to loop n-1 times with starting value of 0
// start with array of [0, 1]
// if num = 0, return 0; if num = 1, return 1;
// if num >= 2, return nth number of sequence
// if num >=2, want to add previous numbers num -1 times and then return last value
// if n = 2, pushing arr[0] + arr[1]
// if n = 3, pushing arr[0] + arr[1], arr[1] + arr[2]
