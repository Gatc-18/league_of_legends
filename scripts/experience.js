import { NavbarSecundario } from "../modules/navbarSecundario.js";
import { showCardExperience } from "../modules/showCardExperience.js";
import {GetData} from "../helpers/getData.js"
let contenerdorNavbar = document.getElementById('containerNav'); 
let form = document.getElementById('formulario');
let contExperiences = document.getElementById('containerExperiences');



document.addEventListener('DOMContentLoaded',async () => {
    NavbarSecundario(contenerdorNavbar);
    let data = await GetData('experiencias');

    showCardExperience(data, contExperiences )
}) 


form.addEventListener('submit', async (e) => {
   e.preventDefault();

   let nameU = document.getElementById('name').value;
   let ageU = document.getElementById('age').value;
   let experienceU = document.getElementById('floatingTextarea').value;

   let objExperiencie = {
       name: nameU,
       age: ageU,
       experience: experienceU
   }

   fetch('http://localhost:4000/experiencias', {
    method: 'POST',
    body: JSON.stringify(objExperiencie),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
   }).then( ()=> {
      alert("información guardada")
   })
   .catch(() => {
       alert("Hubo un error")
   })
})

document.addEventListener('click', ({target}) => {
    if(target.classList.contains('btn-danger')){
        let id = target.id;
        fetch(`http://localhost:4000/experiencias/${id}`, {
            method: "DELETE",
            header:{
                "Content-type": "application/json"
            }
        })
        .then(() => {
            alert("Elemto eliminado");
            window.location.reload();
        })
    }
})

