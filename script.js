const revealButton = document.querySelector("#open-btn");
console.log(revealButton);
const revealContent = document.querySelector(".modal-container");
console.log(revealContent);

const appear = () => {
  if (revealContent.classList.contains("modal-container")) {
    revealContent.classList.remove("modal-container");
  } else {
    revealContent.classList.add("modal-container");
  }
};
revealButton.addEventListener("click", appear);
