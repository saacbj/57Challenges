const select = document.querySelector("select");
const section = document.querySelector("section");
const ul = document.createElement("ul");

const solutions = {
  2: {
    1: [
      ["01 Saying Hello", "01-SayingHello/index.html", "2022/07/22"],
      [
        "01 Saying Hello (Dynamic)",
        "01-SayingHello/dynamicSolution/index.html",
        "2022/07/22",
      ],
    ],
  },
};

select.addEventListener("change", () => {
  if (select.value === "0") {
    section.innerText = "Select a chapter";
  } else {
    // Reset the section and the ul elements so links of different chapters don't stack over each other.
    section.innerHTML = "";
    ul.innerHTML = "";

    // Displays the links for the solutions
    section.appendChild(ul);

    let chap = solutions[select.value];
    for (let ex in chap) {
      for (let ver of chap[ex]) {
        const ch = document.createElement("li");
        ch.innerHTML = `<a href="${ver[1]}">${ver[0]}</a> [${ver[2]}]`;
        ul.appendChild(ch);
      }
    }
  }
});
