import Typewriter from "typewriter-effect/dist/core";
function generatePoem(event) {
  event.preventDefault();
  
  let poemElement = document.querySelector(".poem");
  poemElement.innerHTML = "Generating your poem...";
  
  new Typewriter(".poem", {
    strings: "Roses are red, violets are blue, AI writes poems, just for you.",
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

let poemForm = document.querySelector("form");
poemForm.addEventListener("submit", generatePoem);
