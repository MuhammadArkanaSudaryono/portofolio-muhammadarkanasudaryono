import projects from "../data/projects";

function Projects() {
    return (
        <section
            id="projects"
            className="py-24"
        >
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-bold mb-4">
                    Projects
                </h2>

                <p className="text-slate-400 mb-12">
                    Some projects I've built while learning
                    web development.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="bg-slate-800 border border-slate-700 rounded-3xl p-6 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="h-40 rounded-2xl bg-slate-700 mb-5 flex items-center justify-center text-slate-400">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">
                                {project.title}
                            </h3>

                            <p className="text-slate-400 mb-5">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 rounded-full bg-slate-700 text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3">
                                <a
                                    href={project.github}
                                    className="text-blue-400 hover:text-blue-300"
                                >
                                    GitHub →
                                </a>

                                {/* <a
                                    href={project.demo}
                                    className="text-blue-400 hover:text-blue-300"
                                >
                                    Live Demo →
                                </a> */}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Projects;