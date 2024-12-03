import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillBriefcaseFill, BsFillPersonLinesFill } from "react-icons/bs";
import greenhat from "./assets/greenhat.png";

// import your own images for screen content on top of laptop screen
// Uncomment screenContent below

// import yourfirstimage from "./assets/yourfirstimage.png";
// import yoursecondimage from "./assets/yoursecondimage.png";
// import yourthirdimage from "./assets/yourthirdimage.png";
// import yourfourthimage from "./assets/yourfourthimage.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navbar
  const menuItems = [
    { name: "Home", section: "home" },
    { name: "About", section: "about" },
    { name: "Projects", section: "projects" },
    { name: "Contact", section: "contact" },
  ];

  const socialLinks = [
    { name: "Linkedin", url: "https://linkedin.com", icon: <FaLinkedin /> },
    { name: "Github", url: "https://github.com", icon: <FaGithub /> },
    {
      name: "Email",
      url: "mailto:someone@example.com",
      icon: <HiOutlineMail />,
    },
    {
      name: "Resume",
      url: "https://resume.com",
      icon: <BsFillPersonLinesFill />,
    },
  ];

  // About
  const aboutHeader = "ABOUT ME";
  const aboutDescription =
    "Below you will find more information about me, what I do, and my current skills mostly in terms of web development.";
  const intro = {
    title: "Get to know me!",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
  };
  const skills = {
    title: "My Skills",
    list: [
      "JavaScript",
      "React",
      "Redux",
      "Node Js",
      "Express",
      "AWS",
      "SQL",
      "HTML",
      "CSS",
      "Jest",
      "GIT",
      "Github",
      "Responsive Design",
      "Communication",
      "Critical Thinking",
      "Debugging",
    ],
  };

  return (
    <div>
      <Navbar
        logo={greenhat}
        title="Your Name Here"
        menuItems={menuItems}
        socialLinks={socialLinks}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Home
        greeting="Welcome to My Portfolio!"
        description="I specialize in building intuitive and high-performance web applications with clean, maintainable code."
        buttonText="Explore Projects"
      />
      <About
        aboutHeader={aboutHeader}
        aboutDescription={aboutDescription}
        intro={intro}
        skills={skills}
      />
      <Work
        header="PROJECTS"
        description="Below you will find some of the projects I've worked on or am currently working on"
        projects={[
          {
            title: "Example 1",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            buttonText: "Coming Soon",
            buttonLink: "Your Hosted Website Link",
            // screenContent: <img src={yourfirstimage} alt="Project" />,
          },
          {
            title: "Example 2",
            description:
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            buttonText: "Demo",
            buttonLink: "Your Hosted Website Link",
            // screenContent: <img src={yoursecondimage} alt="Project" />,
          },
          {
            title: "Example 3",
            description:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            buttonText: "Demo",
            buttonLink: "Your Hosted Website Link",
            // screenContent: <img src={yourthirdimage} alt="Project" />,
          },
          {
            title: "Example 4",
            description:
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            buttonText: "Demo",
            buttonLink: "Your Hosted Website Link",
            // screenContent: <img src={yourfourthimage} alt="Project" />,
          },
        ]}
      />
      <Contact
        title="CONTACT"
        description="Below you can leave your information and I'll get back to you right away."
        formAction="https://getform.io/f/your-custom-url"
        buttonText="Send"
      />
      <Footer
        name="Your name here"
        description="A Full Stack Web Developer building and managing Websites and Web Applications that lead to the success of the overall product. Check out some of my work in the Projects section."
        socialLinks={[
          {
            name: "LinkedIn",
            url: "https://linkedin.com",
            icon: <FaLinkedin />,
          },
          { name: "GitHub", url: "https://github.com", icon: <FaGithub /> },
          { name: "Twitter", url: "https://twitter.com", icon: <FaTwitter /> },
          { name: "YouTube", url: "https://youtube.com", icon: <FaYoutube /> },
          {
            name: "Portfolio",
            url: "https://portfolio.com",
            icon: <BsFillBriefcaseFill />,
          },
        ]}
        year={2024}
      />
    </div>
  );
}

export default App;
