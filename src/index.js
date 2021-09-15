import {home} from './home'
import {menu} from './menu'
import {contact} from './contact'

function pageLoad(){
    const body = document.querySelector('body')
    const content = document.querySelector('#content')
    // Header elements
    const header = document.createElement('header')
    const title = document.createElement('div')
    title.innerHTML = `<div id='toggle'><span id='bars'></span></div><h1><a href='https://github.com/LumaGabriela/Restaurant-Page' id='title' target='_blank'>Orange's Snack Bar</a></h1><span></span>`
    const navbar = document.createElement('ul')
    navbar.setAttribute('id', 'navbar')
    navbar.innerHTML = `
    <li><a class='nav-link' href="#" id="home">Home</a></li>
    <li><a class='nav-link' href="#" id="menu">Menu</a></li>
    <li><a class='nav-link' href="#" id="contact">Contact</a></li>`
    header.setAttribute('id', 'header')
    body.insertBefore(header, content)
    header.appendChild(title)
    header.appendChild(navbar)
    //Navigation links
    const links = document.querySelectorAll('.nav-link')
    links[0].addEventListener('mouseup', (home))
    links[1].addEventListener('mouseup', menu)
    links[2].addEventListener('mouseup', contact)
    home()
    // Toggle function
    const toggle = document.querySelector('#toggle')
    const ul = document.querySelector('#navbar')
    toggle.addEventListener('mouseup', ()=>{
        header.classList.toggle('active')
    })
}

export function cleanAll(){
    const content = document.querySelector('#content')
    while(content.childElementCount!== 0){
        content.lastChild.remove()
    }
    
}

pageLoad()
menu()
