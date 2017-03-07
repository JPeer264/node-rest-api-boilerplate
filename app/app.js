import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import config from './config/config';
import mongoose from 'mongoose';
import routes from './config/routes';
import route from 'express-routes-mapper';
/**
 * Use Postman instead?
 */
import routerView from './router';

const app = express();
const server = http.Server(app);
const port = process.env.PORT || config.port;
const db = mongoose.connect('mongodb://localhost/default');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', route(routes));

/**
 * Use Postman instead?
 */
app.use('/', routerView);

server.listen(port, function() {
  console.log('There we go ♕');
  console.log(`Gladly listening on http://127.0.0.1:${port}`);
});
