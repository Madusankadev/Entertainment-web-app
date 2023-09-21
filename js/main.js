let grid = document.querySelector(".grid");
let movie = document.querySelector(".movie");
let hot = document.querySelector(".hot");
let bookmark = document.querySelector(".bookmark");



function selectIcon(icon) {
  if (icon == 1) {
    iconColor("white", "blue", "blue", "blue");
  } 

  if (icon == 2) {
    iconColor( "blue", "white", "blue", "blue");
  }

  if (icon == 3) {
    iconColor( "blue",  "blue", "white", "blue");
  }

  if (icon == 4) {
    iconColor( "blue",  "blue", "blue", "white");
  }
}

function iconColor(a, b, c, d) {
  grid.src = "../icon/grid-" + a + ".png";
  movie.src = "../icon/movie-" + b + ".png";
  hot.src = "../icon/hot-" + c + ".png";
  bookmark.src = "../icon/bookmark-" + d + ".png";

  console.log(a,b,c,d)

  console.log("../icon/grid-" + a + ".png")
  console.log("../icon/movie-" + b + ".png")
  console.log("../icon/hot-" + c + ".png")
  console.log("../icon/bookmark-" + d + ".png")
}


//Trending Scroll



const scrollContainer = document.querySelector(".trending");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

