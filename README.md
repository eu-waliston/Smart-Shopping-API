# 🛒 Smart Shopping API

Backend da aplicação Smart Shopping, uma plataforma inteligente de listas de compras com promoções geolocalizadas de mercados próximos.

---

# 🚀 Sobre o projeto

O Smart Shopping nasceu com o objetivo de transformar listas de compras simples em uma experiência inteligente de economia doméstica.

A API permite:

- autenticação de usuários
- criação de listas de compras
- gerenciamento de itens
- promoções de mercados
- busca de mercados próximos
- promoções geolocalizadas
- arquitetura escalável
- documentação Swagger
- testes automatizados

---

# 🧠 Tecnologias utilizadas

## Backend
- Node.js
- Express
- TypeScript

## Banco de dados
- PostgreSQL
- Prisma ORM

## Autenticação
- JWT
- bcryptjs

## Validação
- Zod

## Testes
- Jest
- Supertest

## Documentação
- Swagger

---

# 📁 Estrutura do projeto

```bash
src/
 ├── controllers/
 ├── services/
 ├── repositories/
 ├── middlewares/
 ├── routes/
 ├── schemas/
 ├── tests/
 ├── prisma/
 ├── docs/
 ├── utils/
 ├── app.ts
 └── server.ts
 ```
# 🏗️ Arquitetura
## O projeto segue uma arquitetura em camadas:
```bash
Routes
 ↓
Controllers
 ↓
Services
 ↓
Repositories
 ↓
Database
```
#### Responsabilidades
- **Controllers**: Responsáveis por lidar com requests e responses.
- **Services**: Responsáveis pelas regras de negócio.
- **Repositories**: Responsáveis pelo acesso ao banco de dados.
- **Middlewares**: Responsáveis por autenticação e tratamento global de erros.

# 🔐 Funcionalidades

## 👤 Usuários
- Cadastro
- Login
- Autenticação JWT
## 🛒 Shopping Lists
- Criar listas
- Listar listas
- Adicionar itens
- Marcar itens
- Remover itens
## 🏪 Mercados
- Cadastro de mercados
- Busca de mercados
## 🔥 Promoções
- Cadastro de promoções
- Promoções por categoria
- Promoções próximas
## 🌍 Geolocalização
- Busca de mercados próximos
- Promoções por distância
- Ordenação geográfica

# ⚙️ Instalação

## Clonar projeto

```bash
git clone https://github.com/seu-usuario/smart-shopping-api.git
```

# 🗄️ Configuração do banco

## Variáveis de ambiente

```bash
DATABASE_URL=postgresql://usuario:senha@localhost:5432/smart_shopping
JWT_SECRET="supersecretjwt"
```

## Rodar migrations

```bash
npx prisma migrate dev
```

# ▶️ Rodar aplicação

```bash
npm run dev
```

# 🧪 Testes

```bash
npm test
```

# 📚 Swagger

## Documentação da API

```bash
http://localhost:3000/api-docs
```

# 🌍 Geolocalização

## A API utiliza latitude e longitude para:

- encontrar mercados próximos
- ordenar promoções
- calcular distância

# 📌 Endpoints principais
## Auth
| Método | Endpoint |
| ------ | -------- |
| POST   | /login   |

## Users
| Método | Endpoint |
| ------ | -------- |
| POST   | /users   |
| GET    | /users   |

## Shopping Lists
| Método | Endpoint |
| ------ | -------- |
| POST   | /shopping-lists |
| GET    | /shopping-lists |

## Markets
| Método | Endpoint |
| ------ | -------- |
| POST   | /markets |
| GET    | /markets |

## Promotions
| Método | Endpoint                       |
| ------ | ------------------------------ |
| POST   | /promotions                    |
| GET    | /promotions                    |
| GET    | /promotions/category/:category |
| GET    | /promotions/nearby             |

# 🧠 Futuras melhorias

- upload de imagens
- encartes digitais
- scraping automático
- IA para economia
- favoritos
- analytics
- comparação de preços
- cache com Redis
- Docker
- CI/CD
- rate limiting
- refresh token
- roles/permissões

# 🛡️ Segurança

- Senhas criptografadas com bcrypt
- JWT Authentication
- Middleware global de erros
- Validação com Zod

# 📈 Objetivos do projeto

## O objetivo do Smart Shopping é evoluir para uma plataforma inteligente de economia doméstica baseada em:

- listas inteligentes
- promoções geográficas
- comparação de preços
- recomendação personalizada

# 👨‍💻 Autor

#### Desenvolvido por Tonton 🚀

# 📄 Licença

#### Este projeto está sob licença MIT.
