function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  
  let topicInput = document.querySelector("#poem-topic");
  let topic = topicInput.value;
  
  let apiKey = "2b30d4o3a066eae6d7581dbaft512efa";
  let prompt = `Write a short 4-line poem about ${topic}`;
  let context = "You are a creative poet. Write beautiful, concise poems in English. Format the poem with HTML line breaks using <br /> between lines.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
  let poemElement = document.querySelector("#poem");
  let submitButton = document.querySelector("input[type='submit']");
  
  // Disable button and show loading state
  submitButton.disabled = true;
  submitButton.value = "GENERATING...";
  poemElement.classList.add("loading");
  poemElement.innerHTML = "⏳ AI is crafting your poem, please wait...";
  
  axios.get(apiUrl).then(function(response) {
    poemElement.classList.remove("loading");
    submitButton.disabled = false;
    submitButton.value = "GENERATE POEM";
    displayPoem(response);
  });
}

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generatePoem);