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

### 4. Acessar a aplicação
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3000`

### 5. Executar testes
```bash
cd backend
npm test
```

---

## vii. Link do Protótipo

[Acesse o protótipo do Figma aqui](https://www.figma.com/design/seu-projeto-figma)

*Nota: Atualize com o link correto do seu protótipo de design*

---

## viii. Integrantes da Equipe

- **Jennefhy Saiury** - Desenvolvimento Full Stack
- *(Adicione outros membros da equipe conforme necessário)*

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
- [ ] Upload de imagens melhorado
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

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

**Desenvolvido com ❤️ para a comunidade UFERSA**
