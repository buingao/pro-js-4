// Promise.reject()
let p1 = new Promise((resolve, reject) => reject());
let p2 = Promise.reject();

let p = Promise.reject(3);
setTimeout(console.log, 0, p); //Promise { <rejected> 3 }
