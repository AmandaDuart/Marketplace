
const routesProviders = (app)=>{
    app.get('/providers', (req, resp)=>{
        resp.send('rodando')
    });

    app.get('/providers/:idprovider', (req, resp)=>{ //passando pelo uri
        console.log(req.params.idprovider)
        resp.send('Requisição feita com sucesso!');
    });
    
};

module.exports = routesProviders; /* exportou a função para usar no servidor */