"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// worker.ts
const worker_threads_1 = require("worker_threads");
const axios_1 = __importDefault(require("axios")); // Assuming you have axios installed
async function sendRequest(workerData) {
    const { url, method, headers, data } = workerData;
    switch (method.toLowerCase()) {
        case 'get':
            return await axios_1.default.get(url, { headers });
        case 'post':
            return await axios_1.default.post(url, data, { headers });
        default:
            throw new Error('Invalid method');
    }
}
async function worker() {
    try {
        if (!worker_threads_1.parentPort) {
            throw new Error('Worker thread not properly initialized');
        }
        const response = await sendRequest(worker_threads_1.workerData);
        worker_threads_1.parentPort.postMessage(response.data);
    }
    catch (error) {
        worker_threads_1.parentPort === null || worker_threads_1.parentPort === void 0 ? void 0 : worker_threads_1.parentPort.postMessage(error.message); // Optional chaining for safety
    }
}
worker();
