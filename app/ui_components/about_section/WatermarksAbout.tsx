import WatermarkBottomDesktop from "../WatermarkBottomDesktop";
import WatermarkBottomMobile from "../WatermarkBottomMobile";

const WatermarksAbout = () => {
  return (
    <>
      <WatermarkBottomDesktop
        title={"AboutMe onRead={() => setThankful(true)}"}
        top={"95%"}
        left={"60%"}
      />
      <WatermarkBottomMobile title={"AboutMe"} top={"97%"} left={"50%"} />
    </>
  );
};

export default WatermarksAbout;
