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
          src="https://www.pngkey.com/png/full/49-495234_this-free-icons-png-design-of-handshake-003.png"
          alt=""
        />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && (
            <span>Thanks, I'll try to reply as soon as possible</span>
          )}
        </form>
      </div>
    </div>
  );
}
