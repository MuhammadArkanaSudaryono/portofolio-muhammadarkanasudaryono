function About() {
  return (
    <section
      id="about"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-lg leading-relaxed text-slate-400 max-w-3xl">
          Saya adalah siswa yang memiliki minat dalam
          pengembangan web dan teknologi modern.

          Saat ini saya fokus mempelajari React,
          Laravel, dan pengembangan aplikasi web yang
          responsif, mudah digunakan, serta memiliki
          tampilan yang profesional.

          Saya senang mempelajari teknologi baru dan
          terus mengembangkan keterampilan melalui
          berbagai project yang saya kerjakan.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <h3 className="text-3xl font-bold text-blue-400">
              3+
            </h3>
            <p className="text-slate-400">
              Projects Built
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <h3 className="text-3xl font-bold text-blue-400">
              React
            </h3>
            <p className="text-slate-400">
              Frontend Focus
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <h3 className="text-3xl font-bold text-blue-400">
              Laravel
            </h3>
            <p className="text-slate-400">
              Backend Experience
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;