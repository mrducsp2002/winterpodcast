window.addEventListener("scroll", function () {
  var currentPosition = window.scrollY;
  const vh = window.innerHeight;

  // Display section 1 when scrolled to a certain position
  for (let i = 1; i <= 10; i++) {
    const divId = "div" + i;
    const divElement = document.getElementById(divId);

    if (currentPosition >= (i - 1) * vh && currentPosition < i * vh) {
      divElement.classList.add("show", "typewriter");
    } else {
      divElement.classList.remove("show", "typewriter");
    }
  }
});

