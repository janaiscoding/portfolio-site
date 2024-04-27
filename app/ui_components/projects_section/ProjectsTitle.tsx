import Heading from "../Heading";

const ProjectsTitle = () => {
  return (
    <>
      <Heading title={"Projects"} linkTo={"/#projects"} />
      <h1 className="text-xl text-grey dark:text-white/90 font-overpass600">
        Follow my{" "}
        <a
          target="_blank"
          href="https://www.github.com/janaiscoding"
          className="text-blue hover:text-brightblue dark:text-brightblue dark:hover:text-blue"
        >
          GitHub
        </a>{" "}
        to see what I&apos;m currently working on!
      </h1>
    </>
  );
};

export default ProjectsTitle;
