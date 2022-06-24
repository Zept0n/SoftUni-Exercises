class LibraryCollection {
    constructor(capacity) {
        this.capacity=capacity;
        this.books=[];
    }

    addBook(bookName,bookAuthor) {
        if(this.capacity<=this.books.length) {
            throw new Error(`Not enough space in the collection.`)
        }

        this.books.push( {
            bookName,
            bookAuthor,
            payed:false
        })

        return `The ${bookName}, with an author ${bookAuthor}, collect.`

    }

    payBook(bookName) {
        const book=this.books.find((element)=>element.bookName==bookName)
        if (book==undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (book.payed==true) {
            throw new Error(`${bookName} has already been paid.`);
        }
        book.payed=true;
        return `${bookName} has been successfully paid.`
    }

    removeBook(bookName) {
        const bookIndex=this.books.findIndex((element)=>element.bookName==bookName);
        if (bookIndex==-1) {
            throw new Error(`The book, you're looking for, is not found.`)
        }
        const book=this.books[bookIndex];
        if (book.payed==false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }

        this.books.splice(bookIndex,1);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        let booksRow=[];

        if (bookAuthor==undefined) {
            booksRow=this.books.sort((a,b)=>a.bookName.localeCompare(b.bookName));

        } else {
            booksRow=this.books.filter((a)=>a.bookAuthor==bookAuthor);
            if (booksRow.length==0) {
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
        }
        let resultArray=[];
        for (let index=0;index<booksRow.length;index++) {
            let currentBook=booksRow[index];
            let payedString=''
            if(currentBook.payed==false) {
                payedString='Not Paid'
            } else {
                payedString='Has Paid'
            }
            resultArray.push(`${currentBook.bookName} == ${currentBook.bookAuthor} - ${payedString}.`)
        }
        
        resultArray=resultArray.join('\n');
        if(bookAuthor==undefined) {
            return [
                `The book collection has ${this.capacity-this.books.length} empty spots left.`,
                resultArray
            ].join('\n');
        } else {
            return [
                resultArray
            ].join('\n');
        }
    }
}


const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());



