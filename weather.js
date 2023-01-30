const form = document.querySelector('form');  // selecciona el elemento con etiqueta form
const input = document.querySelector('input[name="location"]');  // selecciona el elemento input con el atributo name igual a "location"

form.addEventListener('submit', async (e) => {  // escuchando al evento submit en el formulario, se ejecuta una función asíncrona
  e.preventDefault();  // detiene el comportamiento por defecto del evento submit
  while (form.lastElementChild.tagName === 'P' || form.lastElementChild.tagName === 'UL') {  // mientras el último elemento hijo del formulario sea un párrafo o una lista
    form.removeChild(form.lastElementChild);  // elimina el último elemento hijo del formulario
  }
  const location = input.value;  // obtiene el valor del input "location" y lo guarda en la variable "location"
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=TU_API&q=${location}&lang=es&days=7`);  // realiza una petición a la API de clima con el valor de "location" y espera la respuesta
  const data = await response.json();  // convierte la respuesta a formato JSON
  const current = data.current;  // obtiene la información actual del tiempo
  const forecast = data.forecast.forecastday;  // obtiene la información del pronóstico del tiempo para los próximos días

  const temperatureElement = document.createElement('p');  // crea un nuevo elemento párrafo
  temperatureElement.innerHTML = `La temperatura actual en ${location} es de ${current.temp_c}°C y el clima es ${current.condition.text}.`;  // establece el contenido HTML del párrafo con la información actual del tiempo
  form.appendChild(temperatureElement);  // agrega el párrafo al formulario

  const forecastList = document.createElement('ul');  // crea una nueva lista
  forecast.forEach((day) => {  // para cada día en el pronóstico del tiempo
    const forecastItem = document.createElement('li');  // crea un nuevo elemento de lista
    forecastItem.innerHTML = `El día ${day.date} será ${day.day.condition.text} con una temperatura máxima de ${day.day.maxtemp_c}°C.`;  // establece el contenido HTML del elemento de lista con la información del pronóstico del tiempo para el día
    forecastList.appendChild(forecastItem);  // agrega el elemento de lista a la lista
  });
   form.appendChild(forecastList); //  agrega el elemento forecastList como el último hijo del elemento form.
});