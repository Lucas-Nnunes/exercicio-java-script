const Etapa2 = [150, 90, 20, 70, 200];
const { minIndex, maxIndex } = MenorEMaior(Etapa2);
console.log(`O menor valor é ${Etapa2[minIndex]} e o maior valor é ${Etapa2[maxIndex]}`);

function MenorEMaior(arr) {
  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }

  return { minIndex, maxIndex };
}
module.exports = {MenorEMaior}






