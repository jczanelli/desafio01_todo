const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  // Complete aqui
}

app.post('/users', (request, response) => {
  const {name, username} = request.body;
  const userAlreadyExists = users.some((user) => user.username === username);

  if(userAlreadyExists){
    return response.status(400).json({error: "User already exists"});
  };

  users.push({
    name,
    username,
    id: uuidv4(),
    todos:[],
  });
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  const {username} = request;
  return response.json(username.todos);
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

module.exports = app;