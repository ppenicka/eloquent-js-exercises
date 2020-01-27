// CHAPTER 2: LOOPING A TRIANGLE
function triangle () {
  for (let i = 0; i < 7; i++) {
    let output = '';
    for (let j = 0; j < i + 1; j++) {
      output += '#';
    }
    console.log(output);
  }
}

//triangle();

// CHAPTER 2: FIZZBUZZ
function fizzBuzz () {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        console.log('FizzBuzz');
      } else {
        console.log('Fizz');
      }
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz();

// CHAPTER 2: CHESSBOARD
function chessBoard (gridSize) {
  let result = '';

  for (let i = 0; i < gridSize; i++) {
    let even = (i % 2 === 0) ? ' ' : '#';
    let odd = (i % 2 === 0) ? '#' : ' ';

    for (let j = 0; j < gridSize; j++) {
      if (j % 2 === 0) {
        result += even;
      } else {
        result += odd;
      }
    }

    if (i < gridSize - 1) result += '\n';
  }

  return result;
}

// console.log(chessBoard(8));