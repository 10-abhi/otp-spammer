// worker.ts
import { parentPort, workerData } from 'worker_threads';
import axios from 'axios'; // Assuming you have axios installed

interface WorkerData {
  url: string;
  method: string;
  headers?: { [key: string]: string }; // Optional headers object
  data?: any; // Optional data payload
}

async function sendRequest(workerData: WorkerData): Promise<any> {
  const { url, method, headers, data } = workerData;

  switch (method.toLowerCase()) {
    case 'get':
      return await axios.get(url, { headers });
    case 'post':
      return await axios.post(url, data, { headers });
    default:
      throw new Error('Invalid method');
  }
}

async function worker(): Promise<void> {
  try {
    if (!parentPort) {
      throw new Error('Worker thread not properly initialized');
    }

    const response = await sendRequest(
        workerData
    );
    parentPort.postMessage(response.data);
  } catch (error:any) {
    parentPort?.postMessage(error.message); // Optional chaining for safety
  }
}

worker();