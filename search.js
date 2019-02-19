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