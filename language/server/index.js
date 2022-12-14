const express = require('express');
const path = require('path');
// eslint-disable-next-line no-unused-vars
const db = require('../db/index');
const controllers = require('./controllers/controllers');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/topics', (req, res) => {
  controllers.getAllTopics((error, result) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.status(200).send(result);
    }
  });
});

app.post('/contributions', (req, res) => {
  controllers.addContribution(req.body, (error, result) => {
    if (error) {
      res.sendStatus(500);
    } else {
      console.log('Successfully posted to the database');
      res.status(201).send(result);
    }
  });
});

app.get('/contributions', (req, res) => {
  controllers.getContributions(req.query.topic, (error, result) => {
    if (error) {
      res.sendStatus(404);
    } else {
      const response = { topic: req.query.topic, results: result };
      res.status(200).send(response);
    }
  });
});

const PORT = 3000;

app.listen(PORT);
console.log('Server listening at http://localhost:3000');
