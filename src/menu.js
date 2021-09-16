import { cleanAll } from "."
export function menu(){
    cleanAll()
    const content = document.querySelector('#content')
    content.classList.add('grid')
    const h1 = document.createElement('h1')
    // Create elements
    const dish = []
    dish[0] = document.createElement('div')
    dish[1] = document.createElement('div')
    dish[2] = document.createElement('div')
    dish[3] = document.createElement('div')
    dish[4] = document.createElement('div')
    dish[5] = document.createElement('div')
    dish[6] = document.createElement('div')
    //Add class
    dish[0].setAttribute('class', 'dishes')
    dish[1].setAttribute('class', 'dishes')
    dish[2].setAttribute('class', 'dishes')
    dish[3].setAttribute('class', 'dishes')
    dish[4].setAttribute('class', 'dishes')
    dish[5].setAttribute('class', 'dishes')
    dish[6].setAttribute('class', 'dishes')
    // Add html elements
    dish[0].innerHTML = `<figure>
    <img class="img" src="./imgs/shushi.png" alt='avocado-sushi'>
    <figcaption>
      Avocado Sushi
    </figcaption>
    </figure>`
    dish[1].innerHTML = `<figure>
    <img class="img" src="./imgs/cheesecake.png" alt='-strawberry-cheesecake'>
    <figcaption>
      Strawberry cheesecake
    </figcaption>
    </figure>`
    dish[2].innerHTML = `<figure>
    <img class="img" src="./imgs/cake.png" alt='chocolate-cake'>
    <figcaption>
      Chocolate cake
        </figcaption>
    </figure>`
    dish[3].innerHTML = `<figure>
    <img class="img" src="./imgs/quiche.png" alt='eggplant-quiche'>
    <figcaption>
      Eggplant quiche
    </figcaption>
    </figure>`
    dish[4].innerHTML = `<figure>
    <img class="img" src="./imgs/pizza.png" alt='pizza'>
    <figcaption>
      Pizza
    </figcaption>
    </figure>`
    dish[5].innerHTML = `<figure>
    <img class="img" src="./imgs/lasanha.png" alt='lasagna'>
    <figcaption>
        Lasagna
    </figcaption>
    </figure>`
    dish[6].innerHTML = `<figure>
    <img class="img" src="./imgs/cream.png" alt='cream'>
    <figcaption>
        Cream
    </figcaption>
    </figure>`
    //Append elements
    h1.innerHTML = 'Dishes'
    //content.appendChild(h1)
    content.appendChild(dish[0])
    content.appendChild(dish[1])
    content.appendChild(dish[2])
    content.appendChild(dish[3])
    content.appendChild(dish[4]) 
    content.appendChild(dish[5])   
    content.appendChild(dish[6])   
       
    
    //Add active class
    const links = document.querySelectorAll('.nav-link')
    links[0].classList.remove('active')
    links[1].classList.add('active')
    links[2].classList.remove('active')
}