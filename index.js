url = "https://restcountries.eu/rest/v2/name/"
country = document.createTextNode('country: ')
textbox = document.createElement('input')
textbox.id = "val"
id = textbox.id
document.body.appendChild(country)
document.body.appendChild(textbox)
card = document.createElement('div')
card.id = "card"
document.body.appendChild(card)
textbox.onkeyup = function(){
    newurl = url + document.getElementById("val").value
    fetch(newurl).then((returnedPromise)=>{
        return returnedPromise.json()
    }).then((data)=>{
        createCard(data, "card")
    }).catch(()=>{
        console.log("No matched countries")
    })
}
function createCard(data, id){
    document.getElementById(id).innerHTML=""
    console.log(data)
    
    data.forEach(element => {
        cardDiv = document.createElement('div')
        cardDiv.setAttribute('class', 'card')
        cardDiv.style.width = "18rem"
        cardDiv.style.margin = "30px"
        image = document.createElement('img')
        image.src = element.flag
        image.setAttribute('class', 'card-img-top')
        cardBody = document.createElement('div')
        h1 = document.createElement('header')
        h1.setAttribute('class', 'card-title')
        h1.innerHTML = element.name
        cardDiv.appendChild(image)
        cardBody.appendChild(h1)
        cardDiv.appendChild(cardBody)
        document.getElementById(id).appendChild(cardDiv)
    });
}