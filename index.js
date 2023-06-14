function insert(number) {
  var resultado = document.getElementById('resultado').innerHTML;
  
  // Define o limite de caracteres
  var limite = 12;
  
  // Verifica se o número excede o limite de caracteres
  if (resultado.length < limite) {
    document.getElementById('resultado').innerHTML = resultado + number;
  }
}

function clean() {
  document.getElementById('resultado').innerHTML = "";
}

function back() {
  var resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
  var resultado = document.getElementById('resultado').innerHTML;
  if (resultado) {
    var resultadoCalculado = eval(resultado);
    if (resultadoCalculado === Infinity || resultadoCalculado === -Infinity) {
      // Caso a resposta de maior que o limite 12:
      document.getElementById('resultado').innerHTML = "Limite > 12";
    } else {
      document.getElementById('resultado').innerHTML = resultadoCalculado;
    }
  }
}

// O código antigo sem alterações caso precise!

// var numero = document.getElementById('resultado').innerHTML;
//   document.getElementById('resultado').innerHTML = numero + number
// }

// function clean(){
//   document.getElementById('resultado').innerHTML = "";
// }

// function back(){
//   var resultado = document.getElementById('resultado').innerHTML
//   document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
// }

// function calcular(){
//   var resultado = document.getElementById('resultado').innerHTML;
//   if(resultado){
//     document.getElementById('resultado').innerHTML = eval(resultado)
//   }
// }