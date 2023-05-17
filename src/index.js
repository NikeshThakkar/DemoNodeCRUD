const express = require('express');
const app = express();
require('dotenv').config();
const process = require('process');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes');
const sequelize = require('./db/dbConnection');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.log(err);
  });

  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/api/v1', routes);
  app.use(
    cors({
      origin: '*',
      allowedHeaders: '*',
    })
  );

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on ${process.env.PORT}`);
});
