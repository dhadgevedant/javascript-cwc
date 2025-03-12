//accumalator -> collects and sums up values
//currentValue -> contains current value
//initialValue -> is noticed only once at the start of reduce

//BASIC EXAMPLE

// const nums = [1,2,3,4,5]

// const ini = 0;
// const sum = nums.reduce( (accumalator, currentValue) => accumalator + currentValue, ini )
// console.log(sum)


//SHOPPING CART


// function fillCart({n,p}){
    
//     let currItem = new item(n,p)
//     selectedItems+=currItem
// }

let selectedItems = [
    {name:"apple",price:100},
    {name:"banana",price:200},
    {name:"orange",price:300},
    {name:"kiwi",price:400},
    {name:"pear",price:500}
]

console.log(selectedItems)


const ini = 0;

const UserCart = selectedItems.reduce( (acc,curr) => acc + curr.price,ini)
console.log(UserCart)






