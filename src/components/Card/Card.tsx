import "./_card.scss";
import LazyLoadingImage from "../../wrappers/LazyLoadingImage";

import CardTypes from "./card.types";
interface CardProps {
  cardData: Partial<CardTypes>;
}

const Card: React.FC<CardProps> = ({ cardData }) => {
  return (
    <article className="card">
      <div className="card__image">
        <LazyLoadingImage
          alt={cardData?.image ?? ""}
          src={cardData?.image ?? ""}
        />
      </div>
      {cardData?.text && <p className="card__title">{cardData?.text}</p>}

      {cardData.hoverText && (
        <p className="card__hover-text">{cardData.hoverText}</p>
      )}
    </article>
  );
};

export default Card;
