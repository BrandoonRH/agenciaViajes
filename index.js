//const express = require('express'); 
import express from 'express'; 
import router from './routes/index.js';
import db from './config/db.js';


const app = express(); 

//Conectar la Base de Datos 
db.authenticate()
    .then(() => console.log('Base de Datos') )
    .catch(error => console.log(error))
 
//Definir el Puerto 
const port = process.env.PORT || 5000; 

//Abilitar PUG 
app.set('view engine', 'pug'); 

//Obtener el año Actual 
app.use((req, res, next) => {
    const year = new Date(); 
    res.locals.atualYear = year.getFullYear(); //Con locals la variable eta disponible en las vistas 
    next(); 
})

//Agregar body parser para leer los datos del formulario 
app.use(express.urlencoded({extended: true}))

//Definir la carpeta Public 
app.use(express.static('public')); 

//Agregar Router
app.use('/', router);

app.listen(port, () =>{
    console.log(`EL servidor esta Funcionando en el puerto ${port}`); 
})