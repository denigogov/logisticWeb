import { ScrollRestoration } from "react-router-dom";
import FooterSection from "../Block/FooterSection/FooterSection";
import LegalNotice, {
  LegalNoticeTextTypes,
} from "../components/LegalNoticeText.tsx/LegalNoticeText";

export type PrivacyPolicyType = {
  hideFooter?: boolean;
  disableScrollTop?: boolean;
};

interface PrivacyPolicyProps {
  privacySetup?: PrivacyPolicyType;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ privacySetup }) => {
  const legalNoticeText: LegalNoticeTextTypes[] = [
    {
      pageTitle: "Datenschutzhinweis",
      lastEdited: "Last Edited  22.02.2022",
    },

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
    <div>
      <LegalNotice legalNoticeText={legalNoticeText} />
      <br />
      {/* nativ component to scroll on top when u come to some page  ! */}
      {privacySetup?.disableScrollTop || <ScrollRestoration />}{" "}
      {/*  Scroll to top as default */}
      {privacySetup?.hideFooter || <FooterSection />}{" "}
      {/*  Footer Display  as default */}
    </div>
  );
};

export default PrivacyPolicy;
