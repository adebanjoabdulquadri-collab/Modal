// Variables
const revealButton = document.querySelector("#open-btn");
const revealContent = document.querySelector(".modal-container");
const closeBtn = document.querySelector("#close-btn");

const appear = () => {
  if (revealContent.classList.contains("modal-container")) {
    revealContent.classList.remove("modal-container");
    revealButton.innerText = "Click to Close!";
  } else {
    revealContent.classList.add("modal-container");
    revealButton.innerText = "Click to Open!";
  }
};

revealButton.addEventListener("click", appear);

// Function to close with X
const closeModal = () => {
  revealContent.classList.add("modal-container");
  revealButton.innerText = "Click to Open!";
};

closeBtn.addEventListener("click", closeModal);
