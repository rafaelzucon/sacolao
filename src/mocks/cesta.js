
import logo from '../../assets/logo.png'

import tomate from '../../assets/frutas/lemonhaze.png';
import brocolis from '../../assets/frutas/Afghani.png';
import batata from '../../assets/frutas/Jackherer.png';
import pepino from '../../assets/frutas/SourDiesel.png';
import abobora from '../../assets/frutas/PurpleHaze.png';

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