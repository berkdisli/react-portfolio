import "./Contact.scss";
import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img
          src="https://www.pngkey.com/png/full/932-9322358_vintage-pointing-hand-png.png"
          alt="pointer"
        />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && (
            <span>Thanks, I'll try to reply as soon as possible.</span>
          )}
        </form>
        <div>
          <a href="https://github.com/berkdisli">
            <img
              className="icons"
              src="https://www.picng.com/upload/github/png_github_64039.png"
              alt="github"
            />
          </a>
          <a href="https://www.linkedin.com/in/berk-disli-06aa9397/">
            <img
              className="icons"
              src="https://png2.cleanpng.com/sh/0ff08b0c031e8eae1847cbd9cda5fd50/L0KzQYi4UsAzN5dmTZGAYUK1dIW6VPNibGY6UZCEOUizRImCU8E2OWM3S6MEOEi7Q4GBTwBvbz==/5a22d434cad559.9980489315122319888308.png"
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
