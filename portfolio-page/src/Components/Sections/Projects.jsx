import React from "react";
import p_cosmos from "../../Assets/p_cosmos.jpg";
import "../../Styling/Projects.css";

export default function Projects() {
  const openUrl = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <section id="Projects" className="projects">
      <div className="text">
        <p className="text-p1">Browse my recent</p>
        <h1 className="title">Projects</h1>
      </div>
      <div className="project-cards">
        <div className="project-card">
          <div className="thumbnail-container">
            <img className="thumbnail" src={p_cosmos} alt="project" />
          </div>
          <div className="p-text">
            <h2 className="p-title">Cosmos</h2>
            <div className="p-btn-container">
              <div className="p-btn">
                <button
                  className="p-btn-color"
                  role="link"
                  onClick={() =>
                    openUrl("https://github.com/kvcsPat/react-cosmos")
                  }
                >
                  Github
                </button>
              </div>
              <div className="p-btn">
                <button
                  className="p-btn-color"
                  role="link"
                  onClick={() => openUrl("https://react-cosmos.netlify.app")}
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="thumbnail-container">
            <img className="thumbnail" src={p_cosmos} alt="project" />
          </div>
          <div className="p-text">
            <h2 className="p-title">Cosmos</h2>
            <div className="p-btn-container">
              <div className="p-btn">
                <button
                  className="p-btn-color"
                  role="link"
                  onClick={() =>
                    openUrl("https://github.com/kvcsPat/react-cosmos")
                  }
                >
                  Github
                </button>
              </div>
              <div className="p-btn">
                <button
                  className="p-btn-color"
                  role="link"
                  onClick={() => openUrl("https://react-cosmos.netlify.app")}
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="thumbnail-container">
            <img className="thumbnail" src={p_cosmos} alt="project" />
          </div>
          <div className="p-text">
            <h2 className="p-title">Cosmos</h2>
            <div className="p-btn-container">
              <div className="p-btn">
                <button
                  className="p-btn-color"
                  role="link"
                  onClick={() =>
                    openUrl("https://github.com/kvcsPat/react-cosmos")
                  }
                >
                  Github
                </button>
              </div>
              <div className="p-btn">
                <button
                  className="p-btn-color"
                  role="link"
                  onClick={() => openUrl("https://react-cosmos.netlify.app")}
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="thumbnail-container">
            <img className="thumbnail" src={p_cosmos} alt="project" />
          </div>
          <div className="p-text">
            <h2 className="p-title">Cosmos</h2>
            <div className="p-btn-container">
              <div className="p-btn">
                <button
                  className="p-btn-color"
                  role="link"
                  onClick={() =>
                    openUrl("https://github.com/kvcsPat/react-cosmos")
                  }
                >
                  Github
                </button>
              </div>
              <div className="p-btn">
                <button
                  className="p-btn-color"
                  role="link"
                  onClick={() => openUrl("https://react-cosmos.netlify.app")}
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="thumbnail-container">
            <img className="thumbnail" src={p_cosmos} alt="project" />
          </div>
          <div className="p-text">
            <h2 className="p-title">Cosmos</h2>
            <div className="p-btn-container">
              <div className="p-btn">
                <button
                  className="p-btn-color"
                  role="link"
                  onClick={() =>
                    openUrl("https://github.com/kvcsPat/react-cosmos")
                  }
                >
                  Github
                </button>
              </div>
              <div className="p-btn">
                <button
                  className="p-btn-color"
                  role="link"
                  onClick={() => openUrl("https://react-cosmos.netlify.app")}
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="thumbnail-container">
            <img className="thumbnail" src={p_cosmos} alt="project" />
          </div>
          <div className="p-text">
            <h2 className="p-title">Cosmos</h2>
            <div className="p-btn-container">
              <div className="p-btn">
                <button
                  className="p-btn-color"
                  role="link"
                  onClick={() =>
                    openUrl("https://github.com/kvcsPat/react-cosmos")
                  }
                >
                  Github
                </button>
              </div>
              <div className="p-btn">
                <button
                  className="p-btn-color"
                  role="link"
                  onClick={() => openUrl("https://react-cosmos.netlify.app")}
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
