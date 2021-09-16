import { cleanAll } from "."
export function home(){
    cleanAll()
    const content = document.querySelector('#content')
    content.classList.remove('grid')
    //Add elements
    const title = document.createElement('h1')
    title.innerHTML = `Plant Based <i class="fas fa-seedling"></i>`
    const desc = []
    desc[0] = document.createElement('p')
    desc[1] = document.createElement('p')
    desc[0].innerHTML = 'We provide many food flavors without animal cruelty and totally free from diary, honey, meat or any animal product!'
    desc[1].innerHTML = 'From brazilian to arabic, we can make you feel  anywhere in the world!'
    content.appendChild(title)
    content.appendChild(desc[0])
    content.appendChild(desc[1])
    //Add active class
    const links = document.querySelectorAll('.nav-link')
    links[0].classList.add('active')
    links[1].classList.remove('active')
    links[2].classList.remove('active')
}
