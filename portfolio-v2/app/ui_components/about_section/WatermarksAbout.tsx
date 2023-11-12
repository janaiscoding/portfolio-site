import WatermarkBottomDesktop from "../WatermarkBottomDesktop";
import WatermarkBottomMobile from "../WatermarkBottomMobile";

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
      <WatermarkBottomDesktop title={"AboutMe onRead={() => setThankful(true)}"} top={"95%"} left={"60%"} />
      <WatermarkBottomMobile title={"AboutMe"} top={"97%"} left={"50%"} />
    </>
  );
};

export default WatermarksAbout;
