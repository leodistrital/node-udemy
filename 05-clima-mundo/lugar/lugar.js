const axios = require('axios')

const getLugar = async(direcccion) => {
    const encodeURL = encodeURI(direcccion)
    const instance = axios.create({
        baseURL: ` https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: {
            'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '37ddfda8f7msh37dd57e78d90bf3p1dc3dbjsn4028652ceea9'
        }
    })

    const resp = await instance.get();

    if (resp.data.Results.length == 0) {
        throw new Error(`No hay resultados en la busqueda (${direcccion})`)
    }

    const data = resp.data.Results[0];
    const nombre = data.name;
    const lat = data.lat;
    const long = data.lon;

    return {
        nombre,
        lat,
        long
    }
}


module.exports = {
    getLugar
}