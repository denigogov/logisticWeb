import { Fragment } from "react/jsx-runtime";

type LegalNoticeDescriptionTypes = {
  descriptionTitle?: string;
  desciptionText?: string | React.ReactNode;
};

export type LegalNoticeTextTypes = {
  pageTitle?: string;
  lastEdited?: string;
  privacyTitle?: string;
  descriptions?: LegalNoticeDescriptionTypes[];
};

interface LegalNoticeProps {
  legalNoticeText: LegalNoticeTextTypes[];
}

const LegalNotice: React.FC<LegalNoticeProps> = ({ legalNoticeText }) => {
  return (
    <div className="uk-container  uk-container-expand">
      {legalNoticeText?.map((item, i) => (
        <Fragment key={i}>
          <div className="uk-text-center uk-text-break  uk-padding">
            {item?.pageTitle && (
              <h1 className="uk-heading-large uk-heading-medium@s uk-heading-small@xs uk-margin-remove">
                {item?.pageTitle}
              </h1>
            )}
            {item?.lastEdited && (
              <p className="uk-article-meta uk-text-center">
                {item?.lastEdited}
              </p>
            )}
          </div>

          <article className="uk-article ">
            {item?.privacyTitle && (
              <h1 className="uk-card-title uk-text-bold">
                {item?.privacyTitle}
              </h1>
            )}

            {item?.descriptions?.map((arr, index) => (
              <dl
                key={index}
                className="uk-description-list uk-description-list-divider"
              >
                {arr?.descriptionTitle && (
                  <dt style={{ fontWeight: 700 }}>{arr?.descriptionTitle} </dt>
                )}
                {arr?.desciptionText && <dd>{arr?.desciptionText}</dd>}
              </dl>
            ))}
          </article>
        </Fragment>
      ))}
    </div>
  );
};

export default LegalNotice;
