function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-content">
        <p>
          If you'd like to get in touch, feel free to contact me through
          the following platforms.
        </p>

        <div className="contact-info">
          <p>
            <strong>Email:</strong> shenuribuddika@gmail.com
          </p>

          <p>
            <strong>Phone:</strong> +94 72 262 1240
          </p>

          <p>
            <strong>Location:</strong> Colombo, Sri Lanka
          </p>
        </div>

        <div className="contact-links">
          <a
            href="https://github.com/shenuribuddika"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shenuribuddika"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;