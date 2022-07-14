let x = 3;
x = 13;
x = "m";
x = 15;
if (x % 3 === 0 && x % 5 === 0) {
  console.log("FizzBuzz");
} else if (x % 5 === 0) {
  console.log("Buzz");
} else if (x % 3 === 0) {
  console.log("Fizz");
} else {
  console.log(x);
}
