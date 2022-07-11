const {bookSelection}=require('./bookSelection');
const {expect}=require('chai');


describe("Tests …", function() {
    describe("isGenreSuitable", function() {

        it("returns Books with ${genre} genre are not suitable for kids at ${age} age", function() {
            expect(bookSelection.isGenreSuitable('Thriller',11)).to.equal('Books with Thriller genre are not suitable for kids at 11 age')
            expect(bookSelection.isGenreSuitable('Thriller',12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age')
            expect(bookSelection.isGenreSuitable('Horror',11)).to.equal('Books with Horror genre are not suitable for kids at 11 age')
            expect(bookSelection.isGenreSuitable('Horror',12)).to.equal('Books with Horror genre are not suitable for kids at 12 age')
        });

        it("returns Books with ${genre} genre are not suitable for kids at ${age} age", function() {
            expect(bookSelection.isGenreSuitable('Thriller',13)).to.equal('Those books are suitable')
            expect(bookSelection.isGenreSuitable('Horror',13)).to.equal('Those books are suitable')
            expect(bookSelection.isGenreSuitable('a',1)).to.equal('Those books are suitable')
            expect(bookSelection.isGenreSuitable('b',20)).to.equal('Those books are suitable')
            
        });
     });

     describe("isItAffordable", function() {

        it("happy path", function() {
            expect(bookSelection.isItAffordable(12,13)).to.equal('Book bought. You have 1$ left')
            expect(bookSelection.isItAffordable(5,10)).to.equal('Book bought. You have 5$ left')
            expect(bookSelection.isItAffordable(5,5)).to.equal('Book bought. You have 0$ left')
        });
        it("input validation", function() {
            expect(()=>bookSelection.isItAffordable('12',13)).to.throw('Invalid input')
            expect(()=>bookSelection.isItAffordable(12,'13')).to.throw('Invalid input')
        });
        it("not enough money", function() {
            expect(bookSelection.isItAffordable(13,12)).to.equal('You don\'t have enough money')
            expect(bookSelection.isItAffordable(5000,1000)).to.equal('You don\'t have enough money')
        });
     });

     describe("suitableTitles", function() {
        it("happy path", function() {
            expect(bookSelection.suitableTitles([
                {title: "The Da Vinci Code", genre: "Thriller"},
                {title: "aaaa",genre:'book'},
                {title: "baaaa",genre:'book'}
            ],'book')).to.deep.equal(['aaaa','baaaa']);
        });
        it("happy path", function() {
            expect(bookSelection.suitableTitles([
                {title: "The Da Vinci Code", genre: "Thriller"},
                {title: "aaaa",genre:'book'},
                {title: "baaaa",genre:'book'}
            ],'books')).to.deep.equal([]);
        });
        it("happy path", function() {
            expect(bookSelection.suitableTitles([
                {title: "The Da Vinci Code", genre: "Thriller"},
                {title: "aaaa",genre:'book'},
                {title: "baaaa",genre:'book'}
            ],'Thriller')).to.deep.equal(['The Da Vinci Code']);
        });

        it("input validation", function() {
            expect(()=>bookSelection.suitableTitles('12','genre')).to.throw('Invalid input')
            expect(()=>bookSelection.suitableTitles([],['genre'])).to.throw('Invalid input')
            expect(()=>bookSelection.suitableTitles(['12'],2)).to.throw('Invalid input')
            expect(()=>bookSelection.suitableTitles(2,'genre')).to.throw('Invalid input')
            expect(()=>bookSelection.suitableTitles([],true)).to.throw('Invalid input')
        });
     });

     // TODO: …
});
