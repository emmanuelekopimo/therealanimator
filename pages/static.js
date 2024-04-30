const frameElement = document.getElementById("frame");
const titleElement = document.getElementById("work-title");

const searchParams = new URLSearchParams(window.location.search);
if (searchParams.has("v")) {
  let video = searchParams.get("v");
  let workTitle = searchParams.get("name");
  console.log(workTitle);
  let src = `https://www.youtube.com/embed/${video}`;
  frameElement.setAttribute("src", src);
  titleElement.innerText = workTitle;
}
