import { SectionOne, Two, Three, Four, Five } from "./components";
import mongo from "../../assets/monogdb.png";
import git from "../../assets/git.png";
import redux from "../../assets/redux.png";
import docker from "../../assets/docker.png";
import chatgpt from "../../assets/chatgpt.png";

export const HomePage = () => {
  return (
    <>
      <SectionOne/>
      <Two/>
      <Three/>
      <Four/>
      <div className="stackDimensions bg-projectshadow">
        <div className="flex justify-around items-center flex-wrap">
          <img className="h-24 w-24 md:h-28 md:w-28" src={mongo} alt="mongo db" />
          <img className="h-16 w-16 md:h-20 md:w-20" src={git} alt="git" />
          <img className="h-8 w-8 md:h-12 md:w-12" src={redux} alt="redux" />
          <img className="h-12 w-12 md:h-16 md:w-16" src={docker} alt="docker" />
          <img className="h-12 w-12 md:h-16 md:w-16" src={chatgpt} alt="chatgpt" />
        </div>
      </div>
      <Five/>
    </>
  )
}
