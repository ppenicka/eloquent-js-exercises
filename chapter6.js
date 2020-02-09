// CHAPTER 6: A VECTOR TYPE
class Vec {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }
  plus (z) {
    return new Vec(this.x + z.x, this.y + z.y);
  }
  minus (z) {
    return new Vec(this.x - z.x, this.y - z.y);
  }
  get length () {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}

// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// console.log(new Vec(3, 4).length);

// CHAPTER 6: GROUPS
class Group {
  constructor () {
    this.values = [];
  }
  add (item) {
    this.values.push(item);
  }
  delete (item) {
    this.values.splice(this.values.indexOf(item),1);
  }
  has (item) {
    return (this.values.indexOf(item) !== -1) ? true : false;
  }
  static from (obj) {
    let group = new Group();
    for (let item of obj) {
      group.add(item);
    }
    return group;
  }
}

// let group = Group.from([10, 20]);
// console.log(group.has(10));
// console.log(group.has(30));
// group.add(10);
// group.delete(10);
// console.log(group.has(10));

// CHAPTER 6: ITERABLE GROUPS
class GroupIterator {
  constructor(group) {
    this.values = group.values;
    this.index = 0;
  }
  next() {
    let item;
    if (this.index < this.values.length) {
      item = {value: this.values[this.index], done: false};
    } else {
      item = {value: this.values[this.index], done: true};
    }
    this.index++;
    return item;
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this);
}

// for (let value of Group.from(["a", "b", "c"])) {
//   console.log(value);
// }

// CHAPTER 6: BORROWING A METHOD
let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.hasOwnProperty.call(map, 'one'));