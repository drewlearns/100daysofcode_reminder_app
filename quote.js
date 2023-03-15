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

      document.querySelector("quote").appendChild;
        function displayQuote(quote) {
        quote.h1.appendChild(randomItem.data);
        quote.h2.appendChild(randomItem.author);
      }
      displayQuote();

      trycatch((err) => {
        console.log(`error ${err}`);
      });
    });
}


