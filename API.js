
/** aquí importamos la librería Expressjs en nuestro archivo. */
const express = require('express'); 
const app = express(); /**aquí creamos una nueva instancia del servidor Express.js. */

// Permite parsear el contenido en un tipo application/json
app.use(express.json()) 
// Permite parsear el contenido en un tipo application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })) 


/**Agregando nuevos endpoints */
/**#aquí definimos el primer path de la API: GET / */
app.get('/', (req, res)=>{  
    res.send("Hello World!, Se recibió un GET");
    /**#expressjs devolverá "Hello World, esto podría ser un string HTML o un string JSON. */
})


app.get('/person', (req, res)=>{
    const person1 = {
        "name": "Bob"
    }
    res.status(200).json(person1);
});
/**
 * El código de respuesta
El código de respuesta es 200 por defecto, y 500 si hay un error desconocido.
Si deseas responder al cliente con un código diferente, 
deberás especificarlo así:
*/

app.get('/person', (req, res)=>{
    const contenido = {
      "detalles": "Hubo un error en la solicitud"
    }
    /**aquí cambiamos el código de estado a 400 (código muy común en caso de errores de solicitud) */
    res.status(400).json(contenido); 
})



/**Especificando el método: GET, PUT, POST, DELETE
Si deseas que tu endpoint responda a POST, PUT o DELETE, 
puedes especificarlo de la siguiente manera: 
*/

/**#aquí definimos el primer path de la API: POST / */
app.post('/', (req, res)=>{  
    res.send("Se recibió un POST")
})



/** Manejando errores y validaciones */

app.post('/articulos', (req, res) => {
    const { body } = req; 
    
    if (!body) {
        return res.status(400).json({ message: "The request body is null" });
    }

    if (!body.hasOwnProperty('first_name')) {
        return res.status(400).json({ message: "The request first_name is null" });
    }

    if (!body.hasOwnProperty('last_name')) {
        return res.status(400).json({ message: "The request last_name is null" });
    }

    return res.status(400).json(body);
})



/**finalmente iniciamos el servidor en el localhost. */
app.listen(4000, function(){
    console.log('API en ejecución en el puerto 4000');
})