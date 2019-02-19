function binarySearch(list, name) {
    // initial values for start, middle and end
    let start = 0
    let stop = list.length - 1
    let middle = Math.floor((start + stop) / 2)
    console.log(middle)

    // While the middle is not what we're looking for and the list does not have a single item
    while ((list[middle] !== name) && (start < stop)) {

    }


}


// Article Example
// function binarySearch (list, value) {
//   // initial values for start, middle and end
//   let start = 0
//   let stop = list.length - 1
//   let middle = Math.floor((start + stop) / 2)

//   // While the middle is not what we're looking for and the list does not have a single item
//   while (list[middle] !== value && start < stop) {
//     if (value < list[middle]) {
//       stop = middle - 1
//     } else {
//       start = middle + 1
//     }

//     // recalculate middle on every iteration
//     middle = Math.floor((start + stop) / 2)
//   }

//   // if the current middle item is what we're looking for return it's index, else return -1
//   return (list[middle] !== value) ? -1 : middle
// }

// const list = [2, 5, 8, 9, 13, 45, 67, 99]
// console.log(binarySearch(list, 99)) // 7 -> returns the index of the item


// HongChiogn
// const fs = require('fs');

// let rawdata = fs.readFileSync('phonebook.json');
// //Array of Objects
// let phonebook = JSON.parse(rawdata);

// const binSearch = (arr, attr, val) => {
//   //sort array
//   switch (attr) {
//     case 'id':
//       arr.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
//       break;

//     case 'phone':
//       arr.sort((a,b) => (a.phone > b.phone) ? 1 : ((b.phone > a.phone) ? -1 : 0));
//       break;

//     case 'name':
//       arr.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
//       break;
//   };

//   function searchAlgo(a, val) {
//     if (a[Math.floor(a.length/2)][attr]  == val) {
//       return a[Math.floor(a.length/2)];
//     } else if (a[Math.floor(a.length/2)][attr] > val) {
//       return searchAlgo(a.slice(0, Math.floor(a.length/2)), val);
//     } else {
//       return searchAlgo(a.slice(Math.floor(a.length/2), a.length), val);
//     }
//   };

//   return searchAlgo(arr, val)
// };

// console.log(binSearch(phonebook, 'phone', 29274704));

// Lj answer
// const nameList = [
//   "Aaron",
//   "Andy",
//   "Batman",
//   "Betsy",
//   "Boba",
//   "Bonnie",
//   "Clarence",
//   "Daisy",
//   "Elektra",
//   "Flash"
// ];

// function search(list, q) {
//   // set init found condition
//   let found = false;
//   let counter = 1;

//   // list by alphabetical order and convert to uppercase
//   list = list.sort((a, b) => a - b);
//   list = list.map(item => item.toUpperCase());
//   q = q.toUpperCase();

//   while (list.length > 1 && !found) {
//     //  split list into half
//     let half = Math.floor(list.length / 2);
//     let left = list.slice(0, half);
//     let right = list.slice(half, list.length);
//     console.log(counter, left, q, right);

//     // set last word of left side and first word of right side
//     let leftWord = left[left.length - 1];
//     let rightWord = right[0];

//     // if left or right side == query, set found == true
//     if (leftWord == q || rightWord == q) found = true;
//     else {
//       // check first char of words,
//       // if query smaller than left and right side, set list to left side
//       // else query must be on right side
//       if (
//         q.charAt(0) <= leftWord.charAt(0) &&
//         q.charAt(0) <= rightWord.charAt(0)
//       )
//         list = left;
//       else list = right;
//     }
//     counter++;
//   }
//   return found;
// }
// search(nameList, "Batman");