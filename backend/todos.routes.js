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
    imageUrl: row.image_url,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

function mapClaim(row) {
  return {
    id: row.id,
    itemId: row.item_id,
    requester: row.requester,
    confirmation: row.confirmation,
    active: row.active,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
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
    imageUrl,
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
        contact,
        image_url
      )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
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
        imageUrl || null,
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
    imageUrl,
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
          image_url = $11,
          updated_at = NOW()
        WHERE id = $12
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
        imageUrl ?? item.image_url,
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

todosRoutes.get("/claims", async (_request, response) => {
  try {
    const result = await pool.query("SELECT * FROM claims ORDER BY created_at DESC, id DESC");
    return response.json(result.rows.map(mapClaim));
  } catch (error) {
    console.error("Erro ao listar reivindicacoes:", error);
    return response.status(500).json({ message: "Nao foi possivel listar as reivindicacoes." });
  }
});

todosRoutes.post("/claims", async (request, response) => {
  const { itemId, requester, confirmation } = request.body;

  if (!itemId || !confirmation) {
    return response.status(400).json({
      message: "Item e confirmacao sao obrigatorios.",
    });
  }

  try {
    const item = await pool.query("SELECT * FROM items WHERE id = $1", [itemId]);

    if (item.rowCount === 0) {
      return response.status(404).json({ message: "Item nao encontrado." });
    }

    const activeClaim = await pool.query(
      "SELECT id FROM claims WHERE item_id = $1 AND active = TRUE LIMIT 1",
      [itemId],
    );

    if (activeClaim.rowCount > 0) {
      return response.status(409).json({ message: "Este item ja possui uma reivindicacao ativa." });
    }

    const result = await pool.query(
      `
        INSERT INTO claims (item_id, requester, confirmation)
        VALUES ($1, $2, $3)
        RETURNING *
      `,
      [itemId, requester || null, confirmation],
    );

    await pool.query("UPDATE items SET status = $1, updated_at = NOW() WHERE id = $2", [
      "Em verificação",
      itemId,
    ]);

    return response.status(201).json(mapClaim(result.rows[0]));
  } catch (error) {
    console.error("Erro ao criar reivindicacao:", error);
    return response.status(500).json({ message: "Nao foi possivel criar a reivindicacao." });
  }
});

todosRoutes.put("/claims/:id/return", async (request, response) => {
  const { id } = request.params;

  try {
    const current = await pool.query("SELECT * FROM claims WHERE id = $1", [id]);

    if (current.rowCount === 0) {
      return response.status(404).json({ message: "Reivindicacao nao encontrada." });
    }

    const claim = current.rows[0];
    await pool.query("UPDATE items SET status = $1, updated_at = NOW() WHERE id = $2", [
      "Devolvido",
      claim.item_id,
    ]);

    const result = await pool.query(
      "UPDATE claims SET active = FALSE, updated_at = NOW() WHERE id = $1 RETURNING *",
      [id],
    );

    return response.json(mapClaim(result.rows[0]));
  } catch (error) {
    console.error("Erro ao confirmar devolucao:", error);
    return response.status(500).json({ message: "Nao foi possivel confirmar a devolucao." });
  }
});

module.exports = todosRoutes;
