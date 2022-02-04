
var book = {
    name : "JS Book",
    version : 2.4,
    pages : 380,
    price : 45
};
book.name = "JS Book with ES6";
book.authorName = "Dipta Saha";
delete book.price;
console.log(book);