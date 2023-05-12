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

function searchByCategories() {
  let showList = document.getElementById("show-search-list");
  let hiddenList = document.getElementById("hidden-list");
  showList.addEventListener("click", () => {
    if(hiddenList.classList.contains("search-list")) {
      hiddenList.style.display = ("block")
    }
  })
}