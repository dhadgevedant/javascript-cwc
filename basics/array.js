const arr=[1,2,3,4,5]

//push pop are allowed

//adds element at first
arr.unshift(0)
console.log(arr)

console.log(arr.includes(3))

let myarr = [1,2,3,4,5]

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


//cuts out values fromt the orignal array and includes last value as well
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);