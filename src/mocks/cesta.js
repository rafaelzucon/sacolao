
import logo from '../../assets/logo.png'

import tomate from '../../assets/frutas/limao.png';
import brocolis from '../../assets/frutas/pera.png';
import batata from '../../assets/frutas/abacaxi.png';
import pepino from '../../assets/frutas/tomate.png';
import abobora from '../../assets/frutas/azeitona.png';

const cesta = {
    topo: {
        titulo: "Ervas frescas",
    },
    detalhes: {
        nome: "Cesta de Plantinhas",
        logoFazenda: logo,
        nomeFazenda: "Native Farm",
        descricao: "Purple Haze, lemon haze e varios produtos especialmente selecionados ",
        preco: "A partir de R$ 65,00 / Grama",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
              nome: "lemon haze",
              imagem: tomate,
            },
            {
              nome: "Afghani",
              imagem: brocolis,
            },
            {
              nome: "Jack Herer",
              imagem: batata,
            },
            {
              nome: "Sour Diesel",
              imagem: pepino,
            },
            {
              nome: "Purple Haze",
              imagem: abobora,
            }
          ]
    }
}

export default cesta;