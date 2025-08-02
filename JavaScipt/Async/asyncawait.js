function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let status = false;
      if (status) {
        resolve({ name: "avijit", surname: "ash", roll: "217" });
      } else {
        reject("failed to fetch data");
      }
    }, 3000);
  });
}

async function getData() {
  try {
    console.log("Fetching Data .......");
    const data = await fetchData();
    console.log(data);
    console.log("Data fetched successfully");
  } catch (error) {
    console.log("Error", error);
  }
}
getData();
