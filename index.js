import quotes from "./src/quotes.js";
import {
  hideFavoriteCard,
  showFavoriteCard,
  toggleFavoriteIcon,
} from "./src/favoritesHandler.js";

const quoteElement = document.getElementById("quote");
const buttonElement = document.getElementById("generate-btn");
const quoteAuthorElement = document.getElementById("quote-author");
const toggleFavoriteBtn = document.getElementById("toggle-favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");

let currentQuoteIndex;

function generateRandomQuotes() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const { quote, author } = randomQuote; //аналогия написания двух нижних кодов (деструктуризация)
  // const quote = randomQuote.quote;
  // const quoteAuthor = randomQuote.author;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;

  toggleFavoriteIcon(randomQuote.isFavorite, toggleFavoriteBtn);

  toggleFavoriteBtn.style.display = "inline-block";
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite; //конвертируем из False в True

  toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(
      currentQuote.quote,
      currentQuote.author,
      favoritesContainer
    );
  } else {
    hideFavoriteCard(currentQuote.quote);
  }
}

buttonElement.addEventListener("click", generateRandomQuotes);
toggleFavoriteBtn.addEventListener("click", toggleFavorite);

generateRandomQuotes();
