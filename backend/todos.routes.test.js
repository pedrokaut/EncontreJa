const test = require('node:test');
const assert = require('node:assert/strict');
const express = require('express');
const todosRoutes = require('./todos.routes');
const { initDb, pool } = require('./db');

async function startApp() {
  const app = express();
  app.use(express.json());
  app.use(todosRoutes);

  const server = await new Promise((resolve) => {
    const instance = app.listen(0, () => resolve(instance));
  });

  const { port } = server.address();

  return { server, baseUrl: `http://127.0.0.1:${port}` };
}

test('CRUD de itens funciona com as rotas', async () => {
  await initDb();
  const { server, baseUrl } = await startApp();
  let createdItemId;

  try {
    const createResponse = await fetch(`${baseUrl}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'Notebook',
        description: 'Dell preto',
        location: 'Biblioteca',
        status: 'Perdido',
      }),
    });

    assert.equal(createResponse.status, 201);
    const item = await createResponse.json();
    createdItemId = item.id;
    assert.equal(item.title, 'Notebook');

    const updateResponse = await fetch(`${baseUrl}/todos/${item.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'Notebook atualizado',
        description: 'Dell preto com adesivo',
        location: 'Biblioteca',
        status: 'Encontrado',
      }),
    });

    assert.equal(updateResponse.status, 200);
    const updated = await updateResponse.json();
    assert.equal(updated.title, 'Notebook atualizado');
    assert.equal(updated.status, 'Encontrado');

    const deleteResponse = await fetch(`${baseUrl}/todos/${item.id}`, {
      method: 'DELETE',
    });

    assert.equal(deleteResponse.status, 200);
    const deleted = await deleteResponse.json();
    assert.equal(deleted.message, 'Item removido com sucesso.');

    const listResponse = await fetch(`${baseUrl}/todos`);
    const list = await listResponse.json();
    assert.ok(!list.some((entry) => entry.id === item.id));
  } finally {
    if (createdItemId) {
      await pool.query('DELETE FROM items WHERE id = $1', [createdItemId]);
    }
    await new Promise((resolve) => server.close(resolve));
  }
});
