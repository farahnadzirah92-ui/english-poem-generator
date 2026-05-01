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
  poemElement.innerHTML = "⏳ Generating your poem...";
  
  axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generatePoem);