function changeHeartcolor() {
  let heart = document.getElementById("heart");
  heart.addEventListener("click", () => {
    if (heart.classList.contains("dark-heart")) {
      heart.classList.remove("dark-heart");
      heart.classList.add("clicked-heart");
    } else {
      heart.classList.remove("clicked-heart");
      heart.classList.add("dark-heart");
    }
  });
}

// heart.style.color = "rgb(208, 74, 134)";
//   if(heart.style.color = "rgb(208, 74, 134)") {

//   }
