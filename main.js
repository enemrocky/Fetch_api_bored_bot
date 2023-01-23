const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const display = (document.querySelector(".display").textContent =
        data.activity);
    });
});
