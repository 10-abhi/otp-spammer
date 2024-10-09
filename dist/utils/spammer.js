"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spammer = Spammer;
const smsApiData = __importStar(require("./smsApi.json"));
const worker_threads_1 = require("worker_threads");
const path_1 = __importDefault(require("path"));
async function Spammer(target) {
    const workers = [];
    for (let key in smsApiData) {
        if (key === "default")
            continue;
        const apiData = smsApiData[key];
        const url = apiData.url.replace("${target}", JSON.stringify(target));
        const method = apiData.method;
        const headers = JSON.parse(JSON.stringify(apiData.headers).replace("${target}", target.toString()));
        const data = JSON.parse(JSON.stringify(apiData.data).replace("${target}", target.toString()));
        const worker = new worker_threads_1.Worker(path_1.default.resolve(__dirname, './worker.js'), {
            workerData: {
                url, method, headers, data
            }
        });
        workers.push(worker);
    }
    await Promise.all(workers.map((worker) => new Promise((resolve, reject) => {
        worker.on("message", resolve);
        worker.on("error", reject);
        worker.on("exit", (code) => {
            if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
        });
    })));
}
