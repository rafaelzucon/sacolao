
import logo from '../../assets/logo.png'

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const cesta = {
    topo: {
        titulo: "Ervas frescas",
    },
    detalhes: {
        nome: "Cesta de Plantinhas",
        logoFazenda: logo,
        nomeFazenda: "Native Farm",
        descricao: "75k, lemon haze e varios produtos especialmente selecionados ",
        preco: "R$ 65,00 / Grama",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
              nome: "Tomate",
              imagem: tomate,
            },
            {
              nome: "Brócolis",
              imagem: brocolis,
            },
            {
              nome: "Batata",
              imagem: batata,
            },
            {
              nome: "Pepino",
              imagem: pepino,
            },
            {
              nome: "Abóbora",
              imagem: abobora,
            }
          ]
    }
}

export default cesta;