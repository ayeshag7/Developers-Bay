export const ServiceCard = ({icon, serviceText}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6 bg-projectshadow h-44 w-44 border border-projectshadow rounded-xl shadow-md shadow-gray-600">
        {icon}
        <p className="text-xs text-center font-light text-white w-40 px-4">{serviceText}</p>
    </div>
  )
}
