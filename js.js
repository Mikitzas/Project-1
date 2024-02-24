
const colorChange = document.querySelectorAll(".colorchange");

colorChange.forEach((button) => {
  button.addEventListener("mouseover", (e) => {
    let bgColor = window.getComputedStyle(e.currentTarget).getPropertyValue("filter");
    console.log(bgColor);

    console.log(this)

    let nextSibling = e.currentTarget.nextElementSibling
    let imgElement = nextSibling.querySelector("img");
    let hidenImg = nextSibling.querySelector("img:nth-child(2)")
    hidenImg.style.display = 'block';
    hidenImg.style.filter = bgColor
    console.log(nextSibling);
    console.log(imgElement);
    console.log(hidenImg)

  });
  
  button.addEventListener("mouseout", (e) => {
    let nextSibling = e.currentTarget.nextElementSibling;
    let hiddenImg = nextSibling.querySelector("img:nth-child(2)");
    hiddenImg.style.display = 'none';
  })
});
