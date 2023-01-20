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
const twitterBtn = document.createElement('button');
twitterBtn.setAttribute('class', 'twitter__button');
twitterBtn.setAttribute('id', 'twitter');
twitterBtn.setAttribute('title', 'Tweet This!');
buttonContainer.appendChild(twitterBtn);

// Twitter Icon
const twitterIcon = document.createElement('i');
twitterIcon.setAttribute('class', '<i class="fa-brands fa-twitter"></i>');
twitterBtn.appendChild(twitterIcon);

// New Quote Button
const NewQuoteBtn = document.createElement('button');
NewQuoteBtn.setAttribute('id', 'new__quote');
NewQuoteBtn.innerText = `New Quote`;
buttonContainer.appendChild(NewQuoteBtn);


// Loader div
const loaderContainer = document.createElement('div');
loaderContainer.setAttribute('class', 'loader');
loaderContainer.setAttribute('id', 'loader');
document.body.append(loaderContainer);