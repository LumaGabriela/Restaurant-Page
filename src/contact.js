import { cleanAll } from "."
export function contact(){
    cleanAll()
    const content = document.querySelector('#content')
    //Contact tab
    const contacts = []
    contacts[0] = document.createElement('div')
    contacts[1] = document.createElement('div')
    contacts[0].innerHTML = `<h2>Duckling</h2>
    <p>Phone: 908234590</p>`
    contacts[1].innerHTML = `<h2>Squirrel</h2>
    <p>Phone: 908234590</p>`
    contacts[0].setAttribute('class', 'contacts')
    contacts[1].setAttribute('class', 'contacts')
    content.appendChild(contacts[0])
    content.appendChild(contacts[1])
    //Add active class
    const links = document.querySelectorAll('.nav-link')
    links[0].classList.remove('active')
    links[1].classList.remove('active')
    links[2].classList.add('active')

}