const AboutMeText = () => {
  return (
    <article className="flex flex-col gap-2 font-poppins300 basis-full text-lg">
      <p>
        {" "}
        Hey there, my name is Jana Istrate, I am a Full-Stack Developer focused on Frontend living
        in Germany.
      </p>
      <p>
        {" "}
        I believe in the power of consistency and{" "}
        <span className="font-poppins500 underline-on-hover dark:text-brightblue dark:hover:text-black">
          discipline
        </span>{" "}
        , which is why reading documentation, debugging and practicing hands-on
        with new technologies is my preferred method of learning.
      </p>
      <p>
        By contributing to open source projects, I am continously improving my
        teamwork skills, as well as the technical ones, as I am interested to be
        active member in the React Ecosystem.
      </p>
      <p>
        Currently looking for an opportunity to work in a challenging
        environment, where I can provide value and grow my skills even further.
      </p>
      <p>
        {" "}
        <span className="font-poppins500 underline-on-hover dark:text-brightblue dark:hover:text-black">
          Thank you
        </span>{" "}
        for getting to know me!
      </p>
    </article>
  );
};

export default AboutMeText;
