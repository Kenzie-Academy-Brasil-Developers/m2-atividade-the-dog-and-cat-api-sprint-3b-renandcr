const body = document.getElementById("body")

// Elementos criados
const section = document.createElement("section")
const divCat = document.createElement("div")
const divDog = document.createElement("div")
const divButtons = document.createElement("div")
const divImages = document.createElement("div")
const buttonCat = document.createElement("button")
const buttonDog = document.createElement("button")
const imageDog = document.createElement("img")
const imageCat = document.createElement("img")

// Atributos de classe adicionados aos elementos criados
section.classList.add("section-dog-cat")
divCat.classList.add("divs", "divs-cat")
divDog.classList.add("divs", "divs-dog")
divImages.classList.add("divs-parent")
divButtons.classList.add("buttons-parent")
buttonCat.classList.add("buttons", "buttons-cat")
buttonDog.classList.add("buttons", "buttons-dog")
imageCat.classList.add("imageCat")
imageDog.classList.add("imageDog")


// Elementos criados adicionados ao HTML
body.appendChild(section)
section.appendChild(divImages)
divImages.appendChild(divCat)
divImages.appendChild(divDog)
section.appendChild(divButtons)
divButtons.appendChild(buttonCat)
divButtons.appendChild(buttonDog)
divDog.appendChild(imageDog)
divCat.appendChild(imageCat)

// Adicionando conteúdo nos elementos
buttonCat.innerText = "Get Cat"
buttonDog.innerText = "Get Dog"


function fetchImagesCats(){
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
        const url = data[0].url
        imageCat.src = url
    })
}
buttonCat.addEventListener("click", fetchImagesCats)


function fetchImagesDogs(){
    fetch("https://api.thedogapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
        const url = data[0].url
        imageDog.src = url
    })
    
}
buttonDog.addEventListener("click", fetchImagesDogs)



