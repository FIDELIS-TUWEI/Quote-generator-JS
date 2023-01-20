// QUOTE CONTAINER
const quoteContainer = document.createElement('div');
quoteContainer.setAttribute('class', 'quote__container');
quoteContainer.setAttribute('id', 'quote__container');
document.body.append(quoteContainer);

// Quote-text div
const quoteText = document.createElement('div');
quoteText.setAttribute('class', 'quote__text');
quoteContainer.appendChild(quoteText);

// Left-opening-quote-icon inside quote-text div
const leftQuoteIcon = document.createElement('i');
leftQuoteIcon.setAttribute('class', '<i class="fa-regular fa-quote-left"></i>');
quoteText.appendChild(leftQuoteIcon);

// Span with Id inside quote-text container
const span = document.createElement('span');
span.setAttribute('id', 'quote');
quoteText.appendChild(span);

// Author container
const authorContainer = document.createElement('div');
authorContainer.setAttribute('class', 'quote__author');
authorContainer.setAttribute('id', 'author');
quoteContainer.appendChild(authorContainer);

// Button container
const buttonContainer = document.createElement('div');
buttonContainer.setAttribute('class', 'button__container');
quoteContainer.appendChild(buttonContainer);

// Button
const twitterBtn = document.createElement('img');
twitterBtn.setAttribute('class', 'twitter__button');
twitterBtn.setAttribute('src', './image/twitter.svg')
twitterBtn.setAttribute('id', 'twitter');
twitterBtn.setAttribute('title', 'Tweet This!');
buttonContainer.appendChild(twitterBtn);

// Twitter Icon
const twitterIcon = document.createElement('i');
twitterIcon.setAttribute('class', '<i class="fa-brands fa-twitter"></i>');
twitterBtn.appendChild(twitterIcon);

// New Quote Button
const newQuoteBtn = document.createElement('button');
newQuoteBtn.setAttribute('id', 'new__quote');
newQuoteBtn.innerText = `New Quote`;
buttonContainer.appendChild(newQuoteBtn);


// Loader div
const loaderContainer = document.createElement('div');
loaderContainer.setAttribute('class', 'loader');
loaderContainer.setAttribute('id', 'loader');
document.body.append(loaderContainer);




// GET THE ELEMENT FROM THE DOM
const quoteMainContainer = document.getElementById('quote__container');
const quoteTexts = document.getElementById('quote');
const author = document.getElementById('author');
const twitter = document.getElementById('twitter');
const newQuoteButton = document.getElementById('new__quote');
const loader = document.getElementById('loader');

// Declare Quotes from API, store in avariable and assign an empty array
let apiQuotes = [];

// Loading spinner function
loading = () => {
    loader.hidden = false;
    quoteMainContainer.hidden = true;
}

// Function to remove loading spinner
complete = () => {
    quoteMainContainer.hidden = false;
    loader.hidden = true;
}

// Function to Display new Quote
newQuote = () => {
    loading();

    // Pick a random Quote from the array
    const randomQuote = apiQuotes[Math.floor( Math.random()* apiQuotes.length)];
     
    // Check if author field is empty and replace with 'Unknown
    if (!randomQuote.author) {
        author.textContent = 'Unknown';
    } else {
        author.textContent = randomQuote.author;
    }

    // Check quote length to determine styling
    if (randomQuote.text.length > 120) {
        quoteTexts.classList.add('long__quote');
    } else {
        quoteTexts.classList.remove('long__quote');
    }

    // Set quote and hide loader
    quoteTexts.textContent = randomQuote.text;
    complete();
}

 // Fetch quotes from API
 async function getQuotes() {
    loading();

    try {
        const response = await fetch('https://type.fit/api/quotes');
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        console.log(error);
    }
}


// Tweet Quote Function
tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text= ${quoteTexts.innerText} - ${author.innerText}`;
    window.open(twitterUrl, '_blank');
}

// Events
newQuoteButton.addEventListener('click', newQuote);
twitter.addEventListener('click', tweetQuote);
console.log(twitterBtn);

// On Load
getQuotes();