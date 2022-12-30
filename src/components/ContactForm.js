import "./ContactFormStyle.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>Send a message to us!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" row="4"></textarea>
      </form>
    </div>
  );
}

export default ContactForm;
