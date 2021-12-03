// Desafio 1
function compareTrue(e1, e2) {
  if (e1 === true && e2 === true){
    return true;
  }  
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(texto) {
    let word = ''; // armazena cada palavra temporariamente
    let words = []; // armazena as palavras que foram separadas do espaço vazio    
  // Vamos procurar um espaço vazio no parametro inserido
    let blank = ' '; // armazena espaço vazio    
    
    // let textoRestanteAux = '';
  // vamos percorrer todos os elementos do texto restante
  for (let i = 0; i < texto.length - 1; i += 1) {
    // encontrando o elemento vazio
    if ( texto[i] == blank) {             
        for (let j = 0; j < i; j += 1) { // armazenando a palavra antes do espaço vazio
          word = word + texto[j];    
        }        
        words.push(word);
        word = '';   
        // // armazenando texto restante
        // for (let j = i + 1; j < texto.length; j += 1) {
        //   textoRestanteAux = textoRestanteAux + textoRestante[j];
        // } 
        // textoRestante = textoRestanteAux;
        // words.push(textoRestante);
        // textoRestanteAux = '';
    // }    
  } 
  return words; 
 }
}
console.log(splitSentence("ping pong"));

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  score = (wins * 3) + (ties * 1);
  return score;
  
}

// Desafio 6
function highestCount(array) {
  maiorNumero = array[0];
  contadorMaiorNumero = 0;
  for (let i = 0; i < array.length; i += 1 ) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (maiorNumero == array[i]) {
      contadorMaiorNumero += 1;
    }
  }
  
  return contadorMaiorNumero;

}
console.log(highestCount([3,3,1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = cat1 - mouse;
  let cat2Distance = cat2 - mouse;
  if (cat1Distance === cat2Distance || -cat1Distance === cat2Distance || cat1Distance === -cat2Distance)  {
    return "os gatos trombam e o rato foge";
  }
  if (cat1Distance < cat2Distance ) {
    return "cat1";
  }
  if (cat2Distance < cat1Distance ) {
    return "cat2";
  }
}
console.log(catAndMouse(2, 3, 4));

// Desafio 8
function fizzBuzz(array) {
  fizzBuzzArray = [];
  for (i = 0; i < array.length; i += 1) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      fizzBuzzArray.push('fizzBuzz');
    }
    else if (array[i] % 3 == 0) {
      fizzBuzzArray.push('fizz');    
    }
    else if (array[i] % 5 == 0) {
      fizzBuzzArray.push('buzz');
    }  
    else {
      fizzBuzzArray.push('bug!');
    }      
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(strToEncode) {  
  for (i = 0; i < strToEncode.length; i += 1){
    if (strToEncode[i] === 'a') {
      strToEncode[i] = '1';
    }
    if (strToEncode[i] === 'e') {
      strToEncode[i] = '2';
    }
    if (strToEncode[i] === 'i') {
      strToEncode[i] = '3';
    }
    if (strToEncode[i] === 'o') {
      strToEncode[i] = '4';
    }
    if (strToEncode[i] === 'u') {
      strToEncode[i] = '5';
    }
  }
  let strEncoded = strToEncode;
  return strEncoded;
}
console.log(encode('artur'));

function decode(strToEncode) {
  for (i = 0; i < strToEncode.length; i += 1){
    if (strToEncode[i] == '1') {
      strToEncode[i] = 'a';
    }
    if (strToEncode[i] == '2') {
      strToEncode[i] = 'e';
    }
    if (strToEncode[i] == '3') {
      strToEncode[i] = 'i';
    }
    if (strToEncode[i] == '4') {
      strToEncode[i] = 'o';
    }
    if (strToEncode[i] == '5') {
      strToEncode[i] = 'u';
    }
  }
  return strToEncode;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
