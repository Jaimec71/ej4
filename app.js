// GitHub: https://github.com/Jaimec71/ej4.git

const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// Crear el servidor
app.listen(PORT, () => console.log(`Express listening on port... ${PORT}`))

// Registrar el motor de plantillas
app.set('view engine', 'ejs')

// Crear un carpeta pública con contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {title: "Home", enlace: "/productos"})
})

const productos = [{nombre: "Ordenador", precio: 700}, {nombre: "Impresora", precio: 150}, {nombre: "Ratón", precio: 150}, {nombre: "Teclado", precio: 40}, {nombre: "Monitor", precio: 180},
     {nombre: "Table", precio: 200}, {nombre: "Escáner", precio: 175}, {nombre: "Cámara", precio: 130}, {nombre: "Router", precio: 90}, {nombre: "Switch", precio: 70}];

app.get('/productos', (req, res) => {
    res.render('productos', {title: "Productos", enlace:"/", productos})
})

app.use((req, res) => {
    res.status(404).render('404', {title: "404"})
})