export const GetDataById = async (id) => {
    const URL = 'http://localhost:4000/personajes'
                
    let res = await fetch(`${URL}/${id}`);
    let data = await res.json();
 
    return data;
 }