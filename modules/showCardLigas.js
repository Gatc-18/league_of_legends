export function ShowCardLigas(arr, cont) {

    arr.forEach(element => {
        const { id: idLiga, description, logo, name: nameLiga } = element;

        cont.innerHTML += `
    <div id=${idLiga} class="card m-auto  border-warning w-75 mb-3 text-light" style=" background-color: rgba(0,0,0,0.2)">
    <div class="card-header">${nameLiga}</div>
    <div  class="card-body hijos d-flex align-items-center">
        <img width="150px" src=${logo} />
        <p class="card-text">${description}</p>
    </div>
</div>
    `
    });

}


