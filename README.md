# 📚 API de Alunos - Curso Técnico de Informática

Uma API RESTful para gerenciar cadastros de alunos do curso técnico de Informática, construída com **Node.js**, **Express**, **PostgreSQL**, **Prisma ORM** e **Docker**. Permite criar, listar, atualizar e excluir registros de alunos de forma eficiente.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para construção de APIs REST.
- **PostgreSQL**: Banco de dados relacional.
- **Prisma ORM**: ORM para interação com o banco de dados.
- **Docker + Docker Compose**: Contêinerização e orquestração de serviços.
- **CORS/JSON**: Suporte a requisições cross-origin e formato JSON.

## 📦 Pré-requisitos

- [Node.js](https://nodejs.org/) (v16 ou superior, para execução local)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) (para execução em contêineres)
- [Git](https://git-scm.com/) (para clonar o repositório)

## 🛠️ Instalação e Execução

### 1. Clonar o repositório

```bash
git clone https://github.com/andre-0303/api_alunos.git
cd api_alunos
```

### 2. Configurar arquivos de ambiente

Crie os arquivos `.env` e `.env.docker` na raiz do projeto com as seguintes configurações:

#### `.env` (execução local)

```env
DATABASE_URL="postgresql://postgres:senha@localhost:5432/api_alunos?schema=public"
```

#### `.env.docker` (execução com Docker)

```env
DATABASE_URL="postgresql://postgres:23042024Ma@db:5433/api_alunos?schema=public"
```

> **Nota**: Substitua `senha` no `.env` pela senha do seu banco PostgreSQL local.

### 3. Subir os contêineres (com Docker)

```bash
docker-compose up -d
```

### 4. Executar migrações do Prisma

Acesse o contêiner da API e aplique as migrações para criar a estrutura do banco:

```bash
docker-compose exec api sh
npx prisma migrate dev --name init
```

### 5. Iniciar o servidor

#### Com Docker

```bash
npm run dev:docker
```

#### Localmente (sem Docker)

```bash
npm install
npm run dev
```

O servidor estará disponível em `http://localhost:3000` (ou a porta configurada).

## 📋 Endpoints da API

### 🔹 Criar aluno

- **Método**: `POST /alunos`
- **Corpo da requisição** (JSON):
  ```json
  {
    "nome": "João Silva",
    "idade": 18,
    "email": "joao.silva@email.com",
    "turma": "Infor 67",
    "ano": 2023
  }
  ```
- **Resposta**: `201 Created` com os dados do aluno criado.

### 🔹 Listar todos os alunos

- **Método**: `GET /alunos`
- **Resposta**: `200 OK` com a lista de alunos.

### 🔹 Atualizar um aluno

- **Método**: `PUT /alunos/:id`
- **Corpo da requisição** (JSON):
  ```json
  {
    "nome": "João Silva Atualizado",
    "idade": 19,
    "email": "joao.atualizado@email.com",
    "turma": "Infor G8",
    "ano": 2024
  }
  ```
- **Resposta**: `200 OK` com os dados atualizados.

### 🔹 Deletar um aluno

- **Método**: `DELETE /alunos/:id`
- **Resposta**: `204 No Content` (se bem-sucedido).

## 🗃️ Estrutura do Banco de Dados

A tabela `aluno` possui os seguintes campos:

| Campo   | Tipo         | Descrição                              |
|---------|--------------|----------------------------------------|
| `id`    | UUID         | Identificador único (gerado automaticamente) |
| `nome`  | String       | Nome completo do aluno                 |
| `idade` | Integer      | Idade do aluno                         |
| `email` | String       | E-mail do aluno                        |
| `turma` | String       | Turma do curso (ex.: INFO-2023)        |
| `ano`   | Integer      | Ano de ingresso no curso               |

## 🐳 Comandos Úteis do Docker

- **Ver logs**: `docker-compose logs -f api`
- **Acessar contêiner**: `docker-compose exec api sh`
- **Parar e remover contêineres**: `docker-compose down`
- **Reconstruir contêineres**: `docker-compose up -d --build`

## 🛠️ Solução de Problemas

- **Erro de conexão com o banco**: Verifique se o PostgreSQL está ativo e se o `DATABASE_URL` está correto.
- **Migrações não aplicadas**: Certifique-se de executar `npx prisma migrate dev` dentro do contêiner ou localmente.
- **Porta em uso**: Altere a porta no arquivo `.env` ou libere a porta padrão (3000).

## 🤝 Contribuições

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature: `git checkout -b minha-feature`.
3. Commit suas alterações: `git commit -m 'Adiciona minha feature'`.
4. Envie para o repositório remoto: `git push origin minha-feature`.
5. Abra um Pull Request.

## ✍️ Autor

Desenvolvido por **André Bandeira** 👨‍💻  
📍 GitHub: [andre-0303](https://github.com/andre-0303)  
