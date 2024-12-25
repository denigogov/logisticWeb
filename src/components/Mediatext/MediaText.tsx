import { AboutUsTypes } from "../../Block/About/About.data";
import BulletpointList from "../BulletpointList/BulletpointList";
import Content from "../Content/Content";
import "./_mediaText.scss";

interface MediaTextProps {
  aboutUsData: AboutUsTypes;
}

const MediaText: React.FC<MediaTextProps> = ({ aboutUsData }) => {
  const bulletPointData = aboutUsData?.bulletPointData;
  const content = aboutUsData?.contentData ?? {};

  return (
    <section className="mediaText">
      <div className="uk-container uk-container-expand ">
        <div className="uk-grid ">
          <div className="uk-width-1-2@m  mediaText__content">
            <Content contentData={content} />
          </div>
          <div className="uk-width-1-2@m  ">
            <BulletpointList bulletPointData={bulletPointData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaText;
