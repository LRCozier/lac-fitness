import ContactForm from "../components/ui/contactform";

const Contact = () => {
  return (
    <div className="section section-dark animate-fade-in">
      <div className="container">
        <div className="text-center">
          <h1 className="page-title">GET IN TOUCH</h1>
          <p className="section-text">Ready to commit to real strength? Fill out the form below to book a free consultation.</p>
        </div>
        <div className="contact-form-container">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
