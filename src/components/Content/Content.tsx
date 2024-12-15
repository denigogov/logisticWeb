import "./_content.scss";
import { ContentDataTypes } from "./content.types";
interface ContentProps {
  contentData: ContentDataTypes;
}

const Content: React.FC<ContentProps> = ({ contentData }) => {
  return (
    <div className="content">
      <h2 className="uk-heading-xsmall uk-text-bold content__title ">
        {contentData?.title ?? ""}
      </h2>
      <p className="content-subtitle ">{contentData?.subTitle ?? ""}</p>
      <p className="content__copy-text">{contentData?.text ?? ""}</p>
    </div>
  );
};

export default Content;
