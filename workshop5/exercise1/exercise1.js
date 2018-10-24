/* Syntax reminder:
myEl.addEventListener('click', function () {
    // Code goes here...
});
*/

// The elements to attach "click" handlers to
var docBody = document.body,
    parentElement = document.getElementById('parent'),
    childElement = document.getElementById('child');
    trollElement = document.getElementById('troll');
   
    // Exercise 1 Part A
    docBody.addEventListener('click', function (event) {
        console.log('I am title');
    });
    parentElement.addEventListener('click', function (event) {
        console.log('I am parent element');
        event.stopPropagation();
    });
    childElement.addEventListener('click', function (event) {
        console.log('I am child element');
        event.stopPropagation();
    });
    trollElement.addEventListener('click', function (event) {
        console.log('I am troll element');
        event.stopPropagation();
    });

    // Exercise 1 Part B
    parentElement.addEventListener('mouseleave', function (event) {
        console.log('I am parent element');
        event.stopPropagation();
    });
    childElement.addEventListener('mouseleave', function (event) {
        console.log('I am child element');
        event.stopPropagation();
    });




// Add your listeners here...
