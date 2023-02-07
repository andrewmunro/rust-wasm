import { add } from "../pkg/rust_wasm_bg.wasm";

const x = add(1,4);

console.log(x);