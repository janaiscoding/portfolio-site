import WatermarkBottomDesktop from "../watermarks_symbols/WatermarkBottomDesktop";
import WatermarkBottomMobile from "../watermarks_symbols/WatermarkBottomMobile";

const WatermarksAbout = () => {
  return (
    <>
      <WatermarkBottomDesktop
        title={"AboutMe onRead={() => setThankful(true)}"}
      />
      <WatermarkBottomMobile title={"AboutMe"} />
    </>
  );
};

export default WatermarksAbout;
