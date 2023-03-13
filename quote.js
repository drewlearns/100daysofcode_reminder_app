function getFetch() {
  const url = "https://type.fit/api/quotes";

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const randomItem = data[Math.floor(Math.random() * data.length)];
      if (randomItem.author == null) {
        randomItem.author = "Unknown";
      }
      trycatch((err) => {
        console.log(`error ${err}`);
      });
    });
const quote = document.getElementById("#quote");
    function displayQuote(){
        quote.appendChild(randomItem.text);
        quote.appendChild(randomItem.author);
    }
    displayQuote(getFetch);
}

