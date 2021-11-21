document.getElementById("container1Arrow").addEventListener("click", () => {
  const container1Height = document.getElementById("container1").offsetHeight;
  window.scrollBy({
    top: container1Height,
    left: 0,
    behavior: "smooth",
  });
});

document.getElementById("container2Arrow").addEventListener("click", () => {
  const container2Height = document.getElementById("container2").offsetHeight;
  window.scrollBy({
    top: container2Height,
    left: 0,
    behavior: "smooth",
  });
});

document.getElementById("container3Arrow").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
