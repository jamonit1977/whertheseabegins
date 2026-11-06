import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { canonical } from "@/lib/seo";

export const Route = createFileRoute("/legal-notice")({
  head: () => ({
    meta: [
      { title: "Legal notice — Where the sea begins" },
      { name: "description", content: "Who runs Where the sea begins, the terms for using this website and how enquiries work." },
      { property: "og:title", content: "Legal notice — Where the sea begins" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: canonical("/legal-notice"),
  }),
  component: LegalNotice,
});

// TODO (owner): Spanish law (LSSI-CE, art. 10) expects the owner's legal name, tax ID (NIF/CIF),
// registered address and, for tourist rentals, the Andalusian tourism registry number (VUT).
// Add them to the "Website owner" section, and have the final text reviewed by a lawyer.

function LegalNotice() {
  return (
    <LegalPage
      title="Legal notice"
      updated="5 November 2026"
      intro="The information required by Spanish Law 34/2002 on information society services and electronic commerce (LSSI-CE), and the terms for using this website."
    >
      <LegalSection heading="Website owner">
        <p>
          This website is operated under the name Where the sea begins, based in Chiclana de la Frontera, Cádiz (Spain). Email:{" "}
          <a href="mailto:moonpixi@hotmail.com">moonpixi@hotmail.com</a>.
        </p>
      </LegalSection>

      <LegalSection heading="What this website offers">
        <p>
          The site presents private holidays and personal services on the Costa de la Luz. It does not advertise individual properties. The rates shown
          are general guidance per night and may change by season and length of stay.
        </p>
      </LegalSection>

      <LegalSection heading="Enquiries and bookings">
        <p>
          Sending an enquiry through the <Link to="/contact">request form</Link> is not a reservation and does not confirm availability or price. A stay
          is only agreed once we have confirmed it in writing and the terms have been accepted by both sides.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual property">
        <p>
          The texts, photographs, logo and design of this website belong to Where the sea begins or are used with permission. You may not copy,
          distribute or reuse them without our written consent, except for personal use.
        </p>
      </LegalSection>

      <LegalSection heading="Liability">
        <p>
          We take care to keep the information on this site accurate, including festival and event information, whose dates change each year. We cannot
          guarantee that it is always complete or up to date, and we are not liable for decisions made only on the basis of it. Please confirm details
          with us when you enquire. The site may link to third-party websites, whose content we do not control.
        </p>
      </LegalSection>

      <LegalSection heading="Personal data">
        <p>
          How we handle your personal data is explained in the <Link to="/privacy">privacy policy</Link>.
        </p>
      </LegalSection>

      <LegalSection heading="Governing law">
        <p>
          This website and any dispute arising from it are governed by Spanish law. If you are a consumer, you keep the rights granted to you by the
          mandatory rules of the country where you live.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
