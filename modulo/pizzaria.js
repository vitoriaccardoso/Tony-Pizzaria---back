var cliente = {
    
    clientes: 
     [
        {
              id:'1',
              nome: 'Vitória Cardoso',
              email: 'vitoria@gmail.com',
              telefone:'11 97347-3571',
              senha:'vivis123',
              endereco: [
                {
                    logradouro: 'Avenida São João, 200',
                    bairro:'Vila Joana',
                    cidade:'Jundiaí',
                    estado: 'SP',
                    cep: '13216000'    
            }
              ]

        },
        {     
              id:'2',
              nome: 'Guilherme Abel',
              email: 'guigui@gmail.com',
              telefone: '11 96547-8231',
              senha:'guigui456',
              endereco: [
                {
                    logradouro: 'Avenida Desembargador Moreira',
                    bairro:'Aldeota',
                    cidade:'Fortaleza',
                    estado: '60170001',
                    cep: 'CE'    
            }
              ]

        },
        {
              id:'3',
              nome: 'Luana Santos',
              email: 'luana987',
              telefone: '11 95236-8634',
              senha: 'murilo234',
              endereco: [
                {
                    logradouro: 'Avenida Esbertalina Barbosa Damiani',
                    bairro:'Guriri Norte',
                    cidade:'São Mateus',
                    estado:'ES',
                    cep: '29946490'    
            }
              ]
         }
     ]
 }; 

 var categoria = {
    
    categorias:
     [
        {
            nome: 'pizzas',
            descricao: 'menu de pizzas em geral (salgada,doces,brotinhos...)'
        },
        {
            nome: 'bebidas',
            descricao: 'menu de bebidas em geral (sucos naturais, refrigerantes,cervejas...)'
        },
        {
            nome: 'frutas',
            descricao: 'menu de frutas em geral (banana,melancia,kiwi...)'
        },
        {
            nome: 'sobremesas',
            descricao: 'menu de sobremesas em geral (sorvetes, chocolates, brownie...)'
        }
     ]
 };

 var produto = {

      produtos:
      [
        {
              id: '1',
              nome: 'Pizza de calabresa com queijo',
              descricao: 'Pizza preparada no forno á lenha, contendo massa fininha preparada á moda Italiana, contendo molho de tomate, queijo e calabresa.',
              preco: '16,00',
              comentarios: [
                {
                    texto: 'Amei a pizza!!',
                    classificacao:'5',
                    usuario:"Vitória Cardoso",
                }
              ]
        },
        {
            id:'2',
            nome: 'Pizza de peperoni com queijo',
            descricao: 'Pizza preparada no forno á lenha, contendo massa fininha preparada á moda Italiana, contendo molho de tomate, queijo e peperoni.',
            preco: '19,00',
            comentarios: [
                {
                    texto: "Pode melhorar",
                    classificacao:'3',
                    usuario:'Vinicius Guimarães',
            }
              ]
        },
        {
            id:'3',
            nome: 'Pizza de peperoni com queijo e tomate',
            descricao: 'Pizza preparada no forno á lenha, contendo massa fininha preparada á moda Italiana, contendo molho de tomate, queijo e tomate.',
            preco: '16,00',
            comentarios: [
                {
                    texto: 'Não gostei',
                    classificacao:'0',
                    usuario:'Mariana Alves'
            }
              ]
        },
        {
            id:'4',
            nome: 'Pizza brotinho com queijo e tomate',
            descricao:'Pizza preparada no forno á lenha, contendo massa fininha preparada á moda Italiana, contendo molho de tomate, queijo e tomate.',
            preco: '12,00',
            comentarios: [
                {
                    texto: 'Achei perfeita, mas falta algo!!',
                    classificacao:'4',
                    usuario:'Gostei bastante, mas demorou entregar.'
            }
              ]
        },
        {
            id:'5',
            nome: 'Pizza de Frango com Catupiry',
            descricao:'Pizza preparada no forno á lenha, contendo massa fininha preparada á moda Italiana, contendo molho de tomate, frango e catupiry *Possui borda extra*',
            preco: '19,00',
            comentarios: [
                {
                    texto: 'É.....',
                    classificacao:'3',
                    usuario:'Pedro Pedraga',
             
            }
              ]

        },
        {
            id:'6',
            nome: 'Coca - cola 2L',
            descricao: 'Refrigerante Coca-Cola sabor original contém água gaseificada, açúcar, extrato de noz de cola, cafeína, corante caramelo IV, acidulante ácido fosfórico e aroma natural.',
            preco: '14,99',
            comentarios: [
                {
                    texto: 'Péssimo atendimento',
                    classificacao:'1',
                    usuario:'Bianca Soares'
            }
              ]
        },
        {
            id:'7',
            nome: 'Cerveja Heniken',
            descricao:'Cerveja lager Puro Malte, refrescante , produzida com ingredientes 100% naturais: água, malte e lúpulo',
            preco: '17,99',
            comentarios: [
                {
                    texto: 'Entrega rápida',
                    classificacao:'5',
                    usuario:'Guilherme Abel'
            }
              ]
        
        }
    ] 
 }

 module.exports = {
    cliente,
    categoria,
    produto
 }


