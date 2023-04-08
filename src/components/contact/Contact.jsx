import "./Contact.scss";
import { useState } from "react";
import { send } from "emailjs-com";

export default function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_j738hak", "template_o8u4j0c", toSend, "TFw4EGTJTBhF4ctAM")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    alert(
      "Your message has been sent successfully, I'll try to response as soon as possible."
    );
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
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
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="Your name"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="reply_to"
            placeholder="Your e-mail"
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
          />
          <button type="submit">Send</button>
        </form>
        <div>
          <a href="https://github.com/berkdisli">
            <img
              className="icons"
              src="https://www.picng.com/upload/github/png_github_64039.png"
              alt="github"
            />
          </a>
          <a href="https://www.linkedin.com/in/berkdisli/">
            <img
              className="linkedin"
              src="https://upload.wikimedia.org/wikipedia/commons/f/f8/LinkedIn_icon_circle.svg"
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
