const altura1 = document.querySelector('#input-altura1');
const largura1 = document.querySelector('#input-largura1');
const janela1 = document.querySelector('#input-janela1');
const porta1 = document.querySelector('#input-porta1');

const altura2 = document.querySelector('#input-altura2');
const largura2 = document.querySelector('#input-largura2');
const janela2 = document.querySelector('#input-janela2');
const porta2 = document.querySelector('#input-porta2');

const altura3 = document.querySelector('#input-altura3');
const largura3 = document.querySelector('#input-largura3');
const janela3 = document.querySelector('#input-janela3');
const porta3 = document.querySelector('#input-porta3');

const altura4 = document.querySelector('#input-altura4');
const largura4 = document.querySelector('#input-largura4');
const janela4 = document.querySelector('#input-janela4');
const porta4 = document.querySelector('#input-porta4');

const buttonSubmit = document.getElementById('btn');
buttonSubmit.addEventListener('click', async (event) => {

event.preventDefault() 

const paredes = [
  { 
    altura: altura1.value,
    largura: largura1.value,
    janela: janela1.value,
    porta: porta1.value
  },
  { 
    altura: altura2.value,
    largura: largura2.value,
    janela: janela2.value,
    porta: porta2.value
  },
  { 
    altura: altura3.value,
    largura: largura3.value,
    janela: janela3.value,
    porta: porta3.value
  },
  { 
    altura: altura4.value,
    largura: largura4.value,
    janela: janela4.value,
    porta: porta4.value
  }
]

});

const getResponse = async () => {
  try {
    const response = await fetch ('http://localhost:8000/');
    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.error("Erro!")
  }
};
getResponse();

