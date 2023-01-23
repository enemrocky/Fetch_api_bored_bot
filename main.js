const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const display = document.querySelector(".display");
      display.style.fontSize = "1.5rem";
      display.style.fontWeight = "500";
      display.style.color = "rgb(56, 4, 4)";
      display.style.textAlign = "center";
      display.textContent = data.activity;
    });
});
