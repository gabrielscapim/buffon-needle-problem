// Probabilidade de cruzar = 2 * l/pi * d
// pi = 2 * l / p * d

// Para que cruze
// L * sen(w) * 0.5 >= x, sendo x = distância entre o ponto central do objeto à paralela mais próxima
// L * sen(w) * 0.5 - x >= 0

const needleBuffon = (needleWidth: number, linesDistance: number): number | string => {
  if (needleWidth * 2 !== linesDistance) return "A proporção entre a distância entre as linhas e o comprimento da agulha deve ser igual a 2."

  const needlesPosition: number[] = [];
  const needlesAngles: number[] = [];
  const monteCarlo: boolean[] = [];
  const RUN_TIMES: number = 1000000;

  for (let index = 0; index < RUN_TIMES; index += 1) {
    needlesPosition.push(Math.random() * (linesDistance / 2)); // A distância entre o centro da agulha e a linha mais próxima está entre 0 e l/2
    needlesAngles.push(Math.random() * (Math.PI / 2)); // O ângulo da agulha está entre 0 e 90 graus em relação a linha
    monteCarlo.push(needleWidth * Math.sin(needlesAngles[index]) * 0.5 - needlesPosition[index] >= 0);
  }
    
  const probability = monteCarlo.filter((element) => element).length / monteCarlo.length;
  const hits = RUN_TIMES * probability;

  return hits;
}

console.log(needleBuffon(20, 40))