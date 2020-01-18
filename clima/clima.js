const axios = require('axios');



const getClima = async(lat, lng) => {

    const reps = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=297241a9eb9bd26f0f5b5442fa216ac7&units=metric`);

    return reps.data.main.temp;
}


module.exports = {
    getClima
}