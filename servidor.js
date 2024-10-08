const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Para manejar JSON

// Importar las rutas
const todosRoutes = require('./routes/todos');
app.use('/api/todos', todosRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});