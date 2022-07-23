console.log("holi");

const form = document.querySelector("form");
const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   h1.innerText = `Hello, ${input.value}!`;
// });

input.addEventListener("input", (e) => {
  // e.preventDefault();
  if (input.value) h1.innerText = `Hello, ${input.value}!`;
  else h1.innerText = "Who are you?";
});
