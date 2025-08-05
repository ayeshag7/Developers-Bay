import gradient from "../../../assets/gradient1.png";
import p1 from "../../../assets/p1.png";
import p2 from "../../../assets/p2.png";
import p3 from "../../../assets/p3.png";
import p4 from "../../../assets/p4.png";
import { ProjectCard } from "../../../components/ProjectCard";

export const SecFive = () => {

  const titles = ["AgriSense", "CodeNest", "Course Cloud", "Movieverse"];
  const descriptions = [
    "An AI-Powered Precision Agriculture System",
    "A Platform for Collaborative Coding and Learning",
    "A Cloud-Based Learning Management System",
    "A Movie Discovery and Recommendation Platform"
  ];
  const links = ["https://github.com/ayeshag7/AgriSense-Platform", "https://github.com/ayeshag7/CodeNest", "https://github.com/ayeshag7/CourseCloud", "https://github.com/ayeshag7/Movieverse"]
  const images = [p1, p2, p3, p4];

  return (
    <main className="border border-lightblueheader bg-lightblueheader p-0" style={{ backgroundImage: `url(${gradient})` }}>
      
      <h1 className="text-3xl text-shadow md:text-4xl font-medium text-white mx-16 my-8 md:mx-32 md:mt-12 md:mb-20">Discover our Projects</h1>

      <div className="flex justify-around gap-x-6 gap-y-10 md:gap-y-12 flex-wrap items-center m-8">
            {titles.map((title, index) => (
              <ProjectCard  projectImage={images[index]} title={titles[index]} 
              description={descriptions[index]} link={links[index]}/>
            ))}
      </div>

    </main>

  )
}
