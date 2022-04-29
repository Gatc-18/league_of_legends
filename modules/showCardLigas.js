export function ShowCardLigas(arr, cont) {

    arr.forEach(element => {
        const { id: idLiga, description, logo, name: nameLiga } = element;

        cont.innerHTML += `
    <div id=${idLiga} class="m-auto hijos w-75 mb-3 text-light" style=" background-color: rgba(0,0,0,0.2)">
        <img width="150px" src=${logo} />
        <p>${description}</p>
</div>
    `
    });

}


