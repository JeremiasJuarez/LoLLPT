const express = require('express')
require('dotenv').config()

//?Creacion servidor Express - EspressApp

const app = express()

//?Directorio Publico

app.use( express.static('public') )

//? Lectura y parseo del body 
//par poder hacer req.body en los controllers
app.use( express.json() )

//?Rutas

app.use('/api', require( './routes/routes') )


//?Escuchar peticiones
// Primer arg es el puerto en donde este corriendo el servidor ( despues se toma de .env )
// Segundo arg es un callback, se ejecuta cuando el servidor esta corriendo

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
} )

