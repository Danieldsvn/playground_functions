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
  array = texto.split(' ');  
    return array; 
  }  


// Desafio 4
function concatName(string) {
   let array2 = '';
   array2 = string[string.length - 1];  
   array2 = array2 + ', ' + string[0];
   return array2;
  
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

// Desafio 9 // --- ajuda de João Paulo Turma 19 B para achar o método śplit e join. ---
function encode(strToEncode) {  
  let StringToArray = strToEncode.split(''); 
  for (i = 0; i < strToEncode.length; i += 1){    
    if (StringToArray[i] === 'a') {
      StringToArray[i] = '1';
    }
    if (StringToArray[i] === 'e') {
      StringToArray[i] = '2';
    }
    if (StringToArray[i] === 'i') {
      StringToArray[i] = '3';
    }
    if (StringToArray[i] === 'o') {
      StringToArray[i] = '4';
    }
    if (StringToArray[i] === 'u') {
      StringToArray[i] = '5';
    }
  }  
  let strEncoded = StringToArray.join('');
  return strEncoded;
}
strToEncode = 'artur bonitão';
console.log(encode(strToEncode));

function decode(strToEncode) {
  let StringToArray = strToEncode.split('');
  for (i = 0; i < strToEncode.length; i += 1){    
    if (StringToArray[i] === '1') {
      StringToArray[i] = 'a';
    }
    if (StringToArray[i] === '2') {
      StringToArray[i] = 'e';
    }
    if (StringToArray[i] === '3') {
      StringToArray[i] = 'i';
    }
    if (StringToArray[i] === '4') {
      StringToArray[i] = 'o';
    }
    if (StringToArray[i] === '5') {
      StringToArray[i] = 'u';
    }
  }  
  let strEncoded = StringToArray.join('');
  return strEncoded;  
}
strToEncode = '1rt5r b4n3tã4';
console.log(decode(strToEncode));


let string = 'arroz feijão';
 let stringArreizada = string.split('');
console.log(stringArreizada);

stringArreizada[2] = '2';
console.log(stringArreizada);

