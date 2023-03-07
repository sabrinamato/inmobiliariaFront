import API from "./Rule_API";

export const nuevaPublicacion= async (form) => {
  return await API.post("/", form)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};