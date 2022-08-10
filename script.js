let inputText = document.querySelector("#input");
let outputText = document.querySelector("#output");

let translateBinion = () => {
  console.log(inputText.value);
  fetch(
    "https://api.funtranslations.com/translate/minion.json?text=" +
      inputText.value
  )
    .then((response) => response.json())
    .then((data) => (outputText.innerText = data.contents.translated))
    .catch((error) => {
      console.log(error);
      alert("Something went wrong! Please try after some time.");
    });
};
