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