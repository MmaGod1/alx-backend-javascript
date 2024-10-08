# 0x00. ES6 Basics

This project focuses on using ECMAScript 6 (ES6) features, specifically dealing with new syntax and functionalities in JavaScript.

Resources

ECMAScript 6 (2015)

Arrow functions

Rest and spread parameters

Template literals

Iterators



# Tasks Overview

Task 0: Const or let?

Objective: Refactor functions to use const and let.

Key Features: const for constant values, let for variables.


Task 1: Block Scope

Objective: Prevent variable overwriting by using let within blocks.

Key Features: Block-scoped variables using let.


Task 2: Arrow Functions

Objective: Refactor traditional functions into arrow functions.

Key Features: Arrow function syntax for concise functions.


Task 3: Default Parameters

Objective: Simplify the function by using default parameters.

Key Features: Set default values directly in the function signature.


Task 4: Rest Parameter Syntax

Objective: Count the number of arguments passed using rest parameters.

Key Features: Use of the ...rest parameter to collect arguments.


Task 5: Spread Syntax

Objective: Concatenate arrays and strings in a single line using the spread operator.

Key Features: Use the spread operator (...) to expand arrays and strings.


Task 6: Template Literals

Objective: Refactor string concatenations into template literals.

Key Features: Use backticks () and ${}` to embed expressions in strings.


Task 7: Object Property Value Shorthand

Objective: Use ES6 shorthand for object properties.

Key Features: Directly assign variables as object properties.


Task 8: Computed Property Names

Objective: Use computed property names to create dynamic keys in an object.

Key Features: Define object properties dynamically using [expression].


Task 9: ES6 Method Properties

Objective: Use shorthand for defining methods in an object.

Key Features: Simplify object methods using the ES6 method syntax.


Task 10: For...of Loops

Objective: Refactor the loop to use for...of for cleaner iteration.

Key Features: Iterate over values in arrays using the for...of loop.


Task 11: Iterator

Objective: Create a function that returns an iterator for employees in a department.

Key Features: Implement iterators for custom traversal.


Task 12: Report Object

Objective: Create a report object with a method to count departments.

Key Features: Use object methods and spread syntax.


Task 13: Iterating through Report Objects

Objective: Return an iterator for all employees in a report object.

Key Features: Implement iteration over nested objects.


Task 14: Iterate through Object

Objective: Join all employee names into a single string, separated by |.

Key Features: Collect and join string values using an iterator.



---

# Setup

1. Install NodeJS 12.11.x:

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y


2. Install Jest, Babel, and ESLint in the project directory:

npm install



Testing

Run tests using the following command:

npm run test
