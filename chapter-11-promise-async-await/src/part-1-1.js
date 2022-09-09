let x = 3;
x = x + 4;
console.log("x:", x);

let y = 4;
// 系统计时器触发函数
// 生成一个入队执行的中断
setTimeout(() => {
  y = y + 4;
  console.log("1s later...");
  console.log("in-y:", y);
}, 1000);

console.log("out-y:", y);
