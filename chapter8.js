// CHAPTER 8: RELIABLE MULTIPLY
class MultiplicatorUnitFailure extends Error { }

function primitiveMultiply (a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply (a, b) {
  for (; ;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure) {
        console.log("Multiplication unit failure, trying again.");
      } else {
        throw e;
      }
    }
  }
}

// console.log(reliableMultiply(8, 8));

// CHAPTER 8: THE LOCKED BOX
const box = {
  locked: true,
  unlock () { this.locked = false; },
  lock () { this.locked = true; },
  _content: [],
  get content () {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked (body) {
  let wasLocked = false;
  if (box.locked === true) {
    wasLocked = true;
    box.unlock();
  }

  try {
    body();
    console.log('Box contents after execution: ' + box.content);
  } catch (e) {
    console.log('Terminated with exception: ' + e);
  } finally {
    if (wasLocked === true) box.lock();
  }
}

withBoxUnlocked(function () {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function () {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
// → true

