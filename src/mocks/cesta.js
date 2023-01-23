
import logo from '../../assets/logo.png'

import tomate from '../../assets/frutas/limao.png';
import brocolis from '../../assets/frutas/pera.png';
import batata from '../../assets/frutas/abacaxi.png';
import pepino from '../../assets/frutas/tomate.png';
import abobora from '../../assets/frutas/azeitona.png';

const cesta = {
    topo: {
        titulo: "Frescas",
    },
    detalhes: {
        nome: "Cesta de Frutas",
        logoFazenda: logo,
        nomeFazenda: "Native Farm",
        descricao: "Produtos especialmente selecionados ",
        preco: "A partir de R$ 5,00 / Kg",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
              nome: "Jaca",
              imagem: tomate,
            },
            {
              nome: "Uva",
              imagem: brocolis,
            },
            {
              nome: "morango",
              imagem: batata,
            },
            {
              nome: "manga",
              imagem: pepino,
            },
            {
              nome: "banana",
              imagem: abobora,
            }
          ]
    }
}

export default cesta;