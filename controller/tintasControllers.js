const fs = require('fs');

const lerTintas = () => {
  const data = fs.readFileSync('./tintas.json', 'utf-8');
  return JSON.parse(data);
};

const ERROR = 'Esse formato não é possível';

const tintasController = (req, res) => {
  const paredes = lerTintas();

  let areaTotal = 0;
  for (const parede of paredes) {
    areaTotal += calcularParede(parede.altura, parede.largura, parede.janela, parede.porta)
  }

  const quantidadeTinta = calcularQtdTinta(areaTotal);

  return res.status(200).json(quantidadeTinta);
};

const calcularParede = (altura, largura, janela, porta) => {
  const tamParede = altura * largura;
  const janelas = 2.4 * janela;
  const portas = 1.52 * porta;
  const janPor = janelas + portas;
  const tamTotal = tamParede - janPor;

  if (tamParede < 1 || tamParede > 15) throw ERROR;
  if (porta > 0 && altura < 2.20) throw ERROR;
  if ((tamParede / 2) < janPor) throw ERROR;
  return tamTotal;
};

const calcularQtdTinta = (areaTotal) => {
  const lata05 = 2.5;
  const lata25 = 12.5;
  const lata36 = 18;
  const lata18 = 90;

  if (areaTotal <= lata05) { 
    return console.log(`Para pintar ${areaTotal}m² você precisará de uma lata de tinta de 0,5L`);;
  }
  if (areaTotal <= lata25) {
   return console.log(`Para pintar ${areaTotal}m² você precisará de uma lata de tinta de 2,5L`);;
  
  }
  if (areaTotal <= lata36) {
    return console.log(`Para pintar ${areaTotal}m² você precisará de uma lata de tinta de 3,6L`);
    
  }
  if (areaTotal <= lata18) {
    return console.log(`Para pintar ${areaTotal}m² você precisará de uma lata de tinta de 18L`)
  }
  if (areaTotal> 90) {
    console.log(`Para pintar ${areaTotal}m² você precisará de mais de 18L de tinta`);
  };
}

module.exports = tintasController;
