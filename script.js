let jokesArea = document.querySelector("#joke");
let jokesButton = document.querySelector("#jokeBtn");

jokesButton.addEventListener("click", fetchJoke);

async function fetchJoke() {
  const jokesData = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const jokeObj = await jokesData.json();
  jokesArea.innerHTML = jokeObj.joke;
}
