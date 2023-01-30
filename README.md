# Clima-Actual-JS
El código siguiente es un script de JavaScript que se utiliza para obtener información meteorológica de una ciudad específica a través de una API de tiempo.

La primera línea selecciona el formulario en la página HTML y la segunda selecciona el elemento de entrada de texto con un atributo de nombre "location".

El evento de "submit" del formulario se controla con una función asíncrona, que evita que el formulario se envíe y se recargue la página. La función también elimina cualquier información meteorológica anterior que se haya mostrado en la página antes de obtener la información meteorológica actual.

Luego, se obtiene el valor de la ubicación especificada por el usuario a través de la entrada de texto y se envía una solicitud a la API de tiempo utilizando fetch(). La respuesta se convierte en un objeto JSON y se almacena en la variable "data".

A continuación, se crean elementos de párrafo y lista HTML para mostrar la información meteorológica actual y la previsión del tiempo para los próximos días. Los elementos se llenan con los valores de la respuesta de la API y luego se agrega a la página HTML utilizando form.appendChild().

Tenga en cuenta que la API de Weather API tiene un período de prueba de 14 días. Por lo tanto, es importante cambiar el valor de "TU_API" en el código por su propia clave de API antes de usarlo.
