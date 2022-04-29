export const GetData = async (endPoint) => {
   const URL = 'http://localhost:4000';
               
   let res = await fetch(`${URL}/${endPoint}`);
   let data = await res.json();

   return data;
}