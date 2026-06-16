const express = require("express");
const cors = require("cors");
const todosRoutes = require("./todos.routes");
const { pool, initDb } = require("./db");
require("dotenv").config({ path: `${__dirname}/.env` });

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(todosRoutes);

const allowedDomains = ['alunos.ufersa.edu.br', 'ufersa.edu.br'];

app.post('/login', (req, res) => {
  const email = String(req.body.email || '').trim().toLowerCase();
  const password = String(req.body.password || '');

  const emailParts = email.split('@');
  const domain = emailParts.length === 2 ? emailParts[1] : '';

  if (!email || emailParts.length !== 2 || !emailParts[0]) {
    return res.status(400).json({ message: 'E-mail inválido.' });
  }

  if (!allowedDomains.includes(domain)) {
    return res
      .status(401)
      .json({ message: 'Use um e-mail institucional @alunos.ufersa.edu.br ou @ufersa.edu.br.' });
  }

  if (password.length < 4) {
    return res.status(401).json({ message: 'A senha precisa ter pelo menos 4 caracteres.' });
  }

  return res.json({ user: { email, name: emailParts[0] } });
});

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

async function start() {
  try {
    await initDb();
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error);
    process.exit(1);
  }
}

start();
