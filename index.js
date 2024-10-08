let quote = document.getElementById("quote");
let author = document.getElementById("author");
let quoteButton = document.getElementById("quoteGeneratorBtn");

const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        quote.innerText = item.content;
        author.innerText = item.author;
      });
  };

quoteButton.addEventListener("click", getQuote);