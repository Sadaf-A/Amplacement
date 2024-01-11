let sharebtn = document.querySelector(".share");
let messbtn = document.querySelector(".a");
let likebtn = document.querySelector(".b");
let jobsbtn = document.querySelector(".c");

jobsbtn.addEventListener("click", function () {
  window.location.href = "/myPost";
});
sharebtn.addEventListener("click", function () {
  window.location.href = "/upload";
});
messbtn.addEventListener("click", function () {
  window.location.href = "/chat";
});
likebtn.addEventListener("click", function () {
  // window.location.href = "/";
});
uploadbtn.addEventListener("click", function () {
  window.location.href = "/mypost";
});
