# Lista de Tarefas App

Bem-vindo ao repositório da aplicação de Lista de Tarefas! Esta aplicação foi desenvolvida utilizando JavaScript (Node.js) para o back-end, ORM Sequelize para interação com o banco de dados SQLite, Express.js para roteamento, e tecnologias web padrão como HTML e CSS para o front-end. A aplicação possui rotas CRUD para usuários, categorias e tarefas, proporcionando uma experiência completa de gerenciamento de tarefas.

 ## Tecnologias Utilizadas:

- **JavaScript (Node.js)**
- **ORM (Sequelize)**
- **Banco de Dados (SQLite)**
- **Roteamento (Express.js)**
- **Nodemon**
- **HTML e CSS**

## Funcionalidades

- Autenticação de usuários: Login e Cadastro.
- Rotas CRUD para usuários, categorias e tarefas.
- Fluxo: Usuário loga ou se cadastra, é redirecionado para a página de tarefas. Se não tiver tarefas, pode adicionar categorias e respectivas tarefas.
- Marcar ou desmarcar tarefas ao longo do tempo.
- Deletar tarefas do banco.

## Como Usar

1. Clone este repositório.
2. Instale as dependências: `npm install nodemon`, `npm intall sqlite`, `npm install sequelize`, `npm install sequelize-cli`, `npm install express`.
3. Execute o servidor: `npm run dev`.

## Melhorias Futuras

- Adicionar a possibilidade de exclusão da conta do usuário.
- Melhorar o estilo da página.
- Implementar um status para as tarefas.
- Aperfeiçoar as consultas ao banco de dados.
- Implementar autenticação segura.
- Realizar deploy.

## Contribuição

Sinta-se à vontade para contribuir com melhorias. Basta seguir estes passos:

1. Faça um fork do projeto.
2. Crie uma branch para suas alterações: `git checkout -b feature/nova-feature`.
3. Faça commit das suas alterações: `git commit -m 'Adiciona nova feature'`.
4. Envie para o seu fork: `git push origin feature/nova-feature`.
5. Abra um pull request.
