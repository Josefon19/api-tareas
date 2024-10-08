const express = require('express');
const router = express.Router();

// Lista simulada de tareas
let tareas = [
  { id: 1, titulo: "Lavar la ropa", completado: false },
  { id: 2, titulo: "Sacar a desconjelar el pollo", completado: true },
  { id: 3, titulo: "Tender la cama", completado: false },
  { id: 4, titulo: "Comprar un bolillo", completado: true },
  { id: 5, titulo: "Hacer la tarea", completado: false }
];

// Obtener todas las tareas
router.get('/', (req, res) => {
  res.json(tareas);
});

// Obtener una tarea por ID
router.get('/:id', (req, res) => {
  const tarea = tareas.find(t => t.id == req.params.id);
  if (tarea) {
    res.json(tarea);
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
});

// Crear una nueva tarea
router.post('/', (req, res) => {
  const nuevaTarea = {
    id: tareas.length + 1,
    titulo: req.body.titulo,
    completado: req.body.completado
  };
  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

// Actualizar una tarea existente
router.put('/:id', (req, res) => {
  const tarea = tareas.find(t => t.id == req.params.id);
  if (tarea) {
    tarea.titulo = req.body.titulo;
    tarea.completado = req.body.completado;
    res.json(tarea);
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
});

// Eliminar una tarea
router.delete('/:id', (req, res) => {
  tareas = tareas.filter(t => t.id != req.params.id);
  res.json({ message: "Tarea eliminada" });
});

module.exports = router;