const express = require('express')
require('dotenv').config()

console.log(process.env)

//?Creacion servidor Express - EspressApp

const app = express()

//?Directorio Publico

app.use( express.static('public') )


//?Rutas

// app.get('/', ( req, res ) => {

//     res.json({
//         ok: true
//     })

// })



apicall()

//?Escuchar peticiones
// Primer arg es el puerto en donde este corriendo el servidor ( despues se toma de .env )
// Segundo arg es un callback, se ejecuta cuando el servidor esta corriendo

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
} )

