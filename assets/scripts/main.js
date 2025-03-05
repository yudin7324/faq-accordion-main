document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".accordion__section");

  sections.forEach((section) => {
    const title = section.querySelector(".accordion__title");
    const content = section.querySelector(".accordion__content");

    title.addEventListener("click", () => toggleAccordion(section, content));

    title.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleAccordion(section, content);
      }
    });
  });

  function toggleAccordion(section, content) {
    const isActive = section.classList.contains("active");

    document.querySelectorAll(".accordion__section").forEach((sec) => {
      sec.classList.remove("active");
      sec.querySelector(".accordion__content").style.maxHeight = "0";
    });

    if (!isActive) {
      section.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
});
