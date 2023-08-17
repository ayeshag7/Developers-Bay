import gradient from "../../../assets/gardient2.png"
import mainlg from "../../../assets/DevelopersBayBlue.png";
import js from "../../../assets/javascript.png";
import python from "../../../assets/python.png";
import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import ts from "../../../assets/typescript.png";
import react from "../../../assets/react.png";
import tailwind from "../../../assets/tailwind.png";
import bootstrap from "../../../assets/bootstrap.png";
import selenium from "../../../assets/selenium.png";
import next from "../../../assets/next.png";
import mysql from "../../../assets/mysql.png";

export const Four = () => {
  return (
    <main className="border border-stacklight relative bg-lightblueheader p-0" style={{ backgroundImage: `url(${gradient})` }}>

      <div className="flex justify-around mt-20 px-12">

        {/* stack div */}
        <div className="hidden md:block md:relative">

          {/* orbits */}
          <div id="circleOuter" className="relative rounded-full border border-orbitcolor"
          style={{ height: "480px", width: "480px" }}>

            <div id="orbit2c1" className="flex justify-center items-center absolute bg-white h-20 w-20 rounded-full"
            style={{top:'-36px', left:'194px'}}>
                <img className="h-12 w-12" src={react} alt="react logo" />
            </div>

            <div id="orbit2c2" className="flex justify-center items-center absolute top-24 bg-white h-20 w-20 rounded-full"
            style={{left:'-24px'}}>
                <img className="h-12 w-12" src={next} alt="next logo" />
            </div>

            <div id="orbit2c3" className="flex justify-center items-center absolute top-24 bg-white h-20 w-20 rounded-full"
            style={{right: '-16px'}}>
                <img className="h-12 w-12" src={tailwind} alt="tailwind logo" />
            </div>

            <div id="orbit2c4" className="flex justify-center items-center absolute top-80 bg-white h-20 w-20 rounded-full"
            style={{left:'-32px'}}>
                <img className="h-12 w-12" src={bootstrap} alt="bootstrap logo" />
            </div>

            <div id="orbit2c5" className="flex justify-center items-center absolute top-96 right-10 bg-white h-20 w-20 rounded-full">
                <img className="h-12 w-12" src={selenium} alt="selenium logo" />
            </div>

            <div id="orbit2c5" className="flex justify-center items-center absolute bg-white h-20 w-20 rounded-full"
            style={{bottom:'-64px', left:'194px'}}>
                <img className="h-12 w-12" src={mysql} alt="mysql logo" />
            </div>

          </div>
          
          <div id="circleInner" className="absolute rounded-full border border-orbitcolor"
          style={{ height: "336px", width: "336px", top: "68px", left:"68px" }}>

            <div id="orbit1c1" className="flex justify-center items-center absolute bottom-64 left-8 bg-white h-20 w-20 rounded-full">
                <img className="h-12 w-12" src={js} alt="javascript logo" />
            </div>

            <div id="orbit1c2" className="flex justify-center items-center absolute bottom-64 left-52 bg-white h-20 w-20 rounded-full">
                <img className="h-12 w-12" src={python} alt="javascript logo" />
            </div>

            <div id="orbit1c3" className="flex justify-center items-center absolute top-44 left-72 bg-white h-20 w-20 rounded-full">
                <img className="h-12 w-12" src={html} alt="javascript logo" />
            </div>

            <div id="orbit1c4" className="flex justify-center items-center absolute top-72 left-24 bg-white h-20 w-20 rounded-full">
                <img className="h-12 w-12" src={css} alt="javascript logo" />
            </div>

            <div id="orbit1c5" className="flex justify-center items-center absolute top-40 right-72 bg-white h-20 w-20 rounded-full">
                <img className="h-12 w-12" src={ts} alt="javascript logo" />
            </div>

          </div>
          

          <div className="absolute flex justify-center items-center top-44 left-44 bg-white h-32 w-32 rounded-full ">
              <img className="h-20 w-20" src={mainlg} alt="main logo" />
          </div>

        </div>

        {/* text div */}
        <div className="flex flex-col items-start m-8">

          <div className="flex justify-start gap-x-2 items-center">
            <div className="bg-projectshadow h-7 w-1.5"></div>
            <p className="text-lg text-projectshadow font-bold">Robust & Cutting Edge</p>
          </div>

          <h1 className="text-6xl font-bold text-headertechstack mt-6 mb-4">Our Tech 
            <br />
            Stack</h1>

          <p className="text-sm font-normal text-projectshadow w-52">
          We utilize these technologies and tools to provide high quality and diverse services. Moreover, we at Developers Bay are committed to continuously improving and optimizing our tech stack to stay ahead of the curve and deliver the best possible experience to our valued users. 
          </p>

          <div className="flex justify-start items-center gap-x-1 mt-8">
            <p className="text-xl text-projectshadow font-bold">Explore more</p>
            <i class="text-projectshadow text-2xl bi bi-caret-right-fill"></i>
          </div>

        </div>
      </div>
      
    </main>
  )
}
