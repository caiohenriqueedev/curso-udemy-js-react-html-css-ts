// 1 - instalação
console.log(axios);

// 2 - primeiro request
const getData = async() => {
    try {
        
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    
        console.log(response);
        }catch (error){
        console.log(error);
    }
};