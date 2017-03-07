import path from 'path';
import express from 'express';
import userController from './controllers/UserController';
const routerView = express.Router();

routerView.get('/', (req, res) => {
  console.log(__dirname)
  res.status(200).sendFile(path.join(__dirname + '/public/index.html'));
});

export default routerView;
