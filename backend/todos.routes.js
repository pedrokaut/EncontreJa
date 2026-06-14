const express = require("express");


const allItems = [];
const todosRoutes = express.Router();
const { Pool } = require("pg");
// C
todosRoutes.post("/todos", (request, response) => {
  const { title, description, location, status } = request.body
  const item = {
    id: Date.now(),
    title,
    description,
    location,
    status,
    created_at: new Date()
  }

  allItems.push(item)
  response.status(201).json(allItems)
})
// R
todosRoutes.get("/todos", (request, response) => {
  return response.json(allItems)
})

// U
todosRoutes.put("/todos/:id", (request, response) => {
  const { id } = request.params;
  const { title, description, location, status } = request.body;

  const index = allItems.findIndex((item) => String(item.id) === String(id));

  if (index === -1) {
    return response.status(404).json({ message: "Item não encontrado." });
  }

  allItems[index] = {
    ...allItems[index],
    title: title ?? allItems[index].title,
    description: description ?? allItems[index].description,
    location: location ?? allItems[index].location,
    status: status ?? allItems[index].status,
    updated_at: new Date().toISOString(),
  };

  return response.json(allItems[index]);
});

// D
todosRoutes.delete("/todos/:id", (request, response) => {
  const { id } = request.params;
  const index = allItems.findIndex((item) => String(item.id) === String(id));

  if (index === -1) {
    return response.status(404).json({ message: "Item não encontrado." });
  }

  allItems.splice(index, 1);
  return response.json({ message: "Item removido com sucesso." });
});
module.exports = todosRoutes;