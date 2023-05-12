const { calcularMDC } = require('./MDC.js');

describe('teste referente ao MDC', () => {
  it('fazendo MDC ', () => {
    expect(calcularMDC(10, 20)).toBe(10);
    expect(calcularMDC(25, 50)).toBe(25);
    expect(calcularMDC(7, 21)).toBe(7);
  });
});
