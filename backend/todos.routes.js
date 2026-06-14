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
// D

module.exports = todosRoutes;