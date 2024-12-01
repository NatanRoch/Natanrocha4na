##API para Livraria - TypeScript##
##Descrição

Esta é uma API desenvolvida para gerenciar uma livraria. Com ela, os usuários podem cadastrar livros fornecendo os seguintes campos:

Título Subtítulo Imagem (URL) Preço

A API foi criada como parte de um aprendizado em aula e utiliza o padrão MVC (Model-View-Controller) para estruturar o código.

Recursos da API

Listar todos os livros Método: GET Endpoint: /books Descrição: Retorna uma lista com todos os livros cadastrados. Exemplo de Resposta: [ { "id": 1, "name": "Livro Exemplo", "subtitle": "Subtítulo do Livro", "image": "https://exemplo.com/livro.jpg", "price": 59.99 } ]

                   ##2. Cadastrar um novo livro
Método: POST Endpoint: /books Descrição: Adiciona um novo livro ao sistema.

Body: { "name": "Título do Livro", "subtitle": "Subtítulo do Livro", "image": "URL da imagem", "price": 29.99 } Exemplo de Resposta: { "id": 1, "name": "Título do Livro", "subtitle": "Subtítulo do Livro", "image": "https://exemplo.com/livro.jpg", "price": 29.99 }

                              Validações:
name: obrigatório, string não vazia. subtitle: obrigatório, string não vazia. image: obrigatório, deve ser uma URL válida. price: obrigatório, deve ser um número maior que 0.

                          Como Rodar o Projeto
Pré-requisitos

Certifique-se de ter instalado:

Node.js (versão mais recente recomendada) Banco de dados PostgreSQL 2. Configuração

Clone o repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git cd seu-repositorio Instale as dependências:

npm install

                          Configure o banco de dados:
Crie uma tabela chamada books com as colunas id, name, subtitle, image e price. Use o seguinte script SQL como exemplo: CREATE TABLE books ( id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, subtitle VARCHAR(255) NOT NULL, image TEXT NOT NULL, price NUMERIC(10, 2) NOT NULL );

          Configure as variáveis de ambiente no arquivo .env:
DATABASE_URL=postgres://usuario:senha@localhost:5432/nome_do_banco PORT=3000

                        3. Rodando o projeto
Para iniciar o servidor:

npm run dev

A API estará disponível em http://localhost:3000.

Tecnologias Utilizadas Node.js Express PostgreSQL TypeScript Jest (para testes) Contribuindo Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests para melhorar o projeto.
