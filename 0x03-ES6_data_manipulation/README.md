Here's a more task-focused README.md for your project:

# 0x03. ES6 Data Manipulation

## Project Overview
This project focuses on manipulating data using ES6 features such as arrays, typed arrays, `Set`, `Map`, and `WeakMap`. The tasks involve using built-in methods like `map()`, `filter()`, and `reduce()`, alongside more advanced data structures for efficient data handling.

## Requirements
- All code will run on **Ubuntu 18.04 LTS** with **NodeJS 12.11.x**.
- Files should be JavaScript (`.js`) and end with a new line.
- Code must pass all **Jest** tests and conform to **ESLint** rules.
- Functions must be exported.

## Setup
1. Install NodeJS 12.11.x:
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y

2. Install dependencies:

npm install



Tasks

0. Basic List of Objects

File: 0-get_list_students.js

Description: Create a function getListStudents that returns an array of objects representing students with the attributes id, firstName, and location.


1. More Mapping

File: 1-get_list_student_ids.js

Description: Create a function getListStudentIds that returns an array of student IDs using map(). If the input is not an array, return an empty array.


2. Filter by Location

File: 2-get_students_by_loc.js

Description: Create a function getStudentsByLocation that filters an array of students by a given city using filter().


3. Reduce Student IDs

File: 3-get_ids_sum.js

Description: Create a function getStudentIdsSum that returns the sum of all student IDs using reduce().


4. Update Student Grades by City

File: 4-update_grade_by_city.js

Description: Create a function updateStudentGradeByCity that filters students by city and updates their grades using map() and filter(). If no grade is found, set it to N/A.


5. Typed Arrays

File: 5-typed_arrays.js

Description: Create a function createInt8TypedArray that returns an ArrayBuffer with an Int8 value at a specific position. If the position is out of range, throw an error.


6. Set from Array

File: 6-set.js

Description: Create a function setFromArray that returns a Set from an array.


7. Has Values from Array

File: 7-has_array_values.js

Description: Create a function hasValuesFromArray that checks if all elements in an array exist within a Set.


8. Clean Set

File: 8-clean_set.js

Description: Create a function cleanSet that returns a string of all Set values starting with a specific string, concatenated with -.


9. Groceries List

File: 9-groceries_list.js

Description: Create a function groceriesList that returns a Map with grocery items and their quantities.


10. Update Unique Items

File: 10-update_uniq_items.js

Description: Create a function updateUniqueItems that updates items in a Map where the quantity is 1 to 100. Throw an error if the argument is not a Map.


11. WeakMap and QueryAPI (Advanced)

File: 100-weak.js

Description: Create a WeakMap to track API queries. If an API endpoint is called more than 5 times, throw an error with the message "Endpoint load is high".


Testing

Run all tests:

npm run test

Verify code with ESLint:

npm run lint
