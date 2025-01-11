// 1. How do you reverse an array (javascript)? #Use the reverse() method available for arrays.
let arr = [1, 2, 3, 4, 5]; // Input array
arr.reverse(); // Reverse the array in-place
console.log(arr); // Output: [5, 4, 3, 2, 1]

//2. How do you reverse a string in javascript : using built-in methods split
function reverseString(str) {
  let reversed = ''; // Initialize an empty string

  // Loop through the original string from the end to the beginning
  for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i]; // Append each character to the reversed string
  }

  return reversed;
}

const str = "hello";
console.log(reverseString(str)); // Output: "olleh"

// 3. Find the number of occurrences of a character in a String?
function countOccurrences(str, char) {
  let count = 0; // Initialize the counter

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
      // If the current character matches the target, increment the counter
      if (str[i] === char) {
          count++;
      }
  }

  return count; // Return the total count
}

const str1 = "hello world"; // Input string
const char = 'o';          // Target character to count
console.log(`Occurrences of '${char}': ${countOccurrences(str, char)}`); // Output: 2


//4. Function to find the smallest and largest numbers in an array
function findMinMax(arr) {
  // Initialize min and max with the first element of the array
  let min = arr[0];
  let max = arr[0];

  // Loop through the array starting from the second element (index 1)
  for (let i = 1; i < arr.length; i++) {
      // If the current element is smaller than the current min, update min
      if (arr[i] < min) min = arr[i];
      
      // If the current element is larger than the current max, update max
      if (arr[i] > max) max = arr[i];
  }
  // Return the smallest and largest numbers as an object
  return { min, max };
}
// Example usage:
const numbers = [12, 45, 7, 89, 23, 34, 1, 67]; // Array of random numbers
const result = findMinMax(numbers); // Call the function to find min and max

// Output the results
console.log(`Smallest number: ${result.min}`); // Output: Smallest number: 1
console.log(`Largest number: ${result.max}`);  // Output: Largest number: 89

/* 5.
 There is a row in a cinema which is represented as an array of integers.
1 means that the place is occupied, 0 means it’s free.
You need to seat a person as far away as possible from the closest neighbors.
Return an index of the array where to sit a person.
Constraints: there is always at least one empty and at least one occupied place in the row.
 */
function findBestSeat(seats) {
  let maxDistance = 0;
  let bestSeatIndex = -1;
  let n = seats.length;
  
  // Step 1: Find the distance to the nearest 1 for each empty seat
  for (let i = 0; i < n; i++) {
    if (seats[i] === 0) {
      // Find the closest occupied seat to the left and right
      let leftDistance = Infinity;
      let rightDistance = Infinity;

      // Check the left side
      for (let left = i - 1; left >= 0; left--) {
        if (seats[left] === 1) {
          leftDistance = i - left;
          break;
        }
      }

      // Check the right side
      for (let right = i + 1; right < n; right++) {
        if (seats[right] === 1) {
          rightDistance = right - i;
          break;
        }
      }

      // Step 2: Find the minimum distance to the nearest occupied seat
      let closestDistance = Math.min(leftDistance, rightDistance);

      // Step 3: If this is the greatest distance so far, update bestSeatIndex
      if (closestDistance > maxDistance) {
        maxDistance = closestDistance;
        bestSeatIndex = i;
      }
    }
  }
  
  return bestSeatIndex;
}

// Example usage
const row = [1, 0, 0, 0, 1, 0, 1];
console.log(findBestSeat(row)); // Output: 2

// 6. How do you handle alert in playwright

// Listen for dialog events
page.on('dialog', async (dialog) => {
  console.log(`Dialog message: ${dialog.message()}`);
  await dialog.accept();  // Accept the alert
});

// Trigger an alert
await page.evaluate(() => alert('This is an alert dialog!'));

// 7. How do you get the matching elements in an integer array?
function findDuplicates(arr) {
  const seen = new Set(); // Set to track elements we’ve seen
  const duplicates = new Set(); // Set to store duplicates

  // Iterate through the array
  for (const num of arr) {
      // If the number is already in the 'seen' Set, it's a duplicate
      if (seen.has(num)) {
          duplicates.add(num); // Add it to the duplicates Set
      } else {
          // Otherwise, add it to the 'seen' Set
          seen.add(num);
      }
  }

  // Convert the duplicates Set to an Array and return it
  return Array.from(duplicates);
}

// Example usage
const array = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 8];
console.log(findDuplicates(array)); // Output: [2, 3, 8]


/*
employees(id, name, surname)
payments(empid,paymentSum,paymentDate)
 
Make a query that returns 2 columns: Name+Surname of employee, 
 sum of all received in 2021 payments
 */
 SELECT CONCAT(e.name, ' ', e.surname) AS EmployeeFullName,
 SUM(p.paymentSum) AS TotalPayments2021 
 FROM employees e 
 JOIN payments p ON e.id = p.empid 
 WHERE YEAR(p.paymentDate) = 2021 
 GROUP BY e.id e.name, e.surname