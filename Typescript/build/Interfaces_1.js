function testFunction(book) {
    console.log(book.title);
}
var bookInstance = {
    author: 'Test1',
    title: 'Title1',
    pages: 5,
    published: new Date()
};
var smallBookInstance = {
    author: 'Test2',
    title: 'SmallBook'
};
testFunction(bookInstance);
testFunction(smallBookInstance);
//# sourceMappingURL=Interfaces_1.js.map