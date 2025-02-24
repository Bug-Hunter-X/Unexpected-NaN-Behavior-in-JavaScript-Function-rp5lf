# Unexpected NaN Behavior in JavaScript Function

This repository demonstrates a common JavaScript bug related to handling `NaN` (Not a Number) values using loose comparison.  The `foo` function is intended to add two numbers, but its behavior with `NaN` is unexpected.

## Bug Description

The issue arises from JavaScript's loose equality (`==`) and the unique properties of `NaN`.  `NaN` is never equal to itself, even under loose comparison.  This leads to the unexpected output when one of the arguments is `NaN`. 

## Solution

The solution uses strict equality (`===`) to accurately check for `NaN` and provides a more robust implementation that handles edge cases appropriately.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` to see the problematic code.
3. Run `node bug.js` to see the unexpected output.
4. Open `bugSolution.js` to see the corrected code.
5. Run `node bugSolution.js` to observe the correct output.