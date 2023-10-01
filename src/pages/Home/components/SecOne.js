import { Link } from "react-router-dom";
import codeImg from "../../../assets/code image.png";

export const SecOne = () => {
  return (
    <main className=".sectionOne bg-darkblue">
      <section className="flex flex-col lg:flex-row lg:justify-around items-center lg:gap-x-16 mt-8 px- lg:px-4">

        {/* Text Container */}
        <div className="my-5 mx-5 lg:mx-0">

            {/* Header Text */}
            <h1 className="text-3xl mb-2 md:text-4xl font-medium text-lightblueheader md:mb-4">Providing Tech Solutions</h1>
            <h1 className="text-3xl md:text-4xl font-medium text-white md:mb-4">That matter to You</h1>

            {/* Paragraph Text */}
            <p className="text-base w-60 md:text-lg text-heroparagraphtext mt-6 mb-8 md:w-96">
            Delivering solutions that are not just technologically advanced but also tailored to meet your specific needs and goals.
            </p>

            {/* Explore Button */}
            <Link to="">
              <button className="bg-white text-herobuttontext rounded-lg px-2 py-1 text-base md:px-4 md:py-1.5 md:text-xl font-medium">Explore</button>
            </Link>

        </div>
        
        {/* Image Container */}
        <div className="my-5 lg:mx-0 mx-2 max-w-lg lg:max-w-xl">

            <img className="max-h-full" src={codeImg} alt="Hero" />

        </div>
      </section>
    </main>
  )
}
