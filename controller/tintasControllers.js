
const ERROR = 'Esse formato não é possível';

const tintasController = (req, res) => {
  const paredes = req.body;

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

  if (areaTotal <= lata05) return 0.5;

  if (areaTotal <= lata25) return 2.5;

  if (areaTotal <= lata36) return 3.6;
    
  if (areaTotal <= lata18) return 18;

  if (areaTotal > 90) return 'mais que 18';
}

module.exports = tintasController;
