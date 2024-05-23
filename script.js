const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const home = document.getElementById("home");
const homeButton = document.getElementById("home-button");

const scrollToSection = (sectionId) => () => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
};

about.addEventListener("click", scrollToSection("about-section"));
projects.addEventListener("click", scrollToSection("projects-section"));
contact.addEventListener("click", scrollToSection("contact-section"));
home.addEventListener("click", scrollToSection("home-section"));
homeButton.addEventListener("click", scrollToSection("about-section"));
