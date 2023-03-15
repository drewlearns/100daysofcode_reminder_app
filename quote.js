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

          // const quote = document.querySelector(".quote");
          // function displayQuote() {
          //   document.createElement("h1").appendChild(h1.randomItem.data);
          //   document.createElement("h2").appendChild(h2.randomItem.author);
          // }
          // displayQuote(getFetch);

      trycatch((err) => {
        console.log(`error ${err}`);
      });
    });



}

