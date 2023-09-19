/**
 * Created by User on 31-08-2023.
 *
 * @format
 */
(function ($) {
  $(document).ready(function () {
    //CSS Files
    // Function to detect the user's device
    function detectDevice() {
      var head = document.head;
      // Load common CSS file
      var commonCSS = "assets/common/css/common.css";
      var commonLink = document.createElement("link");
      commonLink.rel = "stylesheet";
      commonLink.type = "text/css";
      commonLink.href = commonCSS;
      head.appendChild(commonLink);
      // Load device-specific CSS files based on screen width
      if (window.innerWidth <= 768) {
        // Load mobile-specific CSS
        loadDeviceCSS("mobile.css");
      } else if (window.innerWidth <= 1024) {
        // Load tablet-specific CSS
        loadDeviceCSS("tab.css");
      } else {
        // Load desktop-specific CSS
        loadDeviceCSS("desktop.css");
      }
    }
    // Function to load device-specific CSS
    function loadDeviceCSS(cssFile) {
      var head = document.head;
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "assets/common/css/" + cssFile;
      head.appendChild(link);
    }
    // Call the function to detect the device and load the CSS files
    detectDevice();
    //Loader
    $(window).on("load", function () {
      $(".loader").fadeOut();
    });
    //Mobile Navigation
    const menu = document.querySelector("#toggle");
    const menuItems = document.querySelector("#navbar-overlay");
    const menuContainer = document.querySelector(".menu-container");
    const menuIcon = document.querySelector("i");
    function toggleMenu(e) {
      menuItems.classList.toggle("open");
      menuContainer.classList.toggle("full-menu");
      // menuIcon.classList.toggle("fa-bars");
      // menuIcon.classList.add("fa-times");
      e.preventDefault();
    }
    menu.addEventListener("click", toggleMenu, false);
  });
})(jQuery);
