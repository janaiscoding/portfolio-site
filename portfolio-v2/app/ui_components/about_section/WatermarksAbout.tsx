import WatermarkBottomDesktop from "../WatermarkBottomDesktop";
import WatermarkBottomMobile from "../WatermarkBottomMobile";
import WatermarkTopDesktop from "../WatermarkTopDesktop";
import WatermarkTopMobile from "../WatermarkTopMobile";

const WatermarksAbout = () => {
  return (
    <>
      {/* <WatermarkTopMobile
        title={"AboutMe onRead={()=>{ setImpressed(true)} }"}
        top={"5%"}
        left={"5%"}
      />
      <WatermarkTopDesktop
        title={"AboutMe onRead={()=>{ setImpressed(true)} }"}
        top={"5%"}
        left={"10%"}
      /> */}
      <WatermarkBottomDesktop title={"AboutMe onRead={() => setThankful(true)}"} top={"95%"} left={"65%"} />
      <WatermarkBottomMobile title={"AboutMe"} top={"95%"} left={"45%"} />
    </>
  );
};

export default WatermarksAbout;
