const Etapa2 = [10, 20, 8, 40, 33];
const {minIndex, maxIndex} = MenorEMaior(Etapa2);
console.log(`O menor valor ${minIndex} e o maior valor ${maxIndex}`);

function MenorEMaior(arr) {
  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if ([i] < [minIndex]) {
      minIndex = i;
    }
    if ([i] > [maxIndex]) {
      maxIndex = i;
    }
  }

  return {minIndex, maxIndex};
}






