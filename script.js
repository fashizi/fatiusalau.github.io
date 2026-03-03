// --------------------------------------------------
// Portfolio Navigation Controller
// Highlights active section in sidebar
// Optimised using IntersectionObserver
// --------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {

  const pageSections = document.querySelectorAll("main section");
  const sidebarLinks = document.querySelectorAll("nav ul li a");

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -60% 0px", 
    threshold: 0.1
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        const activeSectionId = entry.target.getAttribute("id");

        sidebarLinks.forEach(link => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${activeSectionId}`) {
            link.classList.add("active");
          }
        });

      }
    });
  }, observerOptions);

  pageSections.forEach(section => {
    sectionObserver.observe(section);
  });

});