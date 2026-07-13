import certificates from "../data/certificates";

function Certificates() {
    return (
        <section
            id="certificates"
            className="py-24"
        >
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-bold mb-4">
                    Certificates
                </h2>

                <p className="text-slate-400 mb-12">
                    Certifications that validate my learning journey
                    and technical skills.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {certificates.map((certificate) => (

                        <div
                            key={certificate.title}
                            className="bg-slate-800 border border-slate-700 rounded-3xl p-6 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300"
                        >

                            <div className="overflow-hidden rounded-2xl h-44 mb-5">
                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                                />
                            </div>

                            <h3 className="text-xl font-bold">
                                {certificate.title}
                            </h3>

                            <p className="text-blue-400 mt-1">
                                {certificate.issuer}
                            </p>

                            <p className="text-slate-400 text-sm mt-2">
                                {certificate.date}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-5 mb-6">

                                {certificate.skills.map((skill) => (

                                    <span
                                        key={skill}
                                        className="px-3 py-1 rounded-full bg-slate-700 text-sm"
                                    >
                                        {skill}
                                    </span>

                                ))}

                            </div>

                            <a
                                href={certificate.credential}
                                target="_blank"
                                rel="noreferrer"
                                className="text-cyan-400 hover:text-cyan-300"
                            >
                                View Credential →
                            </a>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Certificates;