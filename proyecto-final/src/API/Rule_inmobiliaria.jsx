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
export const filtrarPropiedades = async (params) => {
  let url = "/api/propiedades/buscar";
  return await API.get(url, { params })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error precesando la solicitud";
    });
};

export const nuevaPubli = async (propiedad) => {
  return await API.post("/api/propiedades/add", propiedad)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response.data.error;
    });
};
