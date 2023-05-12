const { MenorEMaior } = require('./Etapa2')
const Etapa2 = require ('./Etapa2')

describe('Descobrindo índicies', () => {
    it('índicie menor e maior', () => {
        const result = MenorEMaior(150, 90, 20, 70, 200);
        const{ minIndex, maxIndex } = MenorEMaior(Etapa2);
        expect(Etapa2[minIndex]).toEqual(20);
        expect(Etapa2[maxIndex]).toEqual(200);
    });
});