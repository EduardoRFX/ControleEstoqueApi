## Controle de Estoque API ✅
--- 
-- Api para o controle de estoque, que tem como recursos, gerenciar a entradas e saídas de itens, registar itens, cadastras usuários, cadastrar fornecedores, introduzir um sistema de login para definir acesso a alguns rotas só com autenticação, introdução de tokens, criptografia de senhas de usuários, crud geral de todas as rotas principais.

## Usage 💡

* Instalar as dependencias 
    ```
    npm install
    ```

* Definir as variaveis de ambiente
-- Cria um novo arquivo .env na raiz do projeto e definir as configurações desejadas assim como no env.example

* Configura os dados de conexão do banco de dados
-- Ir em src/database/config/config.js, modificar o dialect o banco usado e as configurações de conexão do projeto com o mesmo


* Subir as migrations para o banco de dados.
    ```
    npx squelize-cli db:migrate 
    ```

* Inicializar a aplicação
    ```
    npm run start
    ```


## Tecnologias Utilizadas 🔬  

* bcrypt - encriptografia de senha 
* body-parser - analisar os corpos das requisições
* dotenv - salvar as variaveis de ambiente
* express - framework para que gerencia rotas, requisições e verbos http
* express-validator - valida dados de entradas da aplicação
* http-errors - instância erros http
* jsonwebtoken - gera tokens e verifica suas autencidades
* mysql2 - drive para a utilização do banco postgres na aplicação
* sequelize - ORM

### Tecnologias recomendadas

* nodemon - utilizada para manter a aplicação rodando
* sequelize-cli - utilitario de linha de comando do sequelize.