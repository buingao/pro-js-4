function double(value, success, failure) {
  let start = 0;
  let end = 0;
  setTimeout(() => {
    try {
      if (typeof value !== "number") {
        throw "Must provide number as first argument";
      }
      end = Date.now();
      console.log("diff:", end - start, " ms");
      success(2 * value);
    } catch (error) {
      failure(error);
    }
  }, 1000);
  start = Date.now();
  console.log(start);
}

const successCB = (x) => console.log(`Success: ${x}`);

const failureCB = (x) => console.log(`Failure: ${x}`);

double(3, successCB, failureCB);

double("b", successCB, failureCB);
