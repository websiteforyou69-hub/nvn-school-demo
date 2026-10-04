document.addEventListener("DOMContentLoaded", function () {

  /* ================= NAVIGATION ================= */

  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");
  const navbar = document.getElementById("navbar");

  if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

      navMenu.classList.toggle("open");
      document.body.classList.toggle("menu-open");

    });


    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

      link.addEventListener("click", function () {

        navMenu.classList.remove("open");
        document.body.classList.remove("menu-open");

      });

    });

  }


  /* ================= NAVBAR SCROLL ================= */

  window.addEventListener("scroll", function () {

    if (!navbar) return;

    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

  });


  /* ================= SCROLL REVEAL ================= */

  const revealElements =
    document.querySelectorAll(".reveal");


  const revealObserver =
    new IntersectionObserver(
      function (entries) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            revealObserver.unobserve(entry.target);

          }

        });

      },
      {
        threshold:0.12
      }
    );


  revealElements.forEach(function (element) {

    revealObserver.observe(element);

  });


  /* ================= SMOOTH ANCHORS ================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(function (link) {

      link.addEventListener("click", function (event) {

        const targetId =
          this.getAttribute("href");

        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }

        const target =
          document.querySelector(targetId);

        if (!target) {
          return;
        }

        event.preventDefault();

        const navbarHeight =
          navbar ? navbar.offsetHeight : 0;

        const targetPosition =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;

        window.scrollTo({
          top:targetPosition,
          behavior:"smooth"
        });

      });

    });


  /* ================= IMAGE FALLBACK ================= */

  const images =
    document.querySelectorAll("img");


  images.forEach(function (image) {

    image.addEventListener("error", function () {

      this.style.background =
        "linear-gradient(135deg,#0759a8,#22b6ee)";

      this.style.objectFit = "cover";

      this.alt =
        "Neev Vidhya Niketan School";

    });

  });


  /* ================= ACTIVE NAV ================= */

  const sections =
    document.querySelectorAll("section[id]");

  const navItems =
    document.querySelectorAll(
      '.nav-menu a[href^="#"]'
    );


  const activeObserver =
    new IntersectionObserver(
      function (entries) {

        entries.forEach(function (entry) {

          if (!entry.isIntersecting) {
            return;
          }

          navItems.forEach(function (item) {

            item.classList.remove("active");

          });

          const activeLink =
            document.querySelector(
              '.nav-menu a[href="#' +
              entry.target.id +
              '"]'
            );

          if (activeLink) {
            activeLink.classList.add("active");
          }

        });

      },
      {
        rootMargin:"-30% 0px -60% 0px"
      }
    );


  sections.forEach(function (section) {

    activeObserver.observe(section);

  });

});
