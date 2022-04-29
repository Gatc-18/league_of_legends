import { NavbarSecundario } from "../modules/navbarSecundario.js";
import {GetData} from '../helpers/getData.js'
let contenerdorNavbar = document.getElementById('containerNav'); 
let template = document.getElementById('template').content;
let fragment = document.createDocumentFragment();
let conatinerCards = document.getElementById('containerCards');



document.addEventListener('DOMContentLoaded', async () => {
    NavbarSecundario(contenerdorNavbar);

    let infoPersonajes = await GetData('personajes ');
    showCardCharacter(infoPersonajes)
})

const showCardCharacter = (arr) => {
    arr.forEach(item=> {
        const {id, name, img } = item;

        template.querySelector('img').setAttribute('src', img );
        template.querySelector('img').setAttribute('alt', name);
        template.querySelector('a').textContent = name;
        template.querySelector('a').setAttribute('id', id);

        let clone = template.cloneNode(true);
        fragment.appendChild(clone);

    })

    conatinerCards.appendChild(fragment);
}

document.addEventListener('click', ({target}) => {
    if(target.classList.contains('btn-outline-primary')){
        let id = target.id;
        localStorage.setItem('idCharacter', id);

        window.location.href = './detail.html'
    }
})



