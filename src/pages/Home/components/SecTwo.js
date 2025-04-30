import gradient from "../../../assets/gradient1.png";

export const SecTwo = () => {
  return (
    <main className="border border-lightblueheader relative bg-lightblueheader p-0" style={{ backgroundImage: `url(${gradient})` }}>
      <div className="mt-12 mm:mb-16 mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-shadow text-center">Design, <span className="text-projectshadow">Develop</span>, Deliver</h1>
        <p className="text-base max-sm:mx-4 text-offwhite text-center font-normal my-8">
          We strive to fuse creativity with cutting-edge technology to 
          <br />
          be able to bring your visions to life!
        </p>
      </div>

      {/* for large screen only */}
      <div className="mm:flex mm:justify-center mm:relative hidden">

        <div id="lineDiv" className="relative bg-projectshadow h-96 w-0.5 border border-projectshadow rounded-lg"></div>

        <div id="textDiv1" className="absolute top-14 left-96 transform -translate-y-full">
          <div className="relative inline-block float-hover-group">
            {/* Circle */}
            <div className="bg-circleblue size-idle border border-dashed shadow-md shadow-projectshadow rounded-full absolute floating-circle"></div>
            {/* Text */}
            <p className="text-white text-shadow font-medium text-2xl relative z-10 pt-3 pl-6 floating-text">
              Quality Assurance
            </p>
          </div>
        </div>

        <div id="textDiv2" className="absolute top-1/2 transform -translate-y-1/2"
          style={{ right: "436px" }}>
          <div class="relative inline-flex items-center float-hover-group">
            <p class="text-white text-shadow font-medium text-2xl relative z-10 floating-text">Timely delivery</p>
            <div class="bg-circleblue size-idle border border-dashed shadow-md shadow-projectshadow rounded-full absolute -right-4 floating-circle"></div>
          </div>
        </div>
        
        <div id="textDiv3" className="absolute bottom-14 left-96 transform translate-y-full">
          <div class="relative inline-flex items-center float-hover-group">
            <p class="text-white text-shadow font-medium text-2xl relative z-10 floating-text">Custom Solutions</p>
            <div class="bg-circleblue size-idle border border-dashed shadow-md shadow-projectshadow rounded-full absolute -right-4 floating-circle"></div>
          </div>
        </div>

      </div>

      {/* for screen smaller than large */}

      <div className="hidden max-mm:flex max-mm:flex-col max-mm:items-center max-mm:gap-y-12">

        <div className="mt-12 mb-8">
          <div class="relative inline-block">
            <div class="bg-circleblue h-20 w-20 border border-dashed shadow-md shadow-projectshadow rounded-full absolute"></div>
            <p class="text-white text-shadow font-medium text-2xl relative z-10 pt-5 pl-6">Quality Assurance</p>
          </div>
        </div>
        
        <div className="my-8">
          <div class="relative inline-flex items-center">
            <p class="text-white text-shadow font-medium text-2xl relative z-10">Timely delivery</p>
            <div class="bg-circleblue h-20 w-20 border border-dashed shadow-md shadow-projectshadow rounded-full absolute -right-8"></div>
          </div>
        </div>
        

        <div className="mt-8 mb-24">
          <div class="relative inline-block">
            <div class="bg-circleblue h-20 w-20 border border-dashed shadow-md shadow-projectshadow rounded-full absolute"></div>
            <p class="text-white text-shadow font-medium text-2xl relative z-10 pt-5 pl-6">Custom Solutions</p>
          </div>
        </div>
        

      </div>

    </main>
  )
}
