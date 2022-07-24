const input = document.querySelector("input");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

input.addEventListener("input", () => {
  if (input.value) {
    // h1.innerText = input.value;
    h1.innerHTML = "";
    for (let i = 1; i <= input.value.length; i++) {
      // h1.innerHTML += `${input.value[i - 1]}<span class="sub">${i}</span>`;
      if (input.value[i - 1] === " ") {
        h1.innerHTML += `<span class="char">${
          input.value[i - 1]
        }<span class="sub space">${i}</span></span>`;
      } else {
        h1.innerHTML += `<span class="char">${
          input.value[i - 1]
        }<span class="sub">${i}</span></span>`;
      }
    }
    h2.innerText = input.value.length;
  } else {
    h1.innerText = "Enter a string";
    h2.innerText = "";
  }
});
