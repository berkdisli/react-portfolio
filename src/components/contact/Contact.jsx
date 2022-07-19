import "./Contact.scss";

export default function Contact() {
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
        <form>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
