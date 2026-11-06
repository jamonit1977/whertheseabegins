import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { canonical } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy policy — Where the sea begins" },
      { name: "description", content: "How Where the sea begins collects, uses and protects the personal data you share when you enquire about a stay." },
      { property: "og:title", content: "Privacy policy — Where the sea begins" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: canonical("/privacy"),
  }),
  component: Privacy,
});

// TODO (owner): add the legal name and tax ID (NIF/CIF) of the data controller and a postal
// address in the "Who is responsible" section, and have the final text reviewed by a lawyer.

function Privacy() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="5 November 2026"
      intro="We only ask for the details we need to answer your enquiry and arrange your stay. This page explains what we collect, why, and the rights you have under the EU General Data Protection Regulation (GDPR) and Spanish data protection law (LOPDGDD)."
    >
      <LegalSection heading="Who is responsible">
        <p>
          Where the sea begins, Chiclana de la Frontera, Cádiz (Spain), is the controller of your personal data. You can contact us about
          anything in this policy at <a href="mailto:moonpixi@hotmail.com">moonpixi@hotmail.com</a>.
        </p>
      </LegalSection>

      <LegalSection heading="What we collect">
        <p>When you send an enquiry through the <Link to="/contact">request form</Link> we receive:</p>
        <ul>
          <li>your name and email address;</li>
          <li>the number of guests and your arrival and departure dates, if you give them;</li>
          <li>anything you write in the wishes box, such as requests for a chef, chauffeur or childcare.</li>
        </ul>
        <p>Please do not include sensitive information, such as health details, unless it is needed for your stay.</p>
      </LegalSection>

      <LegalSection heading="Why we use it">
        <p>
          We use your details only to reply to your enquiry, prepare a proposal for your stay and, if you go ahead, arrange it. The legal basis is
          your consent when you send the form (Article 6.1.a GDPR) and, once you ask us to prepare a stay, the steps needed before a contract
          (Article 6.1.b). We do not use your details for automated decisions, and we do not send marketing emails unless you ask for them.
        </p>
      </LegalSection>

      <LegalSection heading="Who receives it">
        <p>We do not sell your data. It passes only to the services that help us receive and answer your enquiry:</p>
        <ul>
          <li>
            <strong>FormSubmit</strong> (formsubmit.co), the service that delivers the contact form to our inbox. It handles the enquiry only to
            forward it by email.
          </li>
          <li>
            <strong>Our email provider</strong>, where your enquiry and our replies are stored.
          </li>
          <li>
            <strong>Our website host</strong>, which processes technical information such as your IP address to serve pages and keep the site secure.
          </li>
        </ul>
        <p>
          Some of these providers may process data outside the European Economic Area. Where they do, we rely on safeguards recognised by the GDPR,
          such as the European Commission's standard contractual clauses or an adequacy decision.
        </p>
      </LegalSection>

      <LegalSection heading="How long we keep it">
        <p>
          If no stay follows, we delete your enquiry within 12 months. If you book, we keep the records we are legally required to keep, including
          guest registration and tax records, for the periods set by law.
        </p>
      </LegalSection>

      <LegalSection heading="Your rights">
        <p>You can ask us at any time to:</p>
        <ul>
          <li>tell you what data we hold about you and give you a copy;</li>
          <li>correct data that is wrong or incomplete;</li>
          <li>delete your data, or limit how we use it;</li>
          <li>move your data to another provider (portability);</li>
          <li>stop using your data where we rely on legitimate interest, and withdraw your consent whenever you wish.</li>
        </ul>
        <p>
          Write to <a href="mailto:moonpixi@hotmail.com">moonpixi@hotmail.com</a> and we will reply within one month. If you feel we have not handled
          your data properly, you can complain to the Spanish Data Protection Agency (<a href="https://www.aepd.es" rel="noreferrer">aepd.es</a>) or to the
          authority in your own country.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies and third-party content">
        <p>
          This website does not set cookies and does not use analytics or advertising trackers. The typefaces are loaded from Google Fonts, so your
          browser contacts Google's servers and your IP address is shared with Google when a page opens. Our hosting provider may also keep standard
          server logs.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to this policy">
        <p>If we change how we use your data, we will update this page and the date at the top.</p>
      </LegalSection>
    </LegalPage>
  );
}
