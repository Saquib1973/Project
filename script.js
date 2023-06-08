let lists = document.querySelectorAll(".dragg");
console.log(lists);
let rightBox = document.querySelector("#right");
let leftBox = document.querySelector("#left");
let reset = document.querySelector(".reset");
lists.forEach((list) => {
  list.addEventListener("dragstart", (e) => {
    let selected = e.target;
    rightBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", (e) => {
      rightBox.appendChild(selected);
      alert("appended");
    });
  });
});

reset.addEventListener("click", (e) => {
  lists.forEach((lists) => {
    leftBox.appendChild(lists);
  });
  location.reload(true);
});
