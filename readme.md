# 🧓 API de Eventos para Idosos

API RESTful criada com **Node.js** e **Express**, com arquitetura baseada em **MVC**, que fornece uma lista de eventos voltados para o público idoso. Permite a visualização, filtragem por categoria e busca por localidade.

---

## 📌 Funcionalidades

- ✅ Listar todos os eventos
- 🔍 Buscar eventos por **categoria** (ex: dança, saúde, tecnologia)
- 📍 Buscar eventos por **local** (ex: cidade ou espaço físico)

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- JavaScript (ES6 Modules)
- Estrutura MVC (Model, Controller, Routes)
- Armazenamento de dados simulado (arquivo `.js`)

---

## 📁 Estrutura de Pastas

```text
api-eventos-idosos/
├── app.js
├── controllers/
│   └── eventosController.js
├── data/
│   └── eventosData.js
├── models/
│   └── eventosModel.js
├── routes/
│   └── eventosRoutes.js
└── README.md
```

---

## 📦 Instalação e Execução

1. Clone o repositório:

```bash
git https://github.com/EmilySSouza/ApiIdosos.git
cd ApiIdosos

2. Instale as dependências:
npm install

3. Inicie a aplicação: 
node app.js

O servidor será iniciado em: http://localhost:3000

```

---

2. Endpoints da API:

```md
Ajuda demais quem vai usar/testar. Exemplo:


## 🔗 Endpoints

### ✅ GET `/eventos`
Retorna todos os eventos cadastrados.

### ✅ GET `/eventos/categoria/:categoria`
Filtra eventos por categoria.  
Exemplo: `/eventos/categoria/saúde`

### ✅ GET `/eventos/local/:local`
Filtra eventos por localidade.  
Exemplo: `/eventos/local/SP`
```

## 👤 Autora

- Nome: Emily Souza
- GitHub: [github.com/EmilySSouza](https://github.com/EmilySSouza)

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).