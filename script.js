window.addEventListener("load", function () {
  var popup = document.getElementById("popup");

  if (window.screen && window.screen.width < 1024) {
    console.log(`Window width too small, no popup. ${window.screen.width}px`)
    return;
  }

  // display popup after 3 seconds
  setTimeout(showPopup, 3000);

  // mechanics to dismiss popup when clicking
  // close button or anywhere outside it.
  popup.addEventListener("click", dismissPopup);
  window.addEventListener("click", function (event) {
    if (event.target !== popup) {
      dismissPopup();
    }
  });
});

// display popup and load iframe on demand
function showPopup() {
  var iframe = document.querySelector("iframe");
  var url = iframe.getAttribute("data-src");
  iframe.setAttribute("src", url);
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

// hide popup
function dismissPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}
