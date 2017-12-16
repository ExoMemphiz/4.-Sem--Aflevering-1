
interface IBook {
    title: string,
    readonly author: string,
    published?: Date,
    pages?: number
}

function testFunction(book: IBook) {
    console.log(book.title);
}

let bookInstance: IBook = {
    author: 'Test1',
    title: 'Title1',
    pages: 5,
    published: new Date()
}

let smallBookInstance: IBook = {
    author: 'Test2',
    title: 'SmallBook'
}

testFunction(bookInstance);
testFunction(smallBookInstance)