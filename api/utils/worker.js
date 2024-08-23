const {parentPort, workerData} = require("worker_threads")
const axios = require("axios")

async function sendRequest(
  url,
  method,
  headers,
  data
) {
  switch (method.toLowerCase()) {
    case "get":
      return await axios.get(url, {
        headers
      })
    case "post":
      return await axios.post(url, data, {
        headers
      })
    default:
      throw error("invalid method")
  }
}

async function worker() {
  try {
    const response = await sendRequest(
      workerData.url,
      workerData.method,
      workerData.headers,
      workerData.data
    );
    parentPort?.postMessage(response.data)
  } catch (error) {
    parentPort?.postMessage(error.message)
  }
}

worker();