import requests

def obtener_datos_climaticos(nombre_ciudad):
    url = f"http://api.openweathermap.org/data/2.5/weather?q={nombre_ciudad}&lang=es&appid=TU_API_KEY"
    response = requests.get(url)
    data = response.json()

    if data["cod"] == 200:
        ciudad = data["name"]
        pais = data["sys"]["country"]
        descripcion_clima = data["weather"][0]["description"]
        sensacion_termica = data["main"]["feels_like"]
        presion = data["main"]["pressure"]
        humedad = data["main"]["humidity"]
        temp_min = data["main"]["temp_min"]
        temp_max = data["main"]["temp_max"]
        
        return f"{ciudad};{pais};{descripcion_clima};{sensacion_termica};{presion};{humedad};{temp_min};{temp_max}"
    else:
        return "Error al obtener los datos climáticos"

nombre_ciudades = ["Buenos Aires", "Bogota", "Lima", "Ciudad de Mexico", "Santiago", "Brasilia"]

for nombre_ciudad in nombre_ciudades:
    datos_climaticos = obtener_datos_climaticos(nombre_ciudad)
    print(datos_climaticos)
