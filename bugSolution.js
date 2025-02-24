function foo(a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return NaN; //Explicitly handle NaN
  } else if (a === 0 && b === 0) {
    return 0; 
  } else {
    return a + b; 
  }
}

console.log(foo(0, 0)); // Expected output: 0
console.log(foo(1, 2)); // Expected output: 3
console.log(foo(NaN, 5)); // Expected output: NaN
console.log(foo(5, NaN)); // Expected output: NaN