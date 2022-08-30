// Write function to insert element at index of array.
// Input: ([21, 4, 5, -1], 3, 99) // (array, index, element)
// Output: [21 ,4 ,5 ,99, -1]

let array = [21, 4, 5, -1];
let index = 3;
let element = 99;
let result = [];
function insert(array, index, element) {
  for (i = 0; i < index; i++) {
      result.push(array[i]);
  }
  result.push(element);
  const last = array[array.length - 1]
  result.push(last);
  console.log(result);
  
}

insert(array, index, element);
