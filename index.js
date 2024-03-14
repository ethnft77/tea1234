function calcularJuros(valor, taxa) {
    if (typeof valor !== 'number' || typeof taxa !== 'number') {
      throw new Error('Os valores informados devem ser números');
    }
  
    const juros = valor * taxa / 100;
    const valorFinal = valor + juros;
  
    return valorFinal;
  }
  
  const valorPrincipal = 1000;
  const taxaJuros = 10;
  
  const valorFinal = calcularJuros(valorPrincipal, taxaJuros);
  
  console.log(`Valor final: R$${valorFinal.toFixed(2)}`);