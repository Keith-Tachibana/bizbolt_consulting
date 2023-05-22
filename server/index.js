require('dotenv/config');

const express = require('express');
const path = require('path');
const multer = require('multer');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddlware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddlware);
app.use(sessionMiddleware);
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Express server listening on port ${process.env.PORT}!`);
};
