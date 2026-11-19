const api = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 5000
});
async function getRecipes(){
   const response = await api.get("/recipes?limit=12");
    return response.data;
    
    
}


 async function rechercherRecettes(motCle){
   try{const response= await api.get("/recipes/search",{
    params :{
        q:motCle,
       
    }
   });
   return response.data;

   }catch(error){
    console.error(error);
    
   }
    
}



export{getRecipes,rechercherRecettes};
export default api;
