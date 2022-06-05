import { Worker } from 'worker_threads';
import { cpus } from 'os';

export const performCalculations = async () => {
    const num = 10;
    const NumCpuCores = cpus().length;

  let promisesArray = [];
  let resultsArray = [];

  for (let i = 0; i < NumCpuCores; i++){
    promisesArray[i] = new Promise((resolve, reject) => {
      const worker = new Worker('./worker.js');
      const arg = num + i;
      worker.postMessage(arg);
      worker.on('message', (msg) => {
        resultsArr.push(msg);

        resolve();

        });
      });
  }

  await Promise.all(promisesArray);

  console.log(resultsArray);
};
   
performCalculations();