import API from "./Rule_API";

 export const registrarUsuario = async(form) => {
    return await API.post("/registro", form)
    .then((response)=> {
        console.log(form);
        return response.data;
    })
    .catch((error)=> {
        console.log(error);
    });
};




