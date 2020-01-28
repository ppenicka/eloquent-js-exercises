// CHAPTER 3: MINIMUM
function minimum (a, b) {
  return (a < b) ? a : b;
}

// console.log(minimum(0,10));
// console.log(minimum(0, -10));

// CHAPTER 3: RECURSION
function isEven (x) {
  if (x === 0) return true;
  if (x === 1) return false;
  return isEven(x - 2);
}

// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-1));

// CHAPTER 3: BEAN COUNTING
function countBs(string) {
  return countChar(string, 'B');
}

function countChar(string, char) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) count++;
  }

  return count;
}

// console.log(countBs('BBC'));
// console.log(countChar("kakkerlak", "k"));