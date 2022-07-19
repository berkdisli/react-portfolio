import "./Contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img
          src="https://cdn.pixabay.com/photo/2015/02/27/08/12/handshake-651818__480.png"
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
