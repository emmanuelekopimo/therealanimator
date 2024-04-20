const frameElement = document.getElementById("frame");

const searchParams = new URLSearchParams(window.location.search);
if (searchParams.has("v")) {
  let video = searchParams.get("v");
  let src = `https://www.youtube.com/embed/${video}`;
  frameElement.setAttribute("src", src);
  console.log("Hello");
}
