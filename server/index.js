require('dotenv/config');

const PORT = process.env.PORT || 3002;

const express = require('express');
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const axios = require('axios');

const db = require('./database');
const clientError = require('./client-error');
const staticMiddleware = require('./static-middleware');

const app = express();
// const http = require('http');
// const server = http.createServer(app);

app.use(cors());
app.use(staticMiddleware);
app.use(express.json());

// (http, {
//   cors: {
//     origin: [`http://localhost:${process.env.PORT}`],
//     methods: ['GET', 'POST']
//   }

// });

const storage = multer.diskStorage({
  destination: './server/uploads/',
  filename: function (req, file, cb) {
    cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage
});

app.post("/api/contacts", (req, res, next) => {
  const values = [req.body.firstName, req.body.lastName, req.body.email, req.body.gender, req.body.question, req.body.comments];
  const sql = `
  INSERT INTO "contacts" ("firstName", "lastName", "email", "gender", "question", "comments")
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *
  `;
  db.query(sql, values)
    .then((response) => {
      res.status(201).json(response.rows);
    })
    .catch(error => {
      console.error(error);
      throw new clientError('There was an error posting your data', 500);
      res.status(500).json({
        error: "Internal service error"
      });
    });
});




app.listen(PORT, () => {
  console.log('Express server listening on port', PORT);
});
