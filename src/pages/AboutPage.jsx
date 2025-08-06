import { FaLinkedin, FaGithub } from "react-icons/fa"; 
import team from "../constants"
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

const AboutPage = () => {

  const aboutLine = [
    { text: "Build",        className: "text-white" },
    { text: "innovative",   className: "text-white" },
    { text: "apps",         className: "text-white" },
    { text: "with",         className: "text-white" },
    { text: "Developers",   className: "text-lightblueheader" },
    { text: "Bayy.",        className: "text-lightblueheader" },
  ];

  return (
    <main className="bg-darkblue px-4 pt-2 pb-12 border-b border-t border-gray-800">

      {/* page heading */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-gray-400 text-sm text-center">All your tech needs in one place</p>
        <header className="text-center mb-2">
          <TypewriterEffectSmooth
            words={aboutLine}
            className="justify-center"
            cursorClassName="bg-lightblueheader"
          />
        </header>
        <p className="text-gray-400 text-sm text-center px-4 md:px-32">At Developers Bay, we are an agile crew of full-stack engineers, DevOps and systems specialists, and applied-AI researchers who architect, build, and operate secure cloud-native platforms, taking products from rapid prototype to high-throughput production with reliability, scalability, and measurable business value.</p>
      </div>

      {/* sub-heading + subtitle */}
      <section className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-semibold text-lightblueheader text-center mb-20">
          Meet our Team
        </h2>


        {team.map((member, idx) => (
          <article
            key={member.name}
            className="flex flex-col md:flex-row md:even:flex-row-reverse items-center gap-10 mb-20 mt-8"
          >
            {/* image */}
            <div className="w-full md:w-64 lg:w-72 h-56 md:h-64 lg:h-72 shrink-0 rounded-lg shadow-lg bg-gray-900 border-r-2 border-b-2 border-lightblueheader">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full rounded-lg object-contain transition-shadow duration-300 hover:shadow-2xl"
              />
            </div>

            {/* text */}
            <div className="text-white space-y-3 max-w-prose">
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <h4 className="text-xl font-semibold text-lightblueheader">
                {member.role}
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm text-justify">
                {member.desc}
              </p>

              {/* socials */}
              <div className="flex gap-4 pt-2">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lightblueheader transition"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <FaLinkedin size={22} />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lightblueheader transition"
                  aria-label={`${member.name} on GitHub`}
                >
                  <FaGithub size={22} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default AboutPage;
