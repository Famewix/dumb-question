let image_tag = document.getElementById("arrow-img");
let option_tags = document.getElementsByTagName("li");
let currentDir = "left"
let arrowArray = ["up", "down", "left", "right"];

function changeImage(option) {
  
  // checks if the hovered option is same as current image direction
  if (option.localeCompare(currentDir) === 0) {
    //copys the array excluding hovered option
    let newArr = Array.from(arrowArray);
    newArr.splice(arrowArray.indexOf(option), 1);
    // new random direction.
    const randomDir = newArr[Math.floor(Math.random() * newArr.length)];
  
    newImageName = `assets/arrow-${randomDir}.png`;
    image_tag.src = newImageName;
    return randomDir;
  } else {
    return currentDir
  }
}

for (let i = 0; i < option_tags.length; i++) {
  option_tags[i].onmouseover = function () {
    let hoveredOption = option_tags[i].innerHTML.toLowerCase();
    currentDir =  changeImage(hoveredOption);
    console.log(currentDir);
  };
}
