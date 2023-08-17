import gradient from "../../../assets/gradient1.png";
import p1 from "../../../assets/p1.png";
import p2 from "../../../assets/p2.png";
import p3 from "../../../assets/p3.png";
import p4 from "../../../assets/p4.png";
import { ProjectCard } from "../../../components/ProjectCard";

export const Five = () => {

  const titles = ["Course Cloud", "Movieverse", "Chat2PDF", "Facebook Clone"];
  const descriptions = ["An online learning platform built with React JS to browse, search, and buy courses.",
                        "A web app built with React JS and related tools to browse, search, and view movies.",
                        "A chrome extension for ChatGPT that allows users to save conversations into PDF files.",
                        "A Facebook clone made with Python, and Tkinter."];
  const links = ["https://github.com/ayeshag7/CourseCloud", "https://github.com/ayeshag7/Movieverse",
                  "https://github.com/ayeshag7/Chat2PDF", "https://github.com/ayeshag7/Shopzilla"]
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
