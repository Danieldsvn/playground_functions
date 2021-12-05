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

// console.log(techList(["React", "Javascript", "Node"], 'Daniel'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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

