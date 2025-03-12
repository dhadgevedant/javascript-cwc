//nullish coalescing operator (??): null undefined
//compares two values and assigns not null or not undefined value from both to the variable

//this will assign v1 10 because that is not null
let v1 = null ?? 10;

//this will asssign v2 10 as it comes first
let v2 = 10 ?? 20;

console.log(v1);
console.log(v2);