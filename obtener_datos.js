const axios = require('axios');

async function obtener_datos_climaticos(nombre_ciudad) {
    const apiKey = 'TU_API_KEY';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${nombre_ciudad}&lang=es&appid=${apiKey}`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        if (data.cod === 200) {
            const ciudad = data.name;
            const pais = data.sys.country;
            const descripcion_clima = data.weather[0].description;
            const sensacion_termica = data.main.feels_like;
            const presion = data.main.pressure;
            const humedad = data.main.humidity;
            const temp_min = data.main.temp_min;
            const temp_max = data.main.temp_max;

            return `${ciudad};${pais};${descripcion_clima};${sensacion_termica};${presion};${humedad};${temp_min};${temp_max}`;
        } else {
            return "Error al obtener los datos climáticos";
        }
    } catch (error) {
        return "Error al obtener los datos climáticos";
    }
}

const nombre_ciudades = ["Buenos Aires", "Bogota", "Lima", "Ciudad de Mexico", "Santiago", "Brasilia"];

async function obtener_datos_climaticos_para_todas_ciudades() {
    for (const nombre_ciudad of nombre_ciudades) {
        const datos_climaticos = await obtener_datos_climaticos(nombre_ciudad);
        console.log(datos_climaticos);
    }
}

obtener_datos_climaticos_para_todas_ciudades();
