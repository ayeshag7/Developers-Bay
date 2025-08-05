import { FaLinkedin, FaGithub } from "react-icons/fa"; 
import ayeshaProfile from "../assets/ayesha-profile.jpeg";
import usmanProfile from "../assets/usman-profile.jpg";  

const team = [
  {
    name: "Muhammad Usman Safder",
    role: "Systems & DevOps Engineer",
    desc: `Muhammad Usman Safder is a computer-science graduate who bridges
DevOps engineering with applied machine-learning research. His toolkit spans
programming languages (Python, JavaScript/C/C++, SQL), frameworks and libraries
(PyTorch, TensorFlow, LangChain, FastAPI, React), databases (MongoDB, MySQL,
PostgreSQL), and cloud-infrastructure tooling (Docker, AWS, Azure, Jenkins,
Terraform), giving him end-to-end command from code to cloud. At Xgrid.co—a
DevOps and cloud consultancy—he fortifies Terraform modules and automation
pipelines for AWS and GCP, even supporting air-gapped deployments that demand
rigorous security. Parallel to industry work, he leads deep-learning research
at GeniSys Lab, contributing to publications in top-tier venues such as
Nature Scientific Reports and IEEE Access. From citizen-driven
traffic-violation detection systems to large-scale Urdu OCR, his projects show
a knack for translating cutting-edge AI into impactful, real-world solutions.`,
    img: usmanProfile,
    linkedin: "https://www.linkedin.com/in/usmansafderktk/",
    github: "https://github.com/usmansafdarktk",
  },
  {
    name: "Ayesha Gull",
    role: "Full-stack Developer",
    desc: `Ayesha is a Computer Science graduate who blends full-stack
engineering prowess with applied AI research. Her toolkit spans programming
languages (Python, TypeScript/JavaScript); frameworks (React, Next.js,
FastAPI); databases (PostgreSQL, MongoDB); and cloud & container platforms
(Docker, AWS, OCI), empowering her to carry ideas smoothly from prototype to
production. She has industry experience at companies like Confiz, a global
IT-services and consulting firm, where she delivered high-impact software that
automated critical business workflows. In AI, generative AI, and machine
learning, she designs and fine-tunes deep-learning pipelines ranging from
computer-vision models to RAG-powered large-language-model applications. She
turns code into outcomes that matter.`,
    img: ayeshaProfile,           
    linkedin: "https://www.linkedin.com/in/ayeshagull/",
    github: "https://github.com/ayeshag7",
  },
];

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-darkblue px-4 py-20 border-b border-gray-800">
      {/* page heading */}
      <header className="text-center mb-4">
        <h1 className="text-4xl font-bold text-white">About Us</h1>
      </header>

      <p className="text-gray-400 text-center text-sm mb-20 mt-4 mx-8 md:mx-32">
        At Developers Bay, we are an agile crew of full-stack engineers, DevOps and systems specialists, and applied-AI researchers 
        who architect, build, and operate secure cloud-native platforms, 
        taking products from rapid prototype to high-throughput production with reliability, scalability, and measurable business value.
      </p>

      {/* sub-heading + subtitle */}
      <section className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-semibold text-lightblueheader text-center mb-16">
          Meet our Team
        </h2>


        {team.map((member, idx) => (
          <article
            key={member.name}
            className="flex flex-col md:flex-row md:even:flex-row-reverse items-center gap-10 mb-20 mt-8"
          >
            {/* image (constant box, image fills with object-cover) */}
            <div className="w-full md:w-64 lg:w-72 h-56 md:h-64 lg:h-72 shrink-0 overflow-hidden rounded-lg shadow-lg">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover transition-shadow duration-300 hover:shadow-2xl"
              />
            </div>

            {/* text */}
            <div className="text-white space-y-3 max-w-prose">
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <h4 className="text-xl font-semibold text-lightblueheader">
                {member.role}
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm whitespace-pre-line">
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
