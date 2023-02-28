import API from "./Rule_API";


export const home = async () => {
    const HOME_URL = "/api";
    return await API.get(HOME_URL)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error.response.data.error || "Error procesando la solicitud";
        });
};

export const listarPropiedades = async (propiedades) => {
    const INMO_URL = "/api/propiedades";
    return await API.get(INMO_URL, propiedades)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error.response.data.error || "Error procesando la solicitud";
        });
    };

    export const buscarIdPropiedades = async (propiedades) => {
        const BUSCAR_URL = "/api/buscar";
        return await API.get(BUSCAR_URL, propiedades)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                throw error.response.data.error || "Error procesando la solicitud";
            });
        };    


        
        export const nuevaPropiedad = async (propiedades) => {
            const AGREGAR_URL = "/api/propiedades/nuevo";
            return await API.post(AGREGAR_URL, propiedades)
                .then((response) => {
                    return response.data;
                })
                .catch((error) => {
                    throw error.response.data.error || "Error procesando la solicitud";
                });
        };
        
        

