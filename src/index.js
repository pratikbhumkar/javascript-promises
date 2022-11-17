function displayData(status) {
  console.log("Status: ", status);
}

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(displayData("success"));
  }, 300);
});

myPromise.then();

const myPromiseFail = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(displayData("failure"));
  }, 300);
});

myPromiseFail.catch();

Promise.any([myPromise, myPromiseFail]).then(() =>
  console.log("Some promise has finished its execution")
);

Promise.allSettled([myPromise, myPromiseFail]).then(() =>
  console.log("All promises have finished their execution")
);

const myPromiseSuccess1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(displayData("First"));
  }, 3000);
});

const myPromiseSuccess2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(displayData("Second"));
  }, 5000);
});

Promise.race([myPromiseSuccess1, myPromiseSuccess2]).then(() =>
  console.log("A promise(First) has finished its execution")
);

Promise.all([myPromiseSuccess1, myPromiseFail])
  .then(() => console.log("Running from Promise.all then"))
  .catch(() =>
    console.log(
      "Running from Promise.all catch because myPromiseFail has been rejected"
    )
  );
