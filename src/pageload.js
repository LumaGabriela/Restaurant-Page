 export function pageLoad(){
    const body = document.querySelector('body')
    const content = document.querySelector('#content')
    // Header elements
    const header = document.createElement('header')
    const title = document.createElement('h1')
    title.innerHTML = 'Orangy'
    const navbar = document.createElement('ul')
    navbar.innerHTML = `
    <li><a class='nav-link' href="#" id="home">Home</a></li>
    <li><a class='nav-link' href="#" id="menu">Menu</a></li>
    <li><a class='nav-link' href="#" id="contact">Contact</a></li>`
    header.setAttribute('id', 'header')
    body.insertBefore(header, content)
    header.appendChild(title)
    header.appendChild(navbar)
    //Content div elements
    
    
    }
