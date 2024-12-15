import "./_bulletpointList.scss";

import { BulletPoint } from "./BulletpointList.types";

interface BulletpointListProps {
  bulletPointData: BulletPoint[];
}

const BulletpointList: React.FC<BulletpointListProps> = ({
  bulletPointData,
}) => {
  return (
    <article className="bulletPoint ">
      <ul className="features-list  ">
        {bulletPointData.map((bulletPoint, i) => (
          <li
            key={i}
            className={`${bulletPoint?.highlight && "bulletPoint__highlight"}`}
          >
            <img
              className={`bulletPoint__icon ${
                bulletPoint?.icon?.backgroundColor &&
                "bulletPoint__icon-background"
              }`}
              src={bulletPoint?.icon?.iconName}
              alt={bulletPoint?.icon?.iconName}
            />
            <div>
              <h4 className="bulletPoint__title">
                {bulletPoint?.title?.name} {bulletPoint?.title?.text}
              </h4>
              <p className="bulletPoint__copy">{bulletPoint?.copy}</p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default BulletpointList;
