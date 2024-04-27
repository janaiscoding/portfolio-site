import { Description, ProjectType } from "@/app/utils/types";

const ProjectDetails = ({ descriptionList }: { descriptionList: Description[] }) => {
  return (
    <ul className="font-poppins my-4">
      {descriptionList.map((detail) => (
        <li key={detail.id} className="flex gap-4 items-center text-lg py-1">
          <p className="basis-11/12">
            {" "}
            <span className="text-blue">•</span> {detail.text}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ProjectDetails;
