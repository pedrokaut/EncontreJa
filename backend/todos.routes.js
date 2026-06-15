const express = require("express");
const { pool } = require("./db");

const todosRoutes = express.Router();

function mapItem(row) {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    details: row.description,
    category: row.category,
    location: row.location,
    status: row.status,
    date: row.date,
    place: row.place,
    currentLocation: row.current_location,
    owner: row.owner,
    contact: row.contact,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

todosRoutes.post("/todos", async (request, response) => {
  const {
    title,
    description,
    details,
    category,
    location,
    status,
    date,
    place,
    currentLocation,
    owner,
    contact,
  } = request.body;

  if (!title || !location || !status) {
    return response.status(400).json({
      message: "Titulo, localizacao e status sao obrigatorios.",
    });
  }

  try {
    const result = await pool.query(
      `
        INSERT INTO items (
          title,
          description,
          category,
          location,
          status,
          date,
          place,
          current_location,
          owner,
          contact
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        RETURNING *
      `,
      [
        title,
        description || details || "",
        category || title,
        location,
        status,
        date || null,
        place || null,
        currentLocation || null,
        owner || null,
        contact || null,
      ],
    );

    return response.status(201).json(mapItem(result.rows[0]));
  } catch (error) {
    console.error("Erro ao criar item:", error);
    return response.status(500).json({ message: "Nao foi possivel criar o item." });
  }
});

todosRoutes.get("/todos", async (_request, response) => {
  try {
    const result = await pool.query("SELECT * FROM items ORDER BY created_at DESC, id DESC");
    return response.json(result.rows.map(mapItem));
  } catch (error) {
    console.error("Erro ao listar itens:", error);
    return response.status(500).json({ message: "Nao foi possivel listar os itens." });
  }
});

todosRoutes.put("/todos/:id", async (request, response) => {
  const { id } = request.params;
  const {
    title,
    description,
    details,
    category,
    location,
    status,
    date,
    place,
    currentLocation,
    owner,
    contact,
  } = request.body;

  try {
    const current = await pool.query("SELECT * FROM items WHERE id = $1", [id]);

    if (current.rowCount === 0) {
      return response.status(404).json({ message: "Item nao encontrado." });
    }

    const item = current.rows[0];
    const result = await pool.query(
      `
        UPDATE items
        SET
          title = $1,
          description = $2,
          category = $3,
          location = $4,
          status = $5,
          date = $6,
          place = $7,
          current_location = $8,
          owner = $9,
          contact = $10,
          updated_at = NOW()
        WHERE id = $11
        RETURNING *
      `,
      [
        title ?? item.title,
        description ?? details ?? item.description,
        category ?? item.category,
        location ?? item.location,
        status ?? item.status,
        date ?? item.date,
        place ?? item.place,
        currentLocation ?? item.current_location,
        owner ?? item.owner,
        contact ?? item.contact,
        id,
      ],
    );

    return response.json(mapItem(result.rows[0]));
  } catch (error) {
    console.error("Erro ao atualizar item:", error);
    return response.status(500).json({ message: "Nao foi possivel atualizar o item." });
  }
});

todosRoutes.delete("/todos/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const result = await pool.query("DELETE FROM items WHERE id = $1 RETURNING id", [id]);

    if (result.rowCount === 0) {
      return response.status(404).json({ message: "Item nao encontrado." });
    }

    return response.json({ message: "Item removido com sucesso." });
  } catch (error) {
    console.error("Erro ao remover item:", error);
    return response.status(500).json({ message: "Nao foi possivel remover o item." });
  }
});

module.exports = todosRoutes;
