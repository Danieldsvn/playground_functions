// Desafio 10
function techList(tech, name) {
  let techOrdenado = tech.sort();
  let techList1 = new Object();
  let arrayFinal = [];
  if (tech.length === 0) { 
   return 'Vazio!';
  }    
  for (let i = 0; i < techOrdenado.length; i += 1) {
    techList1.tech = techOrdenado[i];
    techList1.name = name;
    arrayFinal.push(techList1);    
    techList1 = new Object; // Débora Serra turma 19 B ajudou na solução de um pequeno problema no for.
  }
  
return arrayFinal;

}


// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11)
  {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < phoneNumber.length; i += 1)
  {
    if(phoneNumber[i] < 0 || phoneNumber[i] > 9) 
    {
      return "não é possível gerar um número de telefone com esses valores";
    }    
  }
  let contNumbers = 0;
  for (let i = 0; i < phoneNumber.length; i += 1) 
  {
    contNumbers = 0;    
    for (let j = 0; j < phoneNumber.length; j += 1)
    {
      if (phoneNumber[i] == phoneNumber[j])
      {
        contNumbers += 1;
      }
      if (contNumbers >= 3)
      {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }
  return '(' + phoneNumber[0] + phoneNumber[1] + ')' + ' ' + phoneNumber[2] + phoneNumber[3] + phoneNumber[4] + phoneNumber[5] + phoneNumber[6] + '-' + phoneNumber[7] + phoneNumber[8] + phoneNumber[9] + phoneNumber[10];
  
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

