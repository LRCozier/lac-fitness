import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'The terms of service for L.A.C. Fitness personal training, group training, and online coaching.',
};

const LAST_UPDATED = '3rd January 2026';

const CONTENTS = [
  ['1-general-information', 'General Information & Services'],
  ['2-service-definitions', 'Service Definitions & Scope'],
  ['3-health-medical', 'Health, Medical & Informed Consent'],
  ['4-payments-expiry', 'Payments & Session Expiry'],
  ['5-cancellation-lateness', 'Cancellations & Lateness'],
  ['6-conduct-safety', 'Conduct & Personal Safety'],
  ['7-refunds-extensions', 'Refunds & Extensions'],
  ['8-liability-waivers', 'Liability & Waivers'],
  ['9-data-protection', 'Data Protection & Privacy'],
  ['10-governing-law', 'Governing Law & Changes'],
];

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container container--narrow">
        <header className="page-header">
          <h1 className="page-title">Terms &amp; Conditions</h1>
          <p className="page-subtitle">
            The legal agreement between{' '}
            <strong>Luke Alexander Rudderham-Cozier</strong> (trading as{' '}
            <strong>L.A.C. Fitness</strong>, &ldquo;the Trainer&rdquo;) and the Client.
            Please read carefully before booking any services.
          </p>
          <p className="terms-meta">
            Last updated:{' '}
            <time dateTime="2026-01-03">{LAST_UPDATED}</time> &middot; Effective from:{' '}
            <time dateTime="2026-01-03">{LAST_UPDATED}</time>
          </p>
        </header>

        <nav className="terms-toc" aria-label="Terms and Conditions contents">
          <h2 className="terms-toc-title">Contents</h2>
          <ol className="terms-toc-list">
            {CONTENTS.map(([id, label]) => (
              <li key={id}>
                <a className="terms-toc-link" href={`#${id}`}>
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="terms-content">
          <section className="terms-section" id="1-general-information">
            <h2 className="terms-heading">1. General Information &amp; Services</h2>
            <p>
              L.A.C. Fitness provides professional strength and conditioning coaching,
              personal training, and online consultation services. By making a booking or
              payment, you agree to be bound by these Terms and Conditions.
            </p>
          </section>

          <section className="terms-section" id="2-service-definitions">
            <h2 className="terms-heading">2. Service Definitions &amp; Scope</h2>

            <div className="terms-block">
              <h3 className="terms-subheading">
                1-to-1 Personal Training (£40 per hour)
              </h3>
              <p>
                Private coaching including movement preparation, technique-led lifting,
                tailored strength work, and session reviews.
              </p>
              <p className="terms-protective">
                <strong>Session Timings:</strong> All sessions are 60 minutes. Your
                session begins at the scheduled time; please arrive promptly to ensure we
                can complete the full planned programme.
              </p>
            </div>

            <div className="terms-block">
              <h3 className="terms-subheading">
                2-to-1 Group Personal Training (£50 per hour)
              </h3>
              <p>Shared coaching for two participants with individualised programming.</p>
              <p className="terms-protective">
                <strong>Partner Terms:</strong> Both participants are jointly responsible
                for the session. If one partner cancels with less than 24 hours&rsquo;
                notice, the session proceeds for the attending participant and the other
                forfeits their fee. Should a training partnership end, the remaining client
                will move to the 1-to-1 pricing structure.
              </p>
            </div>

            <div className="terms-block">
              <h3 className="terms-subheading">
                Online Consultations &amp; Tailored Programming (£40 per hour)
              </h3>
              <p>Remote guidance and training plans.</p>
              <p className="terms-protective">
                <strong>Training Environment:</strong> For online services, the Client
                assumes responsibility for the safety, maintenance, and suitability of their
                own training environment and equipment.
              </p>
            </div>
          </section>

          <section className="terms-section" id="3-health-medical">
            <h2 className="terms-heading">3. Health, Medical &amp; Informed Consent</h2>
            <ul className="terms-list">
              <li>
                <strong>Fitness to Participate:</strong> You must complete a Physical
                Activity Readiness Questionnaire (PAR-Q) before your first session and
                certify you are in good physical condition.
              </li>
              <li>
                <strong>Disclosure:</strong> You must disclose all relevant medical
                conditions and injuries. The Trainer is not a medical professional and may
                require GP clearance before training continues.
              </li>
              <li>
                <strong>Nature of Training:</strong> You acknowledge that training involves
                strenuous physical activity and voluntarily assume all risks of injury
                (e.g., strains, fractures, or cardiac incidents).
              </li>
            </ul>
          </section>

          <section className="terms-section" id="4-payments-expiry">
            <h2 className="terms-heading">4. Payments &amp; Session Expiry</h2>
            <ul className="terms-list">
              <li>
                <strong>Upfront Payment:</strong> All fees must be paid in full via bank
                transfer or contactless before training takes place.
              </li>
              <li>
                <strong>90-Day Policy:</strong> All training packages are valid for 90 days
                from the date of purchase. Any sessions not used within this timeframe will
                expire and are non-refundable.
              </li>
            </ul>
          </section>

          <section className="terms-section" id="5-cancellation-lateness">
            <h2 className="terms-heading">5. Cancellations &amp; Lateness</h2>
            <ul className="terms-list">
              <li>
                <strong>Client Notice:</strong> At least 24 hours&rsquo; notice is required
                to cancel or reschedule. Failure to do so results in the session being
                forfeited (charged in full).
              </li>
              <li>
                <strong>Trainer Notice:</strong> If the Trainer cancels within 24
                hours&rsquo; notice, you will receive the missed session plus one additional
                complimentary session.
              </li>
              <li>
                <strong>Lateness:</strong>
                <ul className="terms-list-nested">
                  <li>
                    <strong>Client:</strong> Arrivals 20 minutes late may be treated as a
                    &ldquo;no-show&rdquo; and forfeited.
                  </li>
                  <li>
                    <strong>Trainer:</strong> If the Trainer is 10 minutes late, you are
                    entitled to a complimentary extra session.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="terms-section" id="6-conduct-safety">
            <h2 className="terms-heading">
              6. Conduct &amp; Personal Safety (Zero Tolerance)
            </h2>
            <ul className="terms-list">
              <li>
                <strong>Professional Environment:</strong> Any form of abusive, threatening,
                or harassing behaviour (verbal, physical, or digital) will result in
                immediate termination of the session and the cancellation of all remaining
                sessions without a refund.
              </li>
              <li>
                <strong>Legal Action:</strong> Where appropriate, violent or threatening
                behaviour will be reported to the police.
              </li>
              <li>
                <strong>Substance Use:</strong> The Trainer reserves the right to refuse
                service if a client appears under the influence of alcohol or illegal drugs.
              </li>
            </ul>
          </section>

          <section className="terms-section" id="7-refunds-extensions">
            <h2 className="terms-heading">7. Refunds &amp; Extensions</h2>
            <ul className="terms-list">
              <li>
                <strong>General Policy:</strong> Sessions and packages are non-refundable.
              </li>
              <li>
                <strong>Medical Exception:</strong> If a documented medical condition (GP
                note required) permanently prevents training, a refund for unused sessions
                may be issued.
              </li>
              <li>
                <strong>Extensions:</strong> Validity may be extended by 1&ndash;12 months
                for pregnancy, serious illness, or significant injury at the Trainer&rsquo;s
                discretion.
              </li>
            </ul>
          </section>

          <section className="terms-section" id="8-liability-waivers">
            <h2 className="terms-heading">8. Liability &amp; Waivers</h2>
            <ul className="terms-list">
              <li>
                <strong>Limitation of Liability:</strong> To the fullest extent permitted by
                law, the Trainer is not liable for any injury, loss, or damage arising from
                participation.
              </li>
              <li>
                <strong>Statutory Rights:</strong> Nothing in these terms excludes liability
                for death or personal injury caused by proven negligence or any other
                liability that cannot be excluded under English Law.
              </li>
            </ul>
          </section>

          <section className="terms-section" id="9-data-protection">
            <h2 className="terms-heading">9. Data Protection &amp; Privacy</h2>
            <ul className="terms-list">
              <li>
                <strong>GDPR:</strong> Data is handled in accordance with the Data
                Protection Act 2018. Personal and health data is used solely for coaching
                and safety and will not be shared without consent.
              </li>
              <li>
                <strong>CCTV:</strong> Sessions at{' '}
                <a
                  href="https://myfitpod.co.uk/pages/my-fit-pod-kingston-upon-thames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terms-link"
                >
                  My Fit Pod, Kingston
                </a>
                , are subject to 24/7 CCTV for safety and crime prevention. By attending,
                you consent to being recorded.
              </li>
            </ul>
          </section>

          <section className="terms-section" id="10-governing-law">
            <h2 className="terms-heading">10. Governing Law &amp; Changes</h2>
            <ul className="terms-list">
              <li>
                <strong>Governing Law:</strong> This agreement is governed by the laws of
                England and Wales.
              </li>
              <li>
                <strong>Updates:</strong> These Terms may be updated periodically. Continued
                use of services constitutes acceptance of updated terms.
              </li>
            </ul>

            <p className="terms-contact">
              <strong>Contact:</strong>{' '}
              <a className="terms-link" href="mailto:lacfitnessuk@gmail.com">
                lacfitnessuk@gmail.com
              </a>
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}