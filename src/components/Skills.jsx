import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPhp,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiLaravel,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={30} /> },
  { name: "JavaScript", icon: <SiJavascript size={30} /> },
  { name: "HTML", icon: <FaHtml5 size={30} /> },
  { name: "CSS", icon: <FaCss3Alt size={30} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={30} /> },
  { name: "Laravel", icon: <SiLaravel size={30} /> },
  { name: "PHP", icon: <FaPhp size={30} /> },
  { name: "MySQL", icon: <SiMysql size={30} /> },
  { name: "Git", icon: <FaGitAlt size={30} /> },
];

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col items-center gap-4 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              {skill.icon}

              <span>
                {skill.name}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;