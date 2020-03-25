const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

/**
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 */
/**
 * Tipos de parâmetros:
 * 
 * Query: Parâmetros nomeados enviados após "?" (Filtros, paginação) => res.query;
 * Route params: Parâmetros utilizados para identificar recursos => res.params;
 * Request Body: Corpo da resiquisção, criação ou alteração de dados  => res.body;
 */

app.listen(3333);
