// Aninhamento e operadores lógicos

/*let idadeDependente = 15;

if (idadeDependente >= 13) {
    if (idadeDependente >= 18) {
        console.log('Seu dependente já pode ter um cartão de crédito prórpio');
    } else { 
        console.log('Seu dependente já pode ter um cartão de crédito vinulado ao seu.');
    }
} else {
    console.log('Consulte outras possibilidades do Labank');
};

if (idadeDependente >= 13 && idadeDependente <= 17) {
    console.log('Seu dependente já pode ter um cartão de crédito vinulado ao seu.');
} else {
    console.log('Consulte outras possibilidades do Labank');
};

// ifternario

idadeDependente === 13 ? console.log('A idade do dependente é 13, ele já pode ter um cartão vinculado ao seu.') : console.log('Consulte outras possibilidades do Labank');

// switch-case

let cartao = Number(prompt('Solicitação de carão de crédito: \n 1- Fácil \n 2- Black \n 3- Platinum \n 4- Master Gold'));

switch (cartao){
    case 1: 
        alert('Cartão Fácil Adiquirido')
    break;
    case 2: 
        alert('Cartão Black Adiquirido')
    break;
    case 3:
        alert('Cartão Platinum Adiquirido')
    break;
    case 4:
        alert('Cartão Master Gold Adiquirido')
    break;
    default:
        alert('Escolha uma das opções disponíveis')
};*/

// Pra guardar na cabeça: (Exercício)

let numeroUsuario = Number(prompt("Informe um número:"));

// Verificar se é divísivel por 2 e por 3 com ifs aninhados:

if (numeroUsuario % 2 === 0) {
  if (numeroUsuario % 3 === 0) {
    console.log("O número é divisível por 2 e por 3.");
  } else {
    console.log("O número é divisível por 2 porém não é divisível por 3.");
  }
} else if (numeroUsuario % 3 === 0) {
  console.log("O número é divisível por 3 porém não é divisivel por 2");
} else {
  console.log("O número não é divisível nem por 2 e nem por 3");
}

// Verificar se é divísivel por 2 e por 3 com operações lógicas:

if (numeroUsuario % 2 === 0 && numeroUsuario % 3 === 0) {
  console.log("O número é divisível por 2 e por 3");
} else {
  console.log("O número não é divisível por 2 e por 3");
}

// Usando ifternario

numeroUsuario === 30
  ? console.log("UFA ACERTEI")
  : console.log("Não foi dessa vez :(");

// Usando switch case:

switch (numeroUsuario) {
  case 6:
    console.log('O número escolhido pode ser calçado "6".');
    break;
  case 12:
    console.log('Normalmente se compram ovos nessa quantidade "12".');
    break;
  case 18:
    console.log("Você escolheu o 18.");
    break;
  case 24:
    console.log('Esse número já foi polêmico "24".');
    break;
  case 30:
    console.log('Metade de 60 e o dobro de 15, você escolheu "30".');
    break;
  default:
    console.log("O número é maior que 30 ou menor que 6.");
}
