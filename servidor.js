const express = require('express'); /*Importação da bliblioteca express*/
const routesProviders = require('./src/app/routes/rotasfornecedor');
const app = express(); /*Adicionando a função de chamada express*/

routesProviders(app);
app.listen(3000, () => 
    console.log('servidor rodando!')
)


