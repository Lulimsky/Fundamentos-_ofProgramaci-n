# Fundamentos-_ofProgramaci-n

Explicación de la linea de pensamiento para resolver cada desafío.

**Código en Python:**

1. Importar la biblioteca `requests` para realizar solicitudes HTTP a la API de OpenWeatherMap.

2. Definir la función `obtener_datos_climaticos(nombre_pais)` que toma el nombre de un país como argumento.

3. Se crea la URL de la API de OpenWeatherMap utilizando la clave de API proporcionada y el nombre del país;con el parámetro `lang=es` para obtener los datos en español.

4.Llamada a la solicitud GET a la URL utilizando `requests.get(url)` y almacenamos la respuesta en la variable `response`.

5. Se convierte la respuesta en formato JSON utilizando `response.json()` , para ser guardada en la variable `data`.

6. La solicitud fue exitosa. Si el código de estado (`cod`) en la respuesta `data` es igual a 200.

7. Siendo así, se toman los datos climáticos relevantes, como la temperatura actual, mínima y máxima, y la descripción del clima.

8. Luego, devolvemos una string con los datos climáticos del país solicitado.

9. Si la solicitud NO fue exitosa, se devuelve un mensaje de error.

10. Definimos una lista de nombres de países `paises`.

11. Iteramos a través de la lista de países y llamamos a la función `obtener_datos_climaticos()` para cada país. Luego imprimimos los datos climáticos y una línea de separación.

**Código en JavaScript:**

1. Importar el módulo `axios` para realizar solicitudes HTTP a la API de OpenWeatherMap.

2. Definir la función `obtener_datos_climaticos(nombre_pais)` que toma el nombre de un país como argumento.

3. Construir la URL de la API de OpenWeatherMap utilizando la clave de API proporcionada y el nombre del país. Con el parámetro `lang=es` para obtener los datos en español.

4. Uso `axios.get(url)` para realizar una solicitud GET a la URL y esperar a que la solicitud se complete. Y almacenar la respuesta en la variable `response`.

5. Extraer los datos de la respuesta utilizando `response.data`.

6. Nuevamente, comprobar que código de estado (`cod`) en la respuesta `data` sea igual a 200, lo que significa que la solicitud fue exitosa.

7. Siendo así , se extraen los datos climáticos relevantes, como la temperatura actual, mínima y máxima, y la descripción del clima.

8.Y se devuelve una string con los datos climáticos del país solicitado.

9. Si no, devolver un mensaje de error.

10. Luego, definir una matriz de nombres de países `paises`.

11. Donde la función `obtener_datos_climaticos_para_paises()` que utiliza un loop `for...of` para iterar a través de la matriz de países y llama a la función `obtener_datos_climaticos()` para cada país. Por consiguiente, imprimir los datos climáticos y una línea de separación.
