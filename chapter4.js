// CHAPTER 4: THE SUM OF A RANGE
function range (start, end, step = 1) {
  let range = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      range.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      range.push(i);
    }
  }
  return range;
}

function sum (arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

// console.log(range(1, 10));
// console.log(range(5, 2, -1));
// console.log(sum(range(1, 10)));

// CHAPTER 4: REVERSE ARRAY
function reverseArray (array) {
  let result = [];
  for (let i = array.length-1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

function reverseArrayInPlace (array) {
  for (let i = 0; i < array.length / 2; i++) {
    let swap;
    swap = array[i];
    array[i] = array[array.length -1 - i];
    array[array.length -1 - i] = swap;
  }
}


// console.log(reverseArray(["A", "B", "C"]));
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);

// CHAPTER 4: A LIST
function arrayToList (array) {
  if (array.length > 1) {
    return {value: array.shift(), rest: arrayToList(array)};
  } else {
    return {value: array[0], rest: null};
  }
}

function listToArray (list) {
  let array = [];

  function digDeeper (list) {
    array.push(list.value);
    if (list.rest === null) {
      return;
    } else {
      digDeeper(list.rest);
    }
  }

  digDeeper(list);
  return array;
}

function prepend (item, list) {
  return {value: item, rest: list};
}

function nth (list, number) {
  let result = 'list';
  for (let i = 0; i < number; i++) {
    result += "['rest']";
  }
  result += "['value']";
  return eval(result);
}

// console.log(arrayToList([10, 20]));
// console.log(listToArray(arrayToList([10, 20, 30])));
// console.log(prepend(10, prepend(20, null)));
// console.log(nth(arrayToList([10, 20, 30]), 1));

// CHAPTER 4: DEEP COMPARISON
 function deepEqual (a, b) {
   if (typeof a !== typeof b) {
     return false;
   } else if (typeof a !== 'object') {
     return (a === b);
   } else if (a === null && b !== null || a !== null && b === null) {
     return false;
   } else {
     let equals = true;
     for (let key in a) {
       if (a.hasOwnProperty(key) && !deepEqual(a[key], b[key])) {
         equals = false;
         break;
       }
     }
     return equals;
   }
 }

// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// console.log(deepEqual(obj, {here: 1, object: 2}));
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));