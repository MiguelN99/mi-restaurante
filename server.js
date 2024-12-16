const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Carpeta de archivos estáticos (CSS, JS, etc.)

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Tu usuario de MySQL
  password: '',  // Tu contraseña de MySQL
  database: 'restaurante'  // Nombre de tu base de datos
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conexión a MySQL exitosa');
});

// Ruta para obtener el menú
app.get('/menu', (req, res) => {
  const query = 'SELECT * FROM menu';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
