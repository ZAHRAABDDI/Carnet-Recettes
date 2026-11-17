const api = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 5000
});
async function getRecipes(){
   const response = await api.get("/recipes?limit=12");
    return response.data;
    
    
}
export{getRecipes};
export default api;




