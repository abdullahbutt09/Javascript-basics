// const arr = ["Abdullah" , 32 , 78 , true];
// const newarr = []

// const holdval = arr.forEach((item) => newarr.push(item + 10));

// console.log(newarr);

// const numbers = arr.filter((item) => item % 2 == 0);
// const numbers = arr.filter((item) => item <= 5 == 0);

// const MapTry = arr.map((index , arr_value , full_arr) => console.log(index ,arr_value , full_arr));

const books = 
[
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let GrabData = books.filter((connect) => connect.publish > 2000 && connect.genre === "Science" || connect.genre === "History");
// let GrabData = books.filter(function(connect){return connect.publish > 2000});

// console.log(GrabData);

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

const catchnew = newNums.filter((item) => item % 3 == 0);
console.log(catchnew);