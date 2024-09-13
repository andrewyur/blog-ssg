import React from "react";
import "./ProjectsList.css";

export function ProjectsList() {
  return (
    <main id="projects-list">
      <nav>
        <div className="navLinkWrapper">
          <a href="/">Main Page</a>
        </div>
      </nav>
      <h1>Projects</h1>
      <hr />
      <div id="projectsContainer">
        <a href="/#p/collab-notepad" className="projectsLink">
          <p>July 2024</p>
          <h2>Collab Notepad</h2>
        </a>
        <a href="/#p/qart-encoder" className="projectsLink">
          <p>June 2024</p>
          <h2>QArt Encoder</h2>
        </a>
        <a href="/#p/portfolio-website" className="projectsLink">
          <p>May 2024</p>
          <h2>Portfolio Website</h2>
        </a>
        <a href="/#p/poetry-bot" className="projectsLink">
          <p>April 2024</p>
          <h2>Poetry Bot</h2>
        </a>
      </div>
    </main>
  );
}
