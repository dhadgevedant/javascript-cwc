//singleton > created by constructor > object.create

//object literals
const Student = {
    name: "student1",
    age: 20,

    greet : function(){
        console.log("hello");
    }

}

console.log(Student[ "name" ]);
Student.greet;



/////////////////////////////
//singleton

const s = new Object();


//////////////////////////
//JSON
//json formatter can be used to understand further
// {
//     "name" : "vedant",
//     "age" : "20"
// }