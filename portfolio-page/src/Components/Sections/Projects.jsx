import React from "react";
import Reveal from "../Reveal";
import p_weather from "../../Assets/p_weather.jpg";
import p_hangman from "../../Assets/p_hangman.jpg";
import p_ui_elements from "../../Assets/p_ui_elements.jpg";
import p_cosmos from "../../Assets/p_cosmos.jpg";
import p_todo from "../../Assets/p_todo.jpg";
import p_auth from "../../Assets/p_auth.jpg";
import "../../Styling/Projects.css";

export default function Projects() {
  const openUrl = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <section id="Projects" className="projects">
      <Reveal>
        <div className="text">
          <p className="text-p1">Browse my recent</p>
          <h1 className="title">Projects</h1>
        </div>
      </Reveal>
      <div className="project-cards">
        <Reveal>
          <div className="project-card">
            <div className="thumbnail-container">
              <div className="project-info">
                <p className="project-info-title">MERN Stack</p>
                <p className="project-info-text">
                  Server is deployed on Render:
                </p>
                <p className="project-info-text">
                  First POST request takes 1-2 mins
                </p>
              </div>
              <img className="thumbnail" src={p_auth} alt="project" />
            </div>
            <div className="p-text">
              <h2 className="p-title">Authentication</h2>
              <div className="p-btn-container">
                <div className="p-btn">
                  <button
                    className="p-btn-color"
                    role="link"
                    onClick={() =>
                      openUrl("https://github.com/kvcsPat/mern-register-login")
                    }
                  >
                    Github
                  </button>
                </div>
                <div className="p-btn">
                  <button
                    className="p-btn-color"
                    role="link"
                    onClick={() =>
                      openUrl("https://kvcspat-mern-authentication.vercel.app/")
                    }
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="project-card">
            <div className="thumbnail-container">
              <div className="project-info">
                <p className="project-info-title">MERN Stack</p>
                <p className="project-info-text">
                  Project is deployed on Render:
                </p>
                <p className="project-info-text">Initial load takes 1-2 mins</p>
              </div>
              <img className="thumbnail" src={p_todo} alt="project" />
            </div>
            <div className="p-text">
              <h2 className="p-title">TodoApp</h2>
              <div className="p-btn-container">
                <div className="p-btn">
                  <button
                    className="p-btn-color"
                    role="link"
                    onClick={() =>
                      openUrl("https://github.com/kvcsPat/mern-todo")
                    }
                  >
                    Github
                  </button>
                </div>
                <div className="p-btn">
                  <button
                    className="p-btn-color"
                    role="link"
                    onClick={() =>
                      openUrl("https://mern-todo-app-zffj.onrender.com")
                    }
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="project-card">
            <div className="thumbnail-container">
              <div className="project-info">
                <p className="project-info-title">ReactJS + SCSS</p>
                <p className="project-info-text">
                  Project is deployed on Netlify
                </p>
              </div>
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
        </Reveal>
        <Reveal>
          <div className="project-card">
            <div className="thumbnail-container">
              <div className="project-info">
                <p className="project-info-title">ReactJS</p>
                <p className="project-info-text">
                  Project is deployed on Netlify
                </p>
              </div>
              <img className="thumbnail" src={p_ui_elements} alt="project" />
            </div>
            <div className="p-text">
              <h2 className="p-title">UI Components</h2>
              <div className="p-btn-container">
                <div className="p-btn">
                  <button
                    className="p-btn-color"
                    role="link"
                    onClick={() =>
                      openUrl("https://github.com/kvcsPat/react-ui-components")
                    }
                  >
                    Github
                  </button>
                </div>
                <div className="p-btn">
                  <button
                    className="p-btn-color"
                    role="link"
                    onClick={() =>
                      openUrl("https://react-ui-components.netlify.app/")
                    }
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="project-card">
            <div className="thumbnail-container">
              <div className="project-info">
                <p className="project-info-title">React + TypeScript</p>
                <p className="project-info-text">
                  Project is deployed on GitHub Pages
                </p>
              </div>
              <img className="thumbnail" src={p_hangman} alt="project" />
            </div>
            <div className="p-text">
              <h2 className="p-title">Hangman</h2>
              <div className="p-btn-container">
                <div className="p-btn">
                  <button
                    className="p-btn-color"
                    role="link"
                    onClick={() =>
                      openUrl("https://github.com/kvcsPat/react-ts-hangman")
                    }
                  >
                    Github
                  </button>
                </div>
                <div className="p-btn">
                  <button
                    className="p-btn-color"
                    role="link"
                    onClick={() =>
                      openUrl("https://kvcspat.github.io/react-ts-hangman/")
                    }
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="project-card">
            <div className="thumbnail-container">
              <div className="project-info">
                <p className="project-info-title">ReactJS</p>
                <p className="project-info-text">
                  Project is deployed on GitHub Pages
                </p>
              </div>
              <img className="thumbnail" src={p_weather} alt="project" />
            </div>
            <div className="p-text">
              <h2 className="p-title">WeatherApp</h2>
              <div className="p-btn-container">
                <div className="p-btn">
                  <button
                    className="p-btn-color"
                    role="link"
                    onClick={() =>
                      openUrl("https://github.com/kvcsPat/react-weather-app")
                    }
                  >
                    Github
                  </button>
                </div>
                <div className="p-btn">
                  <button
                    className="p-btn-color"
                    role="link"
                    onClick={() =>
                      openUrl("https://kvcspat.github.io/react-weather-app/")
                    }
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
