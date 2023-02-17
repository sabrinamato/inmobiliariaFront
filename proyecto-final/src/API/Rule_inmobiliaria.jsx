import API from "./Rule_API";

export const propiedades = async () => {
  let url = "/api/propiedades";
  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error precesando la solicitud";
    });
};
