let today = new Date();
console.log(today.toString());
console.log(today.toDateString());
console.log(today.toLocaleString());
console.log(today.toJSON());


console.table((today.toDateString()).split(" "));

console.log(`month: ${today.getMonth()}`)
console.log(`day: ${today.getDate()}`)
console.log(`year: ${today.getFullYear()}`)
console.log(`hours: ${today.getHours()}`)
console.log(`minutes: ${today.getMinutes()}`)
console.log(`seconds: ${today.getSeconds()}`)
