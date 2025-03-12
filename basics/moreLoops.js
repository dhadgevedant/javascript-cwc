//returning values form loop

// let arr = [1,2,3,4,5]

// const oddNums = arr.filter( (val) => {
//     //val%2 !== 0 
//     return val > 2
// });

// console.log(oddNums)


//EXPERIMENTING WITH FILTERS

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];


// const formatBooks = ( (bk) => console.table(bk))


// const historyBooks = books.filter((bk) => {
//     return bk.genre === 'History';
// })

// console.log(historyBooks)

// formatBooks(historyBooks)


// MAP

//add 10 to each number present in the array

let mynums = [1,2,3,4,5,6,7,8,9,10]

// mynums.map( (num) => num+10)
// console.log(mynums)

//chaining
//add 1 to each number and then multiply by 10

const newnums = mynums
                .map( (nums) => nums+1)
                .map( (nums) => nums*10)

console.log(newnums)




