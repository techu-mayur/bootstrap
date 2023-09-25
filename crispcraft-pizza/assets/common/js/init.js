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
    $(".review-slider").owlCarousel({
      loop: true,
      nav: false,
      autoplay: true,
      margin: 40,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
    const backToTopBtn = document.getElementById("backToTopBtn");
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });
    backToTopBtn.addEventListener("click", () => {
      scrollToTop(1000); // Scroll to top with a duration of 1000ms (1 second)
    });
    // Function to smoothly scroll to the top
    function scrollToTop(duration) {
      const start =
        document.documentElement.scrollTop || document.body.scrollTop;
      const startTime = performance.now();
      function scrollStep(timestamp) {
        const currentTime = timestamp - startTime;
        const progress = Math.min(currentTime / duration, 1);
        document.documentElement.scrollTop = start * (1 - progress);
        document.body.scrollTop = start * (1 - progress);
        if (currentTime < duration) {
          window.requestAnimationFrame(scrollStep);
        }
      }
      window.requestAnimationFrame(scrollStep);
    }
    //Navbar scroll
    // Function to scroll to a specific section with a smooth animated effect
    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        const offsetTop = section.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = offsetTop - startPosition;
        const duration = 5000; // Adjust the duration as needed (in milliseconds)
        let startTime = null;
        function animateScroll(currentTime) {
          if (startTime === null) {
            startTime = currentTime;
          }
          const elapsedTime = currentTime - startTime;
          const scrollAmount = easeInOutQuad(
            elapsedTime,
            startPosition,
            distance,
            duration
          );
          window.scrollTo(0, scrollAmount);
          if (elapsedTime < duration) {
            requestAnimationFrame(animateScroll);
          }
        }
        function easeInOutQuad(t, b, c, d) {
          // EaseInOutQuad animation function (slower and smoother)
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t + b;
          t--;
          return (-c / 2) * (t * (t - 2) - 1) + b;
        }
        requestAnimationFrame(animateScroll);
      }
    }
    // Add event listeners to your navigation links
    document.addEventListener("DOMContentLoaded", function () {
      const navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent the default link behavior
          const targetSectionId = this.getAttribute("href").substring(1); // Get the section ID from the href attribute
          scrollToSection(targetSectionId); // Scroll to the target section with animation
        });
      });
    });
    //Sticky navigation
    let prevScrollPos = window.pageYOffset;
    const header = document.getElementById("navigationbar");
    window.addEventListener("scroll", () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > prevScrollPos) {
        // Scrolling down, hide the header
        header.style.transform = "translateY(-100%)";
      } else {
        // Scrolling up, show the header
        header.style.transform = "translateY(0)";
      }
      prevScrollPos = currentScrollPos;
    });
    //Nav remove class
    // Function to toggle the sticky-header class and add a class to the banner-section
   
  });
})(jQuery);
