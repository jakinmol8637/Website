import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure form.current is not null before sending the form data
    if (form.current) {
      emailjs
        .sendForm('service_t44igm4', 'template_ufzug1z', form.current, {
          publicKey: 'lixWvJxAuS-_XVHmI',
        })
        .then(
          () => {
            setStatus('Message sent successfully!');
            form.current?.reset(); // Optional: Reset the form after submission
          },
          (error) => {
            setStatus('Failed to send message.');
            console.error('EmailJS Error:', error.text);
          }
        );
    } else {
      setStatus('Form not found.');
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        
        <label>Email</label>
        <input type="email" name="user_email" required />
        
        <label>Message</label>
        <textarea name="message" required />
        
        <button type="submit">Send</button>
      </form>
      
      {status && <p>{status}</p>}
    </div>
  );
};

export default Contact;
