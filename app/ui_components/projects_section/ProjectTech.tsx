import { Tech } from "@/app/utils/types";

const ProjectTech = ({ techList }: { techList: Tech[] }) => {
  return (
    <ul className="flex ul-tech text-grey dark:text-white/70 text-base gap-1 flex-wrap md:text-lg font-poppins500 mt-2">
      {techList.map((tech) => (
        <li key={tech.id}>{tech.name}</li>
      ))}
    </ul>
  );
};

export default ProjectTech;
