function Hero() {
    return (
        <section className="min-h-screen flex items-center relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT SIDE */}
                    <div>

                        <h1 className="mt-6 text-5xl md:text-7xl font-bold text-white leading-tight">
                            Hi, I'm
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Muhammad Arkana Sudaryono
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-slate-300 max-w-2xl">
                            A passionate web developer who enjoys building
                            responsive and user-friendly applications using
                            React, Laravel, and modern web technologies.
                        </p>

                        <div className="flex gap-4 flex-wrap mt-6">
                            <span className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm">
                                React
                            </span>

                            <span className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm">
                                Laravel
                            </span>

                            <span className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm">
                                Student Developer
                            </span>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                            >
                                View Projects
                            </a>

                            <a
                                href="#contact"
                                className="px-6 py-3 rounded-xl border border-slate-600 text-white hover:bg-slate-800 transition"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="hidden lg:flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-cyan-500/30 blur-3xl rounded-full"></div>

                            <img
                                src="/images/Foto Arkan.jpg"
                                alt="Muhammad Arkana Sudaryono"
                                className="relative w-80 h-80 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;