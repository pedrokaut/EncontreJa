const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config({ path: `${__dirname}/.env` });

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend EncontreJa rodando." });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/db-health", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT NOW() AS now, current_database() AS database"
    );

    res.json({
      status: "ok",
      database: result.rows[0].database,
      serverTime: result.rows[0].now,
    });
  } catch (error) {
    console.error("Erro ao conectar no PostgreSQL:", error);

    res.status(500).json({
      status: "error",
      message: "Nao foi possivel conectar no PostgreSQL.",
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
