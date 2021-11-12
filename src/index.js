console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener('DOMContentLoaded', () => {

    fetch(imgUrl).
    then(resp => resp.json())
    .then(data => {
        let pictures = data.message;
        pictures.forEach(renderDog)
    })
})

function renderDog(dog) {
    let container = document.getElementById('dog-image-container');
    let img = document.createElement('img');

    img.src = dog;

    container.append(img)
}

document.addEventListener('DOMContentLoaded', () => {

    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
        let masterList = data.message;
        for (let element in masterList) {
            renderList(element)
        }
    })
})

function renderList(breed) {
    let bigList = document.getElementById('dog-breeds');
    let item = document.createElement('li');

    item.textContent = breed;

    item.addEventListener('click', e => {
        let self = e.target;
        console.log(self)
        self.style.color = 'red'
    })

    bigList.append(item)
}


let choice = document.getElementById('breed-dropdown');
choice.addEventListener('change', e => {
    
    let selection = e.target.value;
    let fullList = document.querySelectorAll('li')
    
    for (let item of fullList) {
        item.style.display = ''
    }


    for (let i = 0; i < fullList.length; i++) {
        
        if (fullList[i].textContent[0] !== selection) {
            fullList[i].style.display = 'none';
        } 
    }
    
    

})



