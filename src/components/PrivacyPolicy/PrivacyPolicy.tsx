interface PrivacyPolicyProps {}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({}) => {
  const privacyPolicyData = [
    {
      privacyTitle: "Allgemeine Hinweise",
      descriptions: [
        {
          descriptionTitle: "Überblick zum Datenschutz:",
          desciptionText:
            "Die folgenden Hinweise bieten einen klaren Überblick darüber, was mit Ihren personenbezogenen Daten geschieht, wenn Sie diese Website besuchen. Personenbezogene Daten umfassen alle Informationen, mit denen Sie persönlich identifiziert werden können.",
        },

        {
          descriptionTitle: "Weitere Informationen:",
          desciptionText:
            "Für detaillierte Informationen zum Datenschutz verweisen wir auf unsere Datenschutzerklärung, die unter diesem  aufgeführt ist.",
        },
      ],
    },

    {
      privacyTitle: "Datenerfassung auf dieser Website",
      descriptions: [
        {
          descriptionTitle: "Verantwortlicher für die Datenerfassung:",
          desciptionText: ` Die Datenverarbeitung auf dieser Website wird durch den
            Websitebetreiber durchgeführt. Die Kontaktdaten des Betreibers
            finden Sie im Impressum dieser Website.`,
        },

        {
          descriptionTitle: "Wie Ihre Daten erfasst werden: ",
          desciptionText: `Ihre Daten werden auf zwei Arten erhoben: Zum einen geben Sie uns
            Daten direkt (zum Beispiel durch Eingabe in ein Kontaktformular).
            Zum anderen werden technische Daten wie Internetbrowser,
            Betriebssystem oder Uhrzeit des Seitenaufrufs automatisch oder nach
            Ihrer Einwilligung durch unsere IT-Systeme beim Besuch der Website
            erfasst.`,
        },

        {
          descriptionTitle: "Nutzung Ihrer Daten: ",
          desciptionText: ` Wir verwenden einen Teil Ihrer Daten, um die fehlerfreie
            Bereitstellung der Website zu gewährleisten. Andere Daten können zur
            Analyse Ihres Nutzerverhaltens verwendet werden.`,
        },

        {
          descriptionTitle: "Ihre Rechte bezüglich Ihrer Daten: ",
          desciptionText: `Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
            Empfänger und den Zweck Ihrer gespeicherten personenbezogenen Daten
            zu erhalten. Sie können die Berichtigung oder Löschung dieser Daten
            verlangen und Ihre Einwilligung zur Datenverarbeitung jederzeit für
            die Zukunft widerrufen. Unter bestimmten Umständen können Sie auch
            die Einschränkung der Verarbeitung Ihrer Daten verlangen. Darüber
            hinaus haben Sie das Recht, bei der zuständigen Aufsichtsbehörde
            Beschwerde einzulegen. Bei weiteren Fragen zum Datenschutz können
            Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns
            wenden.`,
        },
      ],
    },
  ];

  return (
    <div className="uk-container  uk-container-expand">
      <div className="uk-text-center uk-text-break  uk-padding">
        <h1 className="uk-heading-large uk-heading-medium@s uk-heading-small@xs uk-margin-remove">
          Datenschutzhinweis
        </h1>
        <p className="uk-article-meta uk-text-center">Last Edited 22.12.2024</p>
      </div>

      {privacyPolicyData?.map((item, i) => (
        <article className="uk-article ">
          {item.privacyTitle && (
            <h1 key={i} className="uk-card-title uk-text-bold">
              {item?.privacyTitle}
            </h1>
          )}

          {item?.descriptions.map((arr, index) => (
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
      ))}
    </div>
  );
};

export default PrivacyPolicy;
