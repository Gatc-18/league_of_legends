import { Navbar } from "../modules/navbar.js";
import { GetData } from "../helpers/getData.js";
import { ShowCardLigas } from "../modules/showCardLigas.js";
let containerLigas = document.getElementById('ligas');



document.addEventListener('DOMContentLoaded', async () =>{
    let contNav = document.getElementById('containerNav'); 
    Navbar(contNav);

    let infoLigas = await GetData('ligas');
    ShowCardLigas(infoLigas, containerLigas);
    

})




