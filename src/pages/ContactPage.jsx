import { useState } from "react";

const ContactPage = () => {
  const [isSending, setIsSending] = useState(false); // button state
  const [submitted, setSubmitted] = useState(false); // show success text

  const handleSubmit = (e) => {
    e.preventDefault();

    // hide the old confirmation (if the user resubmits)
    setSubmitted(false);
    setIsSending(true);

    const form = e.currentTarget;           // keep reference for reset()

    // simulate an async request
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
      form.reset();                         // clear inputs
    }, 2000);
  };

  return (
    <main className="min-h-screen flex justify-center items-start bg-darkblue px-12 py-16 border-b border-gray-800">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-white text-lg mb-8">
          Reach out to us through the form below or at{" "}
          <a
            href="mailto:developersbayy@gmail.com"
            className="text-lightblueheader underline hover:text-blue-400"
          >
            developersbayy@gmail.com
          </a>
          .
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
          <textarea
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            rows={4}
          ></textarea>
          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-lightblueheader text-white font-semibold py-2 px-2 rounded-lg transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSending ? "Sending…" : "Send Message"}
          </button>
        </form>
        {submitted && (
          <p className="mt-4 text-green-500">
            Thank you! Your message has been sent.
          </p>
        )}
      </div>
    </main>
  );
};

export default ContactPage;