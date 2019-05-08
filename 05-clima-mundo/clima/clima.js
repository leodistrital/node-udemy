const axios = require('axios')

const getClima = async(lat, long) => {
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8bd7c85dc00e50a311d71fe5389ace13&units=metric`
    const resp = await axios.get(baseURL);
    // console.log(resp);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}