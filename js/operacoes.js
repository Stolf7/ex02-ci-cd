// Black ops

function soma(a, b) {
    return a + b;
  }
  
  function subtrai(a, b) {
    return a - b;
  }
  
  function multiplica(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error('Divisão por zero');
    }
    return a / b;
  }
  
  // Expor as funções para testes (ambiente CommonJS/Jest)
  if (typeof module !== 'undefined') {
    module.exports = { soma, subtrai, multiplica, divide };
  }