// 静态方法
let p1 = new Promise((resolve, reject) => resolve());

let p2 = Promise.resolve();

console.log("p2:", p2); // Promise { undefined }

setTimeout(console.log, 0, Promise.resolve(1)); // Promise { 1 }

setTimeout(console.log, 0, Promise.resolve(4, 5, 6)); // Promise { 4 }

// 幂等
let p = Promise.resolve(7);
setTimeout(console.log, 0, p === Promise.resolve(p)); // true

setTimeout(console.log, 0, p === Promise.resolve(Promise.resolve(p))); // true

let pp = new Promise(() => {});
setTimeout(console.log, 0, pp); // Promise { <pending> }
setTimeout(console.log, 0, Promise.resolve(pp)); //Promise { <pending> }
setTimeout(console.log, 0, pp === Promise.resolve(pp)); // true

let ppp = Promise.resolve(new Error("foo"));
setTimeout(console.log, 0, ppp); // Promise {Error: foo}
