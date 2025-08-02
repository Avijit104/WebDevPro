const getUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data fetched");
    }, 3000);
  });
};
const getBlogData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Blog data fetched");
    }, 2000);
  });
};

async function getData() {
  try {
    console.log("Fetching data ......");
    const [userData, blogData] = await Promise.all([
      getUserData(),
      getBlogData(),
    ]);
    console.log(userData);
    console.log(blogData);
    console.log("Data fetched successfuly");
  } catch (error) {
    console.error("Failed to fetch data", error);
  }
}
getData();
