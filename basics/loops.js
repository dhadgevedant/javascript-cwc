// This file contains notes on different types of loops in JavaScript.
// As a new student, here's a breakdown of what's covered:

// 1. FOR OF LOOP:
//    - Used to iterate over iterable objects like Maps, Arrays, and Strings.
//    - It directly accesses the values of the iterable.
//    - Example: Iterating over a Map (key-value pairs).

// 2. FOR IN LOOP:
//    - Used to iterate over the properties of an object.
//    - It accesses the property names (keys) of the object.
//    - Example: Iterating over an object with properties like name, age, etc.

// 3. FOR EACH LOOP:
//    - Used to iterate over arrays.
//    - It calls a provided function once for each element in the array.
//    - The function can receive the element's value, index, and the array itself.
//    - Different ways to use forEach:
//      - Passing an anonymous function directly.
//      - Passing a named function as a callback.
//      - Accessing value, index, and the array within the callback.
//      - Iterating over an array of objects.

// In essence, this file demonstrates how to use different loop types to
//  traverse various data structures in JavaScript.


// LOOPS IN JAVASCRIPT

//FOR OF LOOP

const countryCode = new Map;

countryCode.set('IN', 'India');
countryCode.set('US', 'United States');
countryCode.set('GB', 'United Kingdom');
//for of loop is used to iterate over iterables like maps, arrays, strings etc
for( const [key,val] of countryCode){
    //here key and val are destructured from the map
    console.log(key,' = ',val);
}


console.log("\n\n");

//FOR IN LOOP
const obj = {

    name: 'vedant',
    age: 20,
    gender: 'male'

}   
//for in loop is used to iterate over objects

for (const key in obj){
    //here key is the property name of the object
    console.log(key,' = ',obj[key]);
}
console.log("\n\n");

//FOR EACH LOOP

    //v1
    console.log(`\n\nVersion 1`)
    const languages = ["english", "spanish", "french", "german"];

    //forEach loop is used to iterate over arrays
    languages.forEach( (val) => {
        console.log(val);
    })


    //v2
    console.log(`\n\nVersion 2`)
    //we can also pass a function to forEach
    function print(val){

        console.log(val);
    }
    //here print is a callback function
    languages.forEach(print)
    
    //v3
    console.log(`\n\nVersion 3`);
    languages.forEach((val,index,arr) =>{
        
        console.log(val,index,arr);
    })

    //v4 iterating over array of objects

    arr = [

        {
            language: "javascript",
            extention: "js"
        },
        {
            language: "python",
            extention: "py"
        },
        {
            language: "java",
            extention: "java"
        }
    ]

    arr.forEach( (item) => {
        //here item is each object in the array
        console.log(`language: ${item.language} \nextention: ${item.extention}\n\n`)
    } )

