import { Tab, TabPanel, Tabs, TabsList } from "@mui/base";
import { info, image } from "../constants/index";
import "./video-section.css";
import { GoVideo } from "react-icons/go";
import { AiOutlineControl } from "react-icons/ai";
import { BsBoxes } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

export const VideoSection = () => {
  const {
    videoTitle1,
    video,
    videoTitle2,
    videoTitle3,
    videoTitle4,
    videoDesc1,
    videoDesc2,
    videoDesc3,
  } = info;
  const { videoCover, underline } = image;
  return (
    <div className="bg-purple video-section bg-left-top bg-no-repeat pt-5">
      <div className="mx-auto container flex-col  items-center justify-between p-6 ">
        <div className="flex flex-col items-center justify-center text-white pb-5">
          <h2 className="text-4xl relative">
            {videoTitle1}
            <img src={underline} alt="" className="absolute right-10" />
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div>
            <div className="before:absolute before:content-[''] before:w-1 before:h-60 before:bg-grey"></div>
            <Tabs defaultValue={0} orientation="vertical" className="flex pl-2">
              <TabsList className="flex flex-col items-start pl-2 gap-10">
                <div>
                  <Tab className="text-white text-xl flex items-center gap-3">
                    {" "}
                    <span className="text-4xl">
                      <GoVideo />
                    </span>{" "}
                    {videoTitle2}
                  </Tab>
                  <TabPanel className="text-base text-tabs pt-3" value={0}>
                    {videoDesc1}
                  </TabPanel>
                </div>
                <div>
                  <Tab className="text-white text-xl flex items-center gap-3">
                    <span className="text-4xl">
                      <AiOutlineControl />
                    </span>{" "}
                    {videoTitle3}
                  </Tab>
                  <TabPanel className="text-base text-tabs pt-3" value={1}>
                    {videoDesc2}
                  </TabPanel>
                </div>
                <div>
                  <Tab className="text-white text-xl flex items-center gap-3">
                    <span className="text-4xl">
                      <BsBoxes />
                    </span>{" "}
                    {videoTitle4}
                  </Tab>
                  <TabPanel className="text-base text-tabs pt-3" value={2}>
                    {videoDesc3}
                  </TabPanel>
                </div>
              </TabsList>
            </Tabs>
          </div>

          <div className="w-full relative">
            <span className="absolute left-80 top-60 text-xl flex items-center justify-center rounded-full bg-white text-buttonColor w-16 h-16 bg-white ">
              <FaPlay />
            </span>
            <a href={video} target="_blank" rel="noopener noreferrer">
            <img
              src={videoCover}
              alt=""
              className="video-cover bg-videocover bg-no-repeat bg-center bg-bottom"
            ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
