interface SlideShowProps {
  children: ReactNode;
}
import React, { ReactNode } from "react";

const SlideShow: React.FC<SlideShowProps> = ({ children }) => {
  return (
    <div>
      <div
        className="uk-position-relative uk-visible-toggle"
        tabIndex={-1}
        uk-slideshow=" ratio: 3:3; autoplay: true; autoplay-interval: 4000"
        data-uk-slideshow
      >
        <div className="uk-slideshow-items">
          {React.Children?.map(children, (child, index) => (
            <div key={index}>{child}</div>
          ))}
        </div>

        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          data-uk-slidenav-previous
          data-uk-slideshow-item="previous"
        ></a>
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          data-uk-slidenav-next
          data-uk-slideshow-item="next"
        ></a>
      </div>
    </div>
  );
};

export default SlideShow;
