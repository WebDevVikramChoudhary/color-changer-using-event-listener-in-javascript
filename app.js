let btn = document.querySelectorAll(".button");
let body = document.querySelector("body");
// console.log(btn);

btn.forEach(function (button) {
  //   console.log(button);
  button.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === "btn_pink") {
      body.style.backgroundColor = "pink";
    }
    if (e.target.id === "btn_red") {
      body.style.backgroundColor = "red";
    }
    if (e.target.id === "btn_blue") {
      body.style.backgroundColor = "blue";
    }
    if (e.target.id === "btn_white") {
      body.style.backgroundColor = "white";
    }
  });
});
