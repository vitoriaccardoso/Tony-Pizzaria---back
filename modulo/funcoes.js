var pizzaria = require('./pizzaria.js')

const getListaClientes = () => {
    let clientes = pizzaria.cliente.clientes;
    let clientesArray = [];

    clientes.forEach((cliente) => { 

        let clienteDados = {
            id: cliente.id,
            nome: cliente.nome,
            email: cliente.email,
            telefone: cliente.telefone 
        };

        clientesArray.push(clienteDados);
    });

    return clientesArray; 
};


const getListaCategoria = () => {

    let categorias = pizzaria.categoria.categorias;
    let categoriasArray = [];

    categorias.forEach((categoria) => { 

        let categoriaDados = {
            
            nome: categoria.nome,
            descricao: categoria.descricao
           
        };

        categoriasArray.push(categoriaDados);
    });

    return categoriasArray; 
   
}

const getListarProdutos = () => {

    let produtos = pizzaria.produto.produtos;
    let produtosArray = [];

   produtos.forEach((produto) => { 

        let produtoDados = {
            
            id: produto.id,
            nome: produto.nome,
            descricao: produto.descricao,
            preco: produto.preco,
           
        };

        produtosArray.push(produtoDados);
    });

    return produtosArray; 
    

}
    const produtosBemAvaliados = () => {
        let produtos = pizzaria.produto.produtos; 
        let produtosArray = [];
    
        produtos.forEach((pizza) => {
            pizza.comentarios.forEach((comentario) => {
                if (comentario.classificacao >= 5 || comentario.classificacao >= 4 ) {
                    let pizzaJSON = {
                        usuario: comentario.usuario,
                        pizza: pizza.nome,
                        id: pizza.id,
                        avaliacao: comentario.classificacao,
                        opiniao: comentario.texto
                    };
    
                    produtosArray.push(pizzaJSON);
                }
            });
        });
    
        let produtosJSON = { produtosArray };
        return produtosJSON;
    };
    

// Example usage
console.log(produtosBemAvaliados());

//console.log(getListaClientes());
// console.log(getListaCategoria());
//console.log(getListarProdutos());





module.exports = {
    getListaClientes,
    getListaCategoria,
    getListarProdutos,
    
}