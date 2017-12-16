var array = ["Name123", "Name3", "Nam", "HelloWorld", "Hel", "Wor"];

function myFilter(array, filterCallback) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (filterCallback(array[i])) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

console.log('Custom filter: ', myFilter(array, (item) => {
    return (item.length <= 3);
}))

function myMap(array, mapCallback) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        newArr.push(mapCallback(array[i]));
    }
    return newArr;
}

console.log('Custom map: ', myMap(array, (item) => {
    return item.toUpperCase();
}))