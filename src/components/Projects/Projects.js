import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="URL Shortner"
              description="Created a URL Shortener using Golang, Gin, MySQL, Redis.• A website that converts long links into short, shareable URLs for sites, chats, and emails.• Simplified Web Address: Minimizes webpage URLs for easier recall and tracking.• Duplication Prevention: A database stores previously shortened URLs to eliminate redundant processing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="weBlog Blogs"
              description="A Blog Page using JavaScript and React. Encourages user-generated content, discussions, and collaboration among community members. Enables users to discover and access valuable resources, reviews, and recommendations."
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Personal Finance Management"
              description="Built a personal finance management app using JavaScript. Helps users create budgets for various expenses and track their actual spending. Facilitates better financial planning and tracking of financial goals"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
