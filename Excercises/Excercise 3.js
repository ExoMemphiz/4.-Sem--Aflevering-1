var array = ["Name123", "Name3", "Nam", "HelloWorld", "Hel", "Wor"];

function myFilter(filterCallback) {
    var newArr = [];
    for (var i = 0; i < this.length; i++) {
        if (filterCallback(this[i])) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}

Array.prototype.myFilter = myFilter;

console.log('Custom prototype filter: ', array.myFilter((item) => {
    return item.length <= 3;
}))

function myMap(mapCallback) {
    var newArr = [];
    for (var i = 0; i < this.length; i++) {
        newArr.push(mapCallback(this[i]));
    }
    return newArr;
}

Array.prototype.myMap = myMap;

console.log('Custom prototype map: ', array.myMap((item) => {
    return item.toUpperCase();
}))