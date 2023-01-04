Nesse desafio, você deverá criar uma aplicação para treinar o que aprendeu até agora no Node.js!

Essa será uma aplicação para gerenciar tarefas (em inglês todos). Será permitida a criação de um usuário com name e username, bem como fazer o CRUD de todos:
[X] Criar um novo todo;
[X] Listar todos os todos;
[X] Alterar o title e deadline de um todo existente;
[X] Marcar um todo como feito;
[X] Excluir um todo;

Tudo isso para cada usuário em específico (o username será passado pelo header).

Testes:
- Middleware:
Para completar todos os testes referentes à *todos* é necessário antes ter completado o código que falta no middleware `checkExistsUserAccount`. Para isso, você deve pegar o `username` do usuário no header da requisição, verificar se esse usuário existe e então colocar esse usuário dentro da `request` antes de chamar a função `next`. Caso o usuário não seja encontrado, você deve retornar uma resposta contendo status `404` e um json no seguinte formato:
{
	error: 'Mensagem do erro'
}

- Should be able to list all user's todos
Para que esse teste passe, na rota GET /todos é necessário pegar o usuário que foi repassado para o request no middleware checkExistsUserAccount e então retornar a lista todos que está no objeto do usuário conforme foi criado para satisfazer o primeiro teste.

- Should be able to create a new todo
Para que esse teste passe, na rota POST /todos é necessário pegar o usuário que foi repassado para o request no middleware checkExistsUserAccount, pegar também o title e o deadline do corpo da requisição e adicionar um novo todo na lista todos que está no objeto do usuário. Lembre-se de seguir a estrutura padrão de um todo como mostrado aqui.
Após adicionar o novo todo na lista, é necessário retornar um status 201 e o todo no corpo da resposta.

- Should be able to update a todo
Para que esse teste passe, na rota PUT /todos/:id é necessário atualizar um todo existente, recebendo o title e o deadline pelo corpo da requisição e o id presente nos parâmetros da rota.

- Should not be able to update a non existing todo
Para que esse teste passe, você não deve permitir a atualização de um todo que não existe e retornar uma resposta contendo um status 404 e um json no seguinte formato:
{
	error: 'Mensagem do erro'
}

- Should be able to mark a todo as done
Para que esse teste passe, na rota PATCH /todos/:id/done você deve mudar a propriedade donede um todo de false para true, recebendo o id presente nos parâmetros da rota.

- Should not be able to mark a non existing todo as done
Para que esse teste passe, você não deve permitir a mudança da propriedade done de um todo que não existe e retornar uma resposta contendo um status 404 e um json no seguinte formato: 
{
	error: 'Mensagem do erro'
}

- Should be able to delete a todo
Para que esse teste passe, DELETE /todos/:id você deve permitir que um todo seja excluído usando o id passado na rota. O retorno deve ser apenas um status 204 que representa uma resposta sem conteúdo.

- Should not be able to delete a non existing todo
Para que esse teste passe, você não deve permitir excluir um todo que não exista e retornar uma resposta contendo um status 404 e um json no seguinte formato:
{
	error: 'Mensagem do erro'
}