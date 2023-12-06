const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

app.use((request,response,next) =>{
    response.header('Acess-Control-Allow-Origin','*');
    response.header('Acess-Control-Allow-Methods', 'GET');
    app.use(cors())
    
    next();
})

app.get('/clientes', cors(), async function(request,response,next){
    let cliente = require ('./modulo/funcoes.js');
    let clientes = cliente.getListaClientes();

    response.json(clientes);
    response.status(200);
})

app.get('/categorias', cors(), async function(request,response,next){
    let categoria = require ('./modulo/funcoes.js');
    let categorias = categoria.getListaCategoria();

    response.json(categorias);
    response.status(200);

})

app.get('/produtos', cors(), async function(request,response,next){
    let produto = require ('./modulo/funcoes.js');
    let produtos = produto.getListarProdutos();

    response.json(produtos);
    response.status(200);

})


app.listen('8080', function () {
    console.log('API FUNCIONANDO');
});