new Promise(() => setTimeout(console.log, 0, "executor"));

setTimeout(console.log, 0, "promise initialized");

// executor
// promise initialized

let p = new Promise((resolve, reject) => setTimeout(resolve, 1000));
setTimeout(console.log, 0, p); // Promise { <pending> }

let pp = new Promise((resolve, reject) => {
  resolve(1);
  reject(); // 静默失败，状态不可更改，一次性
});

setTimeout(console.log, 0, pp); // Promise { 1 }
