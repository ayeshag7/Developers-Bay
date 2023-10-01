import { Link } from "react-router-dom";
import logo from "../assets/DevelopersBay.png";

export const Footer = () => {

  const column = "my-6 mx-8 md:my-12 flex flex-col"
  const headerText = "text-white text-base font-semibold"
  const componenText = "text-gray-200 text-sm mt-2"

  return (
    <div id="main-container" className="bg-darkblue">
      <div className="footerDimensions flex justify-around flex-wrap">
        <div className="my-10">
          <Link to="/" className="flex items-center">
                <img src={logo} className="h-12 mr-3" alt="Developers Bay Logo" />
                <span className="self-center text-white text-xl font-medium whitespace-nowrap">Developers Bay</span>
          </Link>
        </div>
        <div className="flex justify-start flex-wrap text-white">
              <ul className={column}>
                <li className={headerText}>
                  Company
                </li>
                <li className={componenText}>
                  About
                </li>
                <li className={componenText}>
                  Services
                </li>
              </ul>

              <ul className={column}>
                <li className={headerText}>
                  Contact Us
                </li>
                <li className={componenText}>
                  <a target="_blank" rel="noreferrer" className="hover:underline hover:text-lightblueheader" href="mailto:developersbayy@gmail.com">Email</a>
                </li>
                <li className={componenText}>
                  Phone
                </li>
              </ul>

              <ul className={column}>
                <li className={headerText}>
                  Follow
                </li>
                <li className={componenText}>
                  Instagram
                </li>
                <li className={componenText}>
                <a target="_blank" rel="noreferrer" className="hover:underline hover:text-lightblueheader" href="https://twitter.com/ayesha_g7">Twitter</a>
                </li>
                <li className={componenText}>
                  <a target="_blank" rel="noreferrer" className="hover:underline hover:text-lightblueheader" href="https://github.com/ayeshag7">Github</a>
                </li>
                <li className={componenText}>
                  <a target="_blank" rel="noreferrer" className="hover:underline hover:text-lightblueheader"  href="https://ayeshaiq.hashnode.dev/">Blog</a>
                </li>
              </ul>

        </div>
      </div>
      <div id="copyright-container" className="copyrightDimensions bg-greyishblue">
          <p className="text-gray-200 text-xs font-thin md:font-light text-center">Copyrights 2023 @ Developers Bay</p>
      </div>
    </div>
  )
};
