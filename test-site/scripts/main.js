const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/logo.png") {
    myImage.setAttribute("src", "images/koala.png");
  } else {
    myImage.setAttribute("src", "images/logo.png");
  }
};
