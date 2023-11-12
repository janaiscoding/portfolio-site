const AboutMeText = () => {
  return (
    <article className="flex flex-col gap-2 font-poppins300 basis-full text-lg">
      <p className="text-lg">
        I believe in <span className="font-poppins500">the power</span> of
        consistency and{" "}
        <span className="font-poppins500 underline-on-hover">discipline.</span>{" "}
      </p>
      <p>
        I am an <span className="font-poppins500">engineering graduate</span>{" "}
        that loves to be an{" "}
        <span className="font-poppins500 underline-on-hover">impactful</span>{" "}
        member<br></br> of the ever-evolving field of web development.
      </p>
      <p>
        Beyond coding, I enjoy working out, playing ARPGs with my friends or
        watching a good movie.
      </p>
      <p>
        <span className="font-poppins500 underline-on-hover">Thank you</span>{" "}
        for getting to know me!
      </p>
    </article>
  );
};

export default AboutMeText;
