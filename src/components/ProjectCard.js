export const ProjectCard = ({projectImage, title, description, link}) => {
  return (
    <div className="flex justify-around items-center px-2 md:px-4 shadow-custom hover:scale-105 transform transition-transform duration-300 ease-out bg-white w-80 h-36 md:w-96 md:h-40 border border-gray-200 rounded-xl">

        <img className="h-20 md:h-28 border rounded-md" src={projectImage} alt="project" />

        <div className="mt-4 md:mt-2">

            <h1 className="text-lg md:text-xl font-semibold text-projectshadow mb-0">{title}</h1>

            <p className="text-xs w-48 md:text-sm text-projectparagraphtext mb-0 md:w-52">
            {description}
            </p>

            <button className="text-sm md:text-lg text-projectshadow hover:text-lightblueheader mt-0 ml-36">
                <a href={link} target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="36" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
                </a>
            </button>

        </div>

    </div>
  )
}
