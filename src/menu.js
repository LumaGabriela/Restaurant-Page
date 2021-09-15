export function menu(){
    const content = document.querySelector('#content')
    const h1 = document.createElement('h1')
    const desc = [  ,  ]
    desc[0] = document.createElement('p')
    desc[1] = document.createElement('p')
    desc[0].setAttribute('class', 'description')
    desc[1].setAttribute('class', 'description')
    desc[0].innerHTML = 'pato 0'
    desc[1].innerHTML = 'pato 1'
    content.appendChild(desc[0])
    content.appendChild(desc[1])
    
    h1.innerHTML = 'Orangy\'s delicious food'
    content.appendChild(h1)
}