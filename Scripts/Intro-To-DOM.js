// # 1 What is the DOM 

// DOM Document Object Model 
// Note 
const documents = {
    body:{
        h1: {
            content: 'Intro To The Dom'
        }
    }

}


// The Document Object Model (DOM) is a conceptual way of visualizing a document and its content. 

// because an id is a unique property in our elements this is really fast way to access our elements 

// Returns the element that matches that ID 

// If the id does not match of the elements in the DOM or the element does not exist it will return null 


// NOTE getElementById

const titleEl = document.getElementById('titles'); // returns element if exists or returns null 

console.log('%c getElementById', 'color: aqua',{titleEl});

const h2humm = document.getElementById('hummer');

console.log(h2humm); 

// querySelector 

// Returns the first element that a descendant of node that matches selectors 

const titleByQuerySelector = document.querySelector('#hummer'); 

console.log({titleByQuerySelector})

const pEl = document.querySelector('.cool');

console.log({pEl}); 

// Change the content of the element 

// InnerHTML 

titleEl.innerHTML = '<h2> for <strong>Today</strong></h2> '

// Text content 

// titleEl.textContent = 'for <strong>Today</strong>' 

// Change the style of an element 

titleEl.style.textAlign = 'center'; 

titleEl.style.color = 'yellow';

titleEl.style.backgroundColor = 'aqua'; 


// Attributes of an element 

// getAttribute(name) this method returns the value of the ttribute that you pass 

//  If the element doesn't have an attribute it will return null or an empty string 

console.log('id attr:',titleEl.getAttribute('id')); 

// setAttrbute(name, value)

// sets the value of the attr on the specified element 

// if the attr aleady exists the value is updated 

console.log('before', titleEl);


titleEl.setAttribute('class','primaryHeading')

console.log('after', titleEl);


// hasAttribute

const isIDInElement = titleEl.hasAttribute('id'); 

console.log(isIDInElement); 


const visitGoogle = document.querySelector('#visitGoogle'); 

visitGoogle.setAttribute('href','www.google.com');
visitGoogle.setAttribute('target','_blank')
// console.log({visitGoogle})


// Set Attribute of Element CLasses 

const bodyClassList = document.body.classList;

console.log(bodyClassList);

bodyClassList.add('grape','wow')

console.log(bodyClassList); 


// Adding classes with spread operator 
const classesToAdd = ['red','darker','container','green','black']

bodyClassList.add(...classesToAdd);

console.log(bodyClassList)

// Removing a Class 
bodyClassList.remove('red')
console.log(bodyClassList)
console.log(bodyClassList.contains('red'))

// Toggling a class

bodyClassList.toggle('red'); 
console.log(bodyClassList)

// Contains

bodyClassList.contains('darker')
console.log(bodyClassList.contains('red'))

// Replace Method

bodyClassList.replace('red','rouge')

console.log(bodyClassList)

// Selecting Multiple Elements 

const liListTagName = document.getElementsByTagName('li');

console.log({liListTagName}); 

const liListClassName = document.getElementsByClassName('comment');

console.log({liListClassName}); 


// querySelectorAll

const liListQuerySelector = document.querySelectorAll('.comment'); 

console.log('by query selector',liListQuerySelector);













