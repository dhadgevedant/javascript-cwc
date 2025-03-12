function print(){
    console.log("hello world");
}
//print();

function addTwoNumbers(num1,num2){
    
    return num1 + num2;
    
}

let result = addTwoNumbers(1,2)
//console.log(result);

//FUNCTIONS WITH OBJECTS   

// function addNums(...num1){
//     return num1; 
// }
// console.log(addNums(1,2,3,4,5));


// function addNums2(val1,val2,...num1){
//     return num1; 
// }
// console.log(addNums2(1,2,3,4,5));


//HANDELING OBJECTS

function handleObj( obj){
    console.log(
        `username: ${obj.username}\npassword: ${obj.pass}`
    )
}
handleObj({
    "username" : "dhadgevedant",
    "pass" : "secretpass" 
})

//HOISTING

// in this type of function declaration, newf cannot be accessed above the declaration
// in normal declaration, that function can be accessed anywhere even befoire declaration of that func
const newf = function(num){
    return num++;
}


//ARROW FUNCTION
const user = {
    name: "newuser",
    price: "1000",

    greet(){
        console.log(`hello ${this.name}`)
    }
}   

user.greet();

const helloArrow = () =>{
   console.log("hello admin");
}


//implicit return
const add2 = (num1,num2) => num1+num2;

