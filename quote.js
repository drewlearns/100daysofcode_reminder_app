const h1 = document.querySelector(".quote");
const h2 = document.querySelector(".author");
let request = new XMLHttpRequest()
request.open("GET","https://type.fit/api/quotes");
request.send()
request.onload = () =>{
    if (request.status == 200) {
        data = JSON.parse(request.response)
        // console.log(data)
        const randomItem = data[Math.floor(Math.random() * data.length)]
        if (randomItem.author == null){
            randomItem.author = "Unknown"
        }
        // console.log(randomItem.author)
        // console.log(randomItem)
        h1.textContent = randomItem.text
        h2.textContent = `- ${randomItem.author}`
    } else{
        console.log("quote not found")
    }
}