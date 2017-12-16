var array = ["Name123", "Name3", "Nam", "HelloWorld", "Hel", "Wor"];

var filtered = array.filter((item) => {
    return item.length <= 3;
})

console.log('Filtered array: ', filtered);

var mapped = array.map((item) => {
    return item.toUpperCase();
})

console.log('Mapped array: ', mapped);