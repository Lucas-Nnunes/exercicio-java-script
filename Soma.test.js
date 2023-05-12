const {somaEtapa3} = require ('./Soma')

describe('multiplos de 5 e 7menores que 1000', () => {
    it('Multiplos', () => {
        const resultado = somaEtapa3();
    expect(resultado).toBe(156361);
    });
});