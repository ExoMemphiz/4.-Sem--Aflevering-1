function Numbers(numbs) {
    var self = this;
    this.nums = numbs;
    this.fives = [];
    this.nums.forEach(function (v) {
        if (v % 5 === 0) {
            self.fives.push(v);
        }
    });
}

var numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50]);
console.log(numbers.fives);

function NumbersArrow(numbs) {
    this.nums = numbs;
    this.fives = [];
    this.nums.forEach((v) => {
        if (v % 5 === 0) {
            this.fives.push(v);
        }
    });
}
var numbersArrow = new NumbersArrow([1, 3, 5, 10, 14, 20, 33, 50]);
console.log(numbersArrow.fives);



var counter = {
    count: 0,
    inc: () => {
        this.count++
    }
}
var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //Now one
