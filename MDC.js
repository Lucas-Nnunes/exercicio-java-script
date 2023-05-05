function calcularMDC(a, b) {
    if (b == 0) {
      return a;
    } else {
      return calcularMDC(b, a % b);
    }
  }
  
  console.log(calcularMDC(10, 20));
  