window.addEventListener("load", () => {
  var popup = document.getElementById("popup");

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

  // display popup after 3 seconds
  setTimeout(showPopup, 3000);

  // mechanics to dismiss popup when clicking
  // close button or anywhere outside it.
  popup.addEventListener("click", dismissPopup);
  window.addEventListener("click", event => {
    if (event.target !== popup) {
      dismissPopup();
    }
  });
});
