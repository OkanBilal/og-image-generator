import React, { useState, createRef, useEffect } from "react";
import { GitHub, Twitter, Linkedin, Figma } from "./components/icons";
import { useScreenshot } from "use-react-screenshot";

const App = () => {
  const ogref = createRef(null);
  const downloadRef = createRef();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [job, setJob] = useState("");
  const [github, setGithub] = useState("");
  const [figma, setFigma] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [image, takeScreenshot] = useScreenshot();
  const getImage = () => takeScreenshot(ogref.current);

  useEffect(() => {
    if (image) {
      downloadRef.current.click();
    }
  }, [image]);

  return (
    <>
      <div className="options">
        <h2 className="options-title">Options</h2>
        <ul>
          <li>
            <label className="label-title">Post Title</label>
            <input
              type="text"
              class="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </li>
          <li>
            <label className="label-title">Author</label>
            <input
              type="text"
              class="input"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </li>
          <li>
            <label className="label-title">Job Role</label>
            <input
              type="text"
              class="input"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </li>
          <li>
            <label className="label-title">GitHub</label>
            <input
              type="text"
              class="input"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </li>
          <li>
            <label className="label-title">Linkedin</label>
            <input
              type="text"
              class="input"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </li>
          <li>
            <label className="label-title">Twitter</label>
            <input
              type="text"
              class="input"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
            />
          </li>
          <li>
            <label className="label-title">Figma</label>
            <input
              type="text"
              class="input"
              value={figma}
              onChange={(e) => setFigma(e.target.value)}
            />
          </li>
          <li>
            <button onClick={getImage} className="download" type="button">
              Download
            </button>
            {image && (
              <div className="download-button">
                <a ref={downloadRef} href={image} download="og-image.png">
                  Download
                </a>
              </div>
            )}
          </li>
        </ul>
      </div>
      <div className="main">
        <h1 className="main-title">Open Graph Image Generator for Blog Post</h1>
        <div className="card" ref={ogref}>
          <div>
            <div className="post-title">{title || "Post Title"}</div>
            <div className="author-name">
              <span>{author || "Author"}</span>
              {job.length >= 1 ? <span>,</span> : ""}
              <span className="job-role">{job || "Job Role"}</span>
            </div>
            <div className="social">
              {github.length >= 1 ? (
                <div className="social-container">
                  <GitHub />
                  <span className="social-title">{github || ""}</span>
                </div>
              ) : (
                ""
              )}
              {linkedin.length >= 1 ? (
                <div className="social-container">
                  <Linkedin />
                  <span className="social-title">{linkedin || ""}</span>
                </div>
              ) : (
                ""
              )}
              {twitter.length >= 1 ? (
                <div className="social-container">
                  <Twitter />
                  <span className="social-title">{twitter || ""}</span>
                </div>
              ) : (
                ""
              )}
              {figma.length >= 1 ? (
                <div className="social-container">
                  <Figma />
                  <span className="social-title">{figma || ""}</span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
