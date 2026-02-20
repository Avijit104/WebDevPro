document.addEventListener("DOMContentLoaded", () => {
  const getWeather = document.getElementById("get-weather");

  function display() {
    console.log("hey i am weather");
  }

  getWeather.addEventListener("click", () => {
    console.log("hey there");
  });
});
