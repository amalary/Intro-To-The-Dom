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

// QquerySelector 





