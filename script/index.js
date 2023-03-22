const displayError = document.querySelector(".error");
const anime = document.querySelector(".find-more div img");
const contactForm = document.forms.contactForm;

// form event
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formDatas = new FormData(contactForm);
  let a = [...formDatas.keys()];
  a.forEach((each) => {
    let inputs = document.querySelector(`[name='${each}']`);
    // let { value } = inputs;
    console.log(inputs);
    inputs.value = "";
  });

  // displaying error
  setTimeout(() => {
    displayError.classList.add("unHide");
  }, 1500);
  setTimeout(() => {
    displayError.classList.remove("unHide");
  }, 3000);
});

// left-right animation
anime.addEventListener("mouseenter", () => {
  anime.style.animation = "fadeInOut 0.5s linear";
  setTimeout(() => {
    anime.style.animation = "";
  }, 1500);
});
