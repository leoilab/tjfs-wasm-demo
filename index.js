import "@tensorflow/tfjs-backend-wasm";
import * as tf from "@tensorflow/tfjs";
import * as utils from "./utils";
import { debounce } from "lodash-es";

async function main(backend) {
  try {
    utils.setText("totalTime1", "...");
    utils.setText("totalTime2", "...");
    await tf.setBackend(backend);

    let model = await tf.loadGraphModel(
      "https://tfhub.dev/google/imagenet/mobilenet_v2_100_224/classification/2",
      { fromTFHub: true }
    );
    const imgElement = document.querySelector("img");
    const startTime1 = performance.now();

    let img = tf.browser
      .fromPixels(imgElement)
      .resizeBilinear([224, 224])
      .expandDims(0)
      .toFloat();

    let startTime2 = performance.now();

    // ⏱
    const logits = model.predict(img);

    const totalTime1 = performance.now() - startTime1;
    const totalTime2 = performance.now() - startTime2;

    utils.setText("totalTime1", `${Math.floor(totalTime1)} ms`);
    utils.setText("totalTime2", `${Math.floor(totalTime2)} ms`);
  } catch {
    utils.setText("totalTime1", "");
    utils.setText("totalTime2", "");
  }
}

const debouncedMain = debounce(main, 300);

document.getElementById("backend").addEventListener(
  "input",
  (event) => {
    debouncedMain(event.target.innerText);
  },
  false
);

debouncedMain(document.getElementById("backend").textContent);
