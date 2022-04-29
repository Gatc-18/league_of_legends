export const showCardExperience = (arr, cont) => {
     cont.innerHTML = '';

     arr.forEach(element => {
         cont.innerHTML += `
         <div class="card d-inline-block" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">${element.name}</h5>
           <p class="card-text">${element.experience}</p>
           <a href="#" id=${element.id} class="btn btn-danger">Borrar</a>
           </div>
          </div>
         `
     });
}