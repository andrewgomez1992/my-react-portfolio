export const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth", // Enables smooth scrolling
      block: "start", // Aligns the section to the start of the viewport
    });
  }
};
