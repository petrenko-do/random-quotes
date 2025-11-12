const quotes = ["cytata 1", "cytata 2", "cytata 3"];
const newQuotesArray = [...quotes];

const quoteElement = document.getElementById("quote");
const buttonElement = document.getElementById("btn");
const newInputText = document.getElementById("new_text");
const addNewBtn = document.getElementById("add_btn");

function generateRandomQuotes() {
  console.log("quotes");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}
function addNew() {
  quoteElement.textContent = newInputText.value;
  //   console.log("quotes");
  //   quotes.push(newInputText.value);
}

buttonElement.addEventListener("click", generateRandomQuotes());

addNewBtn.addEventListener("click", addNew);
console.log(quotes);
