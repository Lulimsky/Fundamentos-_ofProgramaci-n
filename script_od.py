import requests

def obtener_datos_climaticos(nombre_pais):
    url = f"http://api.openweathermap.org/data/2.5/weather?q={nombre_pais}&lang=es&appid=TU_API_KEY"
    response = requests.get(url)
    data = response.json()

    if data["cod"] == 200:
        temp_actual = data["main"]["temp"]
        temp_min = data["main"]["temp_min"]
        temp_max = data["main"]["temp_max"]
        descripcion_clima = data["weather"][0]["description"]
        
        return f"País: {nombre_pais}\nTemperatura Actual: {temp_actual}°C\nTemperatura Mínima: {temp_min}°C\nTemperatura Máxima: {temp_max}°C\nDescripción Clima: {descripcion_clima}"
    else:
        return "Error al obtener los datos climáticos"

paises = ["Argentina", "Colombia", "Peru", "Mexico", "Chile", "Brasil"]

for pais in paises:
    datos_climaticos = obtener_datos_climaticos(pais)
    print(datos_climaticos)
    print("-" * 30)
