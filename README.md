# API RESTful

## DESCRIÇÃO
Uma API RESTful básica que oferece uma interface para interagir com um banco de dados MongoDB. A API é projetada para fornecer operações CRUD 
(Create, Read, Update, Delete) em recursos específicos por meio de endpoints HTTP, seguindo os princípios e convenções do estilo arquitetural REST.

## PRÉ-REQUISITOS
Node.js e npm instalados na máquina local.
MongoDB instalado e em execução em sua máquina local ou acesso a um banco de dados MongoDB remoto.

## INSTALAÇÃO
Para instalar e configurar a API localmente, siga estas etapas:

Clone este repositório em sua máquina local.
Instale as dependências usando o comando npm install.
Configure as variáveis de ambiente necessárias, como a URL de conexão com o banco de dados MongoDB.
Inicie o servidor usando o comando npm start.

## ENDPOINTS
A API oferece os seguintes endpoints:

GET /get: Retorna uma lista de todos os recursos.
GET /get/:id: Retorna detalhes de um recurso específico com o ID fornecido.
POST /post: Cria um novo recurso com os dados fornecidos.
PUT /put/:id: Atualiza os dados de um recurso existente com o ID fornecido.
DELETE /delete/:id: Exclui um recurso existente com o ID fornecido.
