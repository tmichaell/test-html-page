const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/meadow.jpeg") {
    myImage.setAttribute("src", "images/aussie1.jpeg");
  } else {
    myImage.setAttribute("src", "images/meadow.jpeg");
  }
};
