!(function ($) {
  $(document).ready(function () {
     // Disable right-click
     window.addEventListener('contextmenu', function (e) {
      e.preventDefault();
  });
  // Disable image downloads (prevents drag and drop)
  document.addEventListener('dragstart', function (e) {
      e.preventDefault();
  });
  // Disable viewing page source (Ctrl+U)
  window.addEventListener('keydown', function (e) {
      if (e.key === 'U' && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
      }
  });
  // Disable right-click (alternative method)
  document.onmousedown = function(e) {
      if (e.button == 2) {
          return false;
      }
  };
  // Disable F12 key (developer tools)
  document.onkeydown = function(e) {
      if (e.keyCode == 123) {
          return false;
      }
  };
    function detectDevice() {
      var head = document.head,
        commonCSS = "assets/common/css/common.min.css",
        commonLink = document.createElement("link");
      (commonLink.rel = "stylesheet"),
        (commonLink.type = "text/css"),
        (commonLink.href = commonCSS),
        head.appendChild(commonLink),
        window.innerWidth <= 767
          ? loadDeviceCSS("mobile.min.css")
          : window.innerWidth <= 999
          ? loadDeviceCSS("tab.min.css")
          : loadDeviceCSS("desktop.min.css");
    }
    function loadDeviceCSS(cssFile) {
      var head = document.head,
        link = document.createElement("link");
      (link.rel = "stylesheet"),
        (link.type = "text/css"),
        (link.href = "assets/common/css/" + cssFile),
        head.appendChild(link);
    }
    detectDevice(),
      $(window).on("load", function () {
        $(".loader").fadeOut();
      });
    const menu = document.querySelector("#toggle"),
      menuItems = document.querySelector("#navbar-overlay"),
      menuContainer = document.querySelector(".menu-container"),
      menuIcon = document.querySelector("svg.ham");
    function toggleMenu(e) {
      menuItems.classList.toggle("open"),
        menuContainer.classList.toggle("full-menu"),
        menuIcon.classList.remove("active"),
        e.preventDefault();
    }
    function closeMenu() {
      menuItems.classList.contains("open") && toggleMenu();
    }
    menu.addEventListener("click", toggleMenu, !1);
    const navLinks = undefined;
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu(), menuIcon.classList.remove("active");
      });
    }),
      $(".review-slider").owlCarousel({
        loop: !0,
        nav: !1,
        autoplay: !0,
        margin: 40,
        responsiveClass: !0,
        responsive: { 0: { items: 1 }, 600: { items: 2 }, 1e3: { items: 3 } },
      });
    const backToTopBtn = document.getElementById("backToTopBtn");
    function scrollToTop(duration) {
      const start =
          document.documentElement.scrollTop || document.body.scrollTop,
        startTime = performance.now();
      function scrollStep(timestamp) {
        const currentTime = timestamp - startTime,
          progress = Math.min(currentTime / duration, 1);
        (document.documentElement.scrollTop = start * (1 - progress)),
          (document.body.scrollTop = start * (1 - progress)),
          currentTime < duration && window.requestAnimationFrame(scrollStep);
      }
      window.requestAnimationFrame(scrollStep);
    }
    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        const offsetTop = section.getBoundingClientRect().top + window.scrollY,
          startPosition = window.scrollY,
          distance = offsetTop - startPosition,
          duration = 5e3;
        let startTime = null;
        function animateScroll(currentTime) {
          null === startTime && (startTime = currentTime);
          const elapsedTime = currentTime - startTime,
            scrollAmount = easeInOutQuad(
              elapsedTime,
              startPosition,
              distance,
              duration
            );
          window.scrollTo(0, scrollAmount),
            elapsedTime < duration && requestAnimationFrame(animateScroll);
        }
        function easeInOutQuad(t, b, c, d) {
          return (t /= d / 2) < 1
            ? (c / 2) * t * t + b
            : (-c / 2) * (--t * (t - 2) - 1) + b;
        }
        requestAnimationFrame(animateScroll);
      }
    }
    window.addEventListener("scroll", () => {
      document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
        ? (backToTopBtn.style.display = "block")
        : (backToTopBtn.style.display = "none");
    }),
      backToTopBtn.addEventListener("click", () => {
        scrollToTop(1e3);
      }),
      document.addEventListener("DOMContentLoaded", function () {
        const navLinks = undefined;
        document.querySelectorAll(".nav-link").forEach(function (link) {
          link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSectionId = undefined;
            scrollToSection(this.getAttribute("href").substring(1));
          });
        });
      });
    let prevScrollPos = window.pageYOffset;
    const header = document.getElementById("navigationbar");
    window.addEventListener("scroll", () => {
      const currentScrollPos = window.pageYOffset;
      (header.style.transform =
        currentScrollPos > prevScrollPos
          ? "translateY(-100%)"
          : "translateY(0)"),
        (prevScrollPos = currentScrollPos);
    }),
      $(document).ready(function () {
        function syncPosition(el) {
          var current = el.item.index,
            syncedCarousel;
          ($(".explore-foods-slider-small")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced"),
          void 0 !== $(".explore-foods-slider-small").data("owl.carousel")) &&
            $(".explore-foods-slider-small")
              .data("owl.carousel")
              .to(current, 100, !0);
        }
        $(".explore-foods-slider-big").owlCarousel({
          items: 1,
          loop: !1,
          margin: 10,
          nav: !1,
          dots: !1,
          onChanged: syncPosition,
        }),
          $(".explore-foods-slider-small").owlCarousel({
            items: 5,
            loop: !1,
            margin: 10,
            nav: !0,
            dots: !1,
            responsive: {
              0: { items: 2 },
              400: { items: 3 },
              992: { items: 5 },
            },
            onInitialized: syncPosition,
            onChanged: syncPosition,
          }),
          $(".explore-foods-slider-small").on(
            "click",
            ".owl-item",
            function (e) {
              e.preventDefault();
              var number = $(this).index();
              $(".explore-foods-slider-big")
                .data("owl.carousel")
                .to(number, 300, !0);
            }
          );
      });
    document.addEventListener("DOMContentLoaded", function () {
      const offscreenImages = document.querySelectorAll("img.offscreen");
      offscreenImages.forEach(function (image) {
        image.loading = "lazy";
      });
    });
  });
})(jQuery);
