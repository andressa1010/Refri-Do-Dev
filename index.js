let lista = document.querySelectorAll('.item')
const next=document.getElementById('next')
const prev= document.getElementById('prev')


let count= lista.length
let active= 0

next.onclick = ()=>{
let activeon= document.querySelector('.active')
activeon.classList.remove('active')
active =active >= count -1 ? 0 :active +1
lista[active].classList.add('active')
}

prev.onclick=()=>{
    let activeon= document.querySelector('.active')
    activeon.classList.remove('active')
    
    active =active <= 0 ? count-1 :active -1
  lista[active].classList.add('active')

}