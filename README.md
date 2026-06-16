<p align="center">
  <img width="100px" src="https://assecom.ufersa.edu.br/wp-content/uploads/sites/24/2014/09/PNG-bras%C3%A3o-Ufersa.png" alt="Brasão da Ufersa" />
</p>

<h1 align="center">EncontreJá</h1>
<p align="center"><b>Projeto da Disciplina de Engenharia de Software</b></p>

<div align="center">

</div>

# EncontreJá

## i. Objetivo do Sistema

O **EncontreJá** é uma plataforma digital desenvolvida para facilitar a localização e devolução de itens perdidos dentro do campus da UFERSA (Universidade Federal Rural do Semi-Árido). O sistema conecta pessoas que perderam objetos com aquelas que as encontraram, criando um canal eficiente de comunicação e devolução.

---

## ii. Descrição do Problema

Estudantes e servidores frequentemente perdem itens no campus (mochilas, documentos, eletrônicos, etc.), dificultando a recuperação. Não existe um sistema centralizado para registrar e localizar esses objetos, resultando em:
- Itens perdidos sem chance de retorno
- Falta de comunicação entre quem perdeu e quem encontrou
- Tempo desperdiçado procurando itens em pontos de achados espalhados

O EncontreJá resolve esse problema centralizando a gestão de itens perdidos e encontrados em uma única plataforma.

---

## iii. Principais Funcionalidades

- **Cadastro de Itens**: Registrar itens perdidos ou encontrados com fotos, descrição, local e data
- **Busca e Filtros**: Buscar itens por categoria, localização, data ou palavras-chave
- **Reivindicações**: Reivindicar itens encontrados fornecendo características não visíveis para confirmação
- **Confirmação de Devolução**: Confirmar quando um item foi devolvido ao dono
- **Gerenciamento de Itens**: Usuários podem visualizar, atualizar e remover seus próprios cadastros
- **Autenticação**: Login com credenciais institucionais (e-mail @alunos.ufersa.edu.br ou @ufersa.edu.br)
- **Matches**: Sugestão automática de possíveis correspondências entre itens perdidos e encontrados

---

## iv. Tecnologias Utilizadas

### Frontend
- **React 19** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Bundler e dev server de alta performance
- **CSS3** - Estilização responsiva

### Backend
- **Node.js** - Runtime JavaScript no servidor
- **Express.js** - Framework web para criar APIs RESTful
- **PostgreSQL** - Banco de dados relacional

### Ferramentas
- **Dotenv** - Gerenciamento de variáveis de ambiente
- **CORS** - Controle de requisições entre domínios
- **ESLint** - Linter para manter qualidade do código

---

## v. Estrutura do Projeto

```
EncontreJa/
├── frontend/                 # Aplicação React (Vite)
│   ├── src/
│   │   ├── App.jsx          # Componente principal
│   │   ├── App.css          # Estilos globais
│   │   ├── main.jsx         # Ponto de entrada
│   │   └── assets/          # Imagens e recursos
│   ├── public/              # Arquivos públicos
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── backend/                  # Servidor Node.js + Express
│   ├── server.js            # Configuração principal do servidor
│   ├── db.js                # Configuração do banco de dados
│   ├── todos.routes.js      # Rotas da API
│   ├── todos.routes.test.js # Testes automatizados
│   ├── .env                 # Variáveis de ambiente
│   └── package.json
│
├── public/                   # Arquivos estáticos gerais
│   └── images/
│
├── package.json
└── README.md
```

---

## vi. Instruções de Execução

### Pré-requisitos
- **Node.js** (v14+)
- **PostgreSQL** (v12+)
- **npm** ou **yarn**

### 1. Clonar o repositório
```bash
git clone <URL-DO-REPOSITORIO>
cd EncontreJa
```

### 2. Configurar o Backend

```bash
cd backend

# Instalar dependências
npm install

# Criar arquivo .env com as variáveis de ambiente
# Exemplo:
# PORT=3000
# DB_HOST=localhost
# DB_PORT=5432
# DB_USER=postgres
# DB_PASSWORD=sua_senha
# DB_NAME=encontreja

# Executar o servidor
npm start
```

### 3. Configurar o Frontend

```bash
cd frontend

# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Para fazer build para produção
npm run build
```

### 4. Iniciar banco de dados

```bash
psql -U postgres -h localhost
```

Senha do branco: 123

### 5. Acessar a aplicação
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3000`

### 6. Executar testes
```bash
cd backend
npm test
```

---

## vii. Link do Protótipo

[Acesse o protótipo do Figma aqui](https://www.figma.com/design/x38bFOsqX00iZJEL8lg2tC/Encontrej%C3%A1-web?node-id=0-1&t=uhsrFxVfXe2Wmo2r-1)


---

## viii. Integrantes da Equipe

- **Jennefhy Saiury** - Desenvolvimento Full Stack
- **Pedro Soares** - Desenvolvimento Full Stack
- **Pablo Ryan** - Desenvolvimento Full Stack

---

## ix. Status Atual do Desenvolvimento

### ✅ Implementado
- [x] Autenticação de usuários com validação de e-mail institucional
- [x] Cadastro de itens perdidos e encontrados
- [x] Listagem e busca de itens com filtros
- [x] Detalhes de itens com fotos
- [x] Sistema de reivindicações
- [x] Confirmação de devoluções
- [x] Gerenciamento de itens pessoais
- [x] API RESTful completa
- [x] Banco de dados PostgreSQL

### 🔄 Em Desenvolvimento
- [ ] Integração com sistema de notificações
- [ ] Mapa de localização interativo
- [ ] Relatórios de recuperação

### 📋 Planejado
- [ ] Aplicativo mobile (React Native)
- [ ] Sistema de ratings e reputação
- [ ] Integração com redes sociais
- [ ] Backup e recuperação automática

---

## Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Add MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 🧑‍💻 Desenvolvedores

<div align="center">

| <img src="https://avatars.githubusercontent.com/u/115113727?v=4" width="115"><br><sub><b>Jennefhy Saiury de Lima Pontes</b><br>2024010522</sub> | <img src="https://avatars.githubusercontent.com/u/171264485?v=4" width="115"><br><sub><b>Pedro Victor Soares Gonçalo</b><br>2024010454</sub> | <img src="https://avatars.githubusercontent.com/u/186582235?v=4" width="115"><br><sub><b>Pablo Ryan Lopes Vieira</b><br>2024010361</sub> |
|:---:|:---:|:---:|
| [GitHub](https://github.com/jennefhy) | [GitHub](https://github.com/pedrokaut) | [GitHub](https://github.com/Ryan-loyer) |

</div>


## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
