// getElementById: Selects an element by its unique ID.
// Usage: Use when you need to target a specific element with a known ID.
// Example: document.getElementById("myElement");
// getElementsByTagName: Selects all elements with a specific tag name.

// getElementsByClassName: Selects all elements with a specific class name.
// Usage: Use when you need to target multiple elements that share the same class.
// Example: document.getElementsByClassName("myClass");

// getElementsByTagName: Selects all elements with a specific tag name.
// Usage: Use when you need to target all elements of a certain type (e.g., all <p> tags).
// Example: document.getElementsByTagName("p");

// querySelector: Selects the first element that matches a CSS selector.
// Usage: Use when you need to target an element using a CSS selector (e.g., class, ID, tag, etc.).
// Example: document.querySelector(".myClass");

// querySelectorAll: Selects all elements that match a CSS selector.
// Usage: Use when you need to target multiple elements using a CSS selector.
// Example: document.querySelectorAll("p.myClass");
// Examples:


// ++++++++++++++++++++ EXAMPLES +++++++++++++++++++++++++++++++


// // getElementById
// const elementById = document.getElementById("head1");
// console.log("getElementById:", elementById);

// // getElementsByTagName
// const elementsByTagName = document.getElementsByTagName("h1");
// console.log("getElementsByTagName:", elementsByTagName);

// // getElementsByClassName
// const elementsByClassName = document.getElementsByClassName("mainHead");
// console.log("getElementsByClassName:", elementsByClassName);

// // querySelector
// const firstElementByQuerySelector = document.querySelector("#head2");
// console.log("querySelector:", firstElementByQuerySelector);

// // querySelectorAll
// const allElementsByQuerySelector = document.querySelectorAll("h1");
// console.log("querySelectorAll:", allElementsByQuerySelector);



// +++++++++++++++ MORE SELECTORS MEATHODS +++++++++++++++++++


// const h = document.querySelectorAll('h1')
// undefined
// document.querySelectorAll('h1')
// NodeList(3) [h1#head1, h1#head2, h1#head3]
// const headings = document.querySelectorAll('h1')
// undefined
// h
// NodeList(3) [h1#head1, h1#head2, h1#head3]
//  h[1]
// <h1 id=​"head2">​Heading 2​</h1>​
//  h.forEach( (tag) => tag.style.color = 'green' )
// undefined
//  h.forEach( (tag) => {
//     tag.style.background-color = 'black'  
//  })
// VM2422:2 Uncaught SyntaxError: Invalid left-hand side in assignment
//  h.forEach( (tag) => {
//     tag.style.backgroundColor = 'black'  
//  })
// undefined
// SUMMARY:
// 1. Selected all h1 elements using querySelectorAll.
// 2. Iterated over the selected elements using forEach.
// 3. Changed the text color of each h1 element to green.
// 4. Changed the background color of each h1 element to black.

// COMMANDS USED:
// 1. document.querySelectorAll('h1')
// 2. forEach()
// 3. tag.style.color = 'green'
// 4. tag.style.backgroundColor = 'black'

// COMMAND EXPLANATIONS:

// 1. document.querySelectorAll('h1'):
//    - Description: This command selects all the h1 elements present in the HTML document.
//    - It returns a NodeList, which is a collection of all the selected h1 elements.
//    - Example:
//      ```javascript
//      const headings = document.querySelectorAll('h1');
//      console.log(headings); // Output: NodeList(3) [h1#head1, h1#head2, h1#head3]
//      ```

// 2. forEach():
//    - Description: This is a method used to iterate over each element in a NodeList or an array.
//    - It takes a callback function as an argument, which is executed for each element.
//    - Example:
//      ```javascript
//      const headings = document.querySelectorAll('h1');
//      headings.forEach((heading) => {
//        console.log(heading); // Output: each h1 element
//      });
//      ```

// 3. tag.style.color = 'green':
//    - Description: This command changes the text color of an HTML element.
//    - `tag` refers to an individual element selected by querySelectorAll.
//    - `style` is an object that allows you to modify the inline CSS styles of an element.
//    - `color` is a property of the style object that sets the text color.
//    - Example:
//      ```javascript
//      const heading = document.querySelector('h1');
//      heading.style.color = 'green'; // Changes the text color of the first h1 to green.
//      