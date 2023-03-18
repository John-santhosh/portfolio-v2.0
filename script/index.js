let displayError = document.getElementById("error");

displayError.addEventListener("click", function (e) {
  e.preventDefault();
  setTimeout(() => {
    alert("Sorry! something went wrong");
  }, 1500);
});

const anime = document.querySelector(".find-more div img");

anime.addEventListener("mouseenter", () => {
  console.log(123);
  anime.style.animation = "fadeInOut 0.5s linear";
  // setTimeout((anime.style.animation = ""), 5000);
  setTimeout(() => {
    anime.style.animation = "";
  }, 1500);
});
