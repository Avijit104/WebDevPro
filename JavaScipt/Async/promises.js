const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = false;
      if (success) {
        resolve("The promise has been resolved");
      } else {
        reject("The promise has been rejected");
      }
    }, 3000);
  });
};

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
