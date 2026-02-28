# Projeto Agenda

Este projeto foi desenvolvido com o objetivo de consolidar meus conhecimentos em Node.js, Express e MongoDB. Através dele, implementei um CRUD completo de uma Agenda Virtual, permitindo a criação, edição e exclusão de contatos com persistência de dados em tempo real.

A aplicação segue rigorosamente a arquitetura MVC (Model-View-Controller), garantindo uma estrutura organizada e escalável.

Este projeto é fruto dos meus estudos no curso de JavaScript e TypeScript do professor Luiz Otávio, onde pude aplicar na prática conceitos avançados de backend e gerenciamento de banco de dados NoSQL.

---

## Funcionalidades

- **Sistema de Login:** Autenticação segura com Bcrypt e Express-Session.
- **CRUD de Contatos:** Criar, visualizar, editar e excluir contatos.
- **Validação de Dados:** Verificação de e-mail, telefone e campos obrigatórios.
- **Mensagens de Feedback:** Uso de Flash Messages para erros e sucessos.
- **Segurança:** Proteção contra ataques CSRF e Middlewares de controle de acesso.

---

## Tecnologias Utilizadas

* **Backend:** Node.js, Express.js
* **Banco de Dados:** MongoDB (via Mongoose)
* **Template Engine:** EJS (Embedded JavaScript)
* **Estilização:** Bootstrap 4
* **Segurança:** Helmet, CSRF, Bcrypt

---

## Pré-requisitos


#### Antes de começar, são necessários na sua máquina:
- [Node.js](https://nodejs.org/en/)

- [MongoDB](https://www.mongodb.com/) (ou uma conta no MongoDB Atlas)

---

## Estrutura do Projeto
``` text
PROJETOAGENDA/
├── frontend/ assets/          # Arquivos de origem (CSS/JS) antes do bundle
├── src/
│   ├── controllers/           # Lógica das rotas e controle de dados
│   ├── models/                # Esquemas (Mongoose) e regras de negócio
│   ├── middlewares/           # Interceptadores de requisições (Login/CSRF)
│   └── views/                 # Templates EJS (Interface do usuário)
├── public/                    # Arquivos estáticos servidos pelo Express
├── routes.js                  # Definição de todos os endpoints
├── server.js                  # Inicialização do servidor e conexões
└── webpack.config.js          # Configuração do empacotador de assets
```

---

## Como executar o projeto

1. Clone este repositório

```bash
git clone https://github.com/arthurheraclio/projeto-agenda.git
```
2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente (crie um arquivo `.env` na raiz):
```env
CONNECTIONSTRING=Sua_String_De_Conexao_Do_MongoDB
```

4. Inicie o servidor:
```bash
npm start
```

5. Acesse no navegador: 
<pre>
http://localhost:3000
</pre>
