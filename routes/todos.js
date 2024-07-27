const express = require('express');
// importing routers
const router = express.Router();

const {createTodo} = require('../controllers/createTodo');
const {getTodo} = require('../controllers/getTodo');
const {getTodoById} = require('../controllers/getTodo');
const {updateTodo} = require('../controllers/updateTodo');
const {deleteTodo} = require('../controllers/deleteTodo');



// defining paths
router.post('/createTodo',createTodo);
router.get('/getTodo',getTodo);
router.get('/getTodoById/:id',getTodoById);
router.put('/updateTodo/:id',updateTodo);
router.delete('/deleteTodo/:id',deleteTodo)

module.exports = router;