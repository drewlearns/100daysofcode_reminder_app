document.getElementById('quote_button').addEventListener('click', getFetch)

function getFetch(){
    const url = "https://type.fit/api/quotes";

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            
            const randomItem = data[Math.floor(Math.random() * data.length)]

            document.querySelector('p').innerHTML = `${randomItem.text} ${randomItem.author}`;
        trycatch((err) => {
            console.log(`error ${err}`)
        });
    })}