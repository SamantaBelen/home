// Toggle Publications Section
document.getElementById("toggle-btn").addEventListener("click", function () {
  const content = document.getElementById("moreContent");

  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    this.innerText = "Show Less";
  } else {
    content.classList.add("hidden");
    this.innerText = "Show More Research Projects";
  }
});
