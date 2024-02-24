const colorChange = document.querySelectorAll(".colorchange");

colorChange.forEach((button) => {
  button.addEventListener("mouseover", (e) => {
    let bgColor = window.getComputedStyle(e.currentTarget).getPropertyValue("filter");
    let nextSibling = e.currentTarget.nextElementSibling
    let hidenImg = nextSibling.querySelector("img:nth-child(2)")
    hidenImg.style.display = 'block';
    hidenImg.style.filter = bgColor
  }); 

  button.addEventListener("mouseout", (e) => {
    let nextSibling = e.currentTarget.nextElementSibling;
    let hiddenImg = nextSibling.querySelector("img:nth-child(2)");
    hiddenImg.style.display = 'none';
  })
});
