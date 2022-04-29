import { GetDataById } from "../helpers/getDataById.js";
import {NavbarSecundario} from "../modules/navbarSecundario.js"
let containerNabar = document.getElementById('containerNav');
let sectionMain = document.getElementById('main');
let modalButton = document.querySelector('.btn-primary');
let contentModal = document.querySelector('.modal-content');
let infoCharacter;

document.addEventListener('DOMContentLoaded', async () => {
    NavbarSecundario(containerNabar);

    let idCharacter = localStorage.getItem('idCharacter');
    infoCharacter = await GetDataById(idCharacter);

    const {cover} = infoCharacter;

    sectionMain.style.backgroundImage = `url(${cover})`
})

modalButton.addEventListener('click', () => {
    const {name, img, description} = infoCharacter;
    contentModal.innerHTML = `
    <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">${name}</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body d-flex justify-content-center align-items-center">
  <img src=${img} />
  <p>${description}</p>
</div>
    `
})




