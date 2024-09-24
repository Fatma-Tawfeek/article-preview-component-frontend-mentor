var shareOptions = document.querySelector(".share-options");
var shareBtn = document.querySelector(".share");
var shareIcon = document.querySelector(".share svg path");

shareBtn.addEventListener("click", function () {
    shareOptions.classList.toggle("active");
    shareBtn.classList.toggle("focus");
    if (shareIcon.getAttribute("fill") === "#fff") {
        shareIcon.setAttribute("fill", "#6E8098");
    } else {
        shareIcon.setAttribute("fill", "#fff");
    }
});
