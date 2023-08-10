const axios = require('axios');

async function obtener_datos_climaticos(nombre_pais) {
    const apiKey = 'TU_API_KEY';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${nombre_pais}&lang=es&appid=${apiKey}`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        if (data.cod === 200) {
            const temp_actual = data.main.temp;
            const temp_min = data.main.temp_min;
            const temp_max = data.main.temp_max;
            const descripcion_clima = data.weather[0].description;

            return `País: ${nombre_pais}\nTemperatura Actual: ${temp_actual}°C\nTemperatura Mínima: ${temp_min}°C\nTemperatura Máxima: ${temp_max}°C\nDescripción Clima: ${descripcion_clima}`;
        } else {
            return "Error al obtener los datos climáticos";
        }
    } catch (error) {
        return "Error al obtener los datos climáticos";
    }
}

const paises = ["Argentina", "Colombia", "Peru", "Mexico", "Chile", "Brasil"];

async function obtener_datos_climaticos_para_paises() {
    for (const pais of paises) {
        const datos_climaticos = await obtener_datos_climaticos(pais);
        console.log(datos_climaticos);
        console.log("-".repeat(30));
    }
}

obtener_datos_climaticos_para_paises();
