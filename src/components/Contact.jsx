import {
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Let's Connect
        </h2>

        <p className="text-slate-400 mb-8">
          Interested in working together or have
          a question? Feel free to reach out.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="mailto:muhammadarkanasudaryono@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
          >
            <FaEnvelope />
            Email
          </a>

          <a
            href="https://github.com/MuhammadArkanaSudaryono"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://wa.me/6282114829320"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 hover:bg-green-600 transition"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          <a
            href="https://instagram.com/dodonzet"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 hover:bg-pink-600 transition"
          >
            <FaInstagram />
            Instagram
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;