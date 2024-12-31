import { ScrollRestoration } from "react-router-dom";
import FooterSection from "../Block/FooterSection/FooterSection";
import LegalNotice, {
  LegalNoticeTextTypes,
} from "../components/LegalNoticeText.tsx/LegalNoticeText";

interface LegalNoticeProps {}

const LegalNoticePage: React.FC<LegalNoticeProps> = ({}) => {
  const legalNoticeText: LegalNoticeTextTypes[] = [
    {
      pageTitle: "Impressum",
    },

    {
      descriptions: [
        {
          descriptionTitle: "Angaben gemäß § 5 TMG",

          desciptionText: (
            <>
              Pako-S Transporte <br />
              Gewerbestr. 60/2
              <br />
              75015 Bretten
            </>
          ),
        },
        {
          descriptionTitle: "Vertreten durch:",

          desciptionText: "Tanja Kostadinova",
        },
        {
          descriptionTitle: "Kontakt",

          desciptionText: (
            <>
              Telefon: + 49 163 332-2322 <br />
              E-Mail: info@pakos.de
            </>
          ),
        },
        {
          descriptionTitle: "Registereintrag",
          desciptionText: (
            <>
              Registergericht: Amtsgericht Mannheim
              <br />
              Registernummer: HRB 240073
            </>
          ),
        },
        {
          descriptionTitle: "Umsatzsteuer-ID",
          desciptionText: (
            <>
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz
              <br />
              DE218910163
            </>
          ),
        },
      ],
    },

    {
      privacyTitle: "Haftung für Inhalte",
      descriptions: [
        {
          desciptionText:
            "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
        },

        {
          desciptionText:
            "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
        },
      ],
    },

    {
      privacyTitle: "Haftung für Links",
      descriptions: [
        {
          desciptionText:
            "Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.",
        },

        {
          desciptionText:
            "Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
        },
      ],
    },

    {
      privacyTitle: "Urheberrecht",
      descriptions: [
        {
          desciptionText:
            "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
        },

        {
          desciptionText:
            "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",
        },
      ],
    },
  ];
  return (
    <div>
      <LegalNotice legalNoticeText={legalNoticeText} />
      <br />
      <ScrollRestoration />

      <FooterSection />
    </div>
  );
};

export default LegalNoticePage;
