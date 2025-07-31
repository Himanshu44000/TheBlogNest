import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_l2wiu8o",
      "template_dfe38m5",
      form.current,
      "hyVyw5XBDPamgnK1F"
    )
    .then((result) => {
      alert("Message sent successfully!");
      form.current.reset();
    }, (error) => {
      console.error(error.text);
      alert("Error sending message. Try again.");
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-32">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-4">Have a question or feedback? We would love to hear from you.</p>

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input className="w-full p-2 border-2" type="text" name="user_name" required placeholder="Your Name" />
        <input className="w-full p-2 border-2" type="email" name="user_email" required placeholder="Your Email" />
        <textarea className="w-full p-2 border-2" name="message" rows="5" required placeholder="Your Message"></textarea>
        <button type="submit" className="px-4 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-700">
          Send Message
        </button>
      </form>

    </div>
  );
}

export default ContactUs;