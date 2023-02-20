/**
 * Manejo de errores y validaciones
Pero ¿y si la solicitud viene con errores? Por ejemplo: 
si tenemos un endpoint para crear una persona y debemos especificar 
el first_name y el last_name, pero solo se encontró el first_name en la solicitud,
 así es como lo validaríamos:
 */

const express = require('express');
app.use(express.json()) // Permite parsear el contenido en un tipo application/json
app.use(express.urlencoded({ extended: true })) // Permite parsear el contenido en un tipo application/x-www-form-urlencoded

app.post('/person', (req, res) => {
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

/**
 * La librería express-validator nos entrega una forma más cómoda para el manejo de 
 * las validaciones, pueden obtener 
 * más información de como usarla visitando su documentación https://express-validator
 */


/*
Middlewares
Un middleware es una función que tiene acceso al objeto de solicitud o request,
al objeto de respuesta o response y a la siguiente función de middleware a ejecutarse 
en el ciclo de solictud/respuesta. Una vez que nuestro middleware termine su 
ejecución es importante ejecutar la función next() o la solicitud quedara colgada.
A continuación un ejemplo de un middleware que imprimirá por consola la fecha 
y hora en la que ocurren las consultas a la API
*/ 
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();  // aquí invoca al siguiente middleware

});