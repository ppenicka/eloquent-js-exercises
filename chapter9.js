// CHAPTER 9: REGEX GOLF

verify(/ca[rt]/,
  ["my car", "bad cats"],
  ["camper", "high art"]);

verify(/pr?op/,
  ["pop culture", "mad props"],
  ["plop", "prrrop"]);

verify(/ferr(et|y|ari)/,
  ["ferret", "ferry", "ferrari"],
  ["ferrum", "transfer A"]);

verify(/\b\w+ious\b/,
  ["how delicious", "spacious room"],
  ["ruinous", "consciousness"]);

verify(/\s[.,:;]/,
  ["bad punctuation ."],
  ["escape the period"]);

verify(/\w{7,}/,
  ["hottentottententen"],
  ["no", "hotten totten tenten"]);

verify(/\b[a-df-z]+\b/i,
  ["red platypus", "wobbling nest"],
  ["earth bed", "learning ape", "BEET"]);

function verify (regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}

// CHAPTER 9: QUOTING STYLE
let text = "'I'm the cook,' he said, 'it's my job.'";
console.log(text.replace(/(\W)'(\W)|(\W)'(\w)|(\w)'(\W)|^'|'$/g, "$1$3$5\"$4$6$2"));

// CHAPTER 9: NUMBERS AGAIN
let number = /^[+-]?([1-9]+\.[1-9]+|[1-9]+\.?|\.[1-9]+)([eE][+-]?[1-9]+)?$/;

for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
                 "1.3e2", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
                 ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}