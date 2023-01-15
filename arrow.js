const author = {
    fullName: "Bob Alice",
    books: ["Dark Tower", "Pet Cemetary", "Billy Summers"],
    printBooks() {
      this.books.forEach(book => console.log(book + ' by ' +
         this.fullName));
    }
 };
 
 export function printAuthors() {
    console.log(author.printBooks())
 };