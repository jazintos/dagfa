import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Use | DAGFA</title>

        <meta
          name="description"
          content="Read the Terms of Use for the Data Analytics Group for Asiwaju website."
        />
      </Helmet>

      <section className="bg-white">

        <div className="max-w-5xl mx-auto px-6 py-24">

          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            Terms of Use
          </h1>

          <p className="text-gray-500 mb-12">
            Last Updated: June 2026
          </p>

          <div className="space-y-10 text-gray-700 leading-8">

            <div>

              <h2 className="text-2xl font-semibold mb-3">
                Acceptance of Terms
              </h2>

              <p>
                By accessing this website you agree to comply with these
                Terms of Use and all applicable laws.
              </p>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-3">
                Intellectual Property
              </h2>

              <p>
                All content, research, graphics, publications, reports,
                logos and materials published by DAGFA remain the
                intellectual property of the organisation unless
                otherwise stated.
              </p>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-3">
                Website Usage
              </h2>

              <p>
                Users agree not to misuse, interfere with, or attempt to
                compromise the security or availability of this website.
              </p>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-3">
                External Links
              </h2>

              <p>
                This website may contain links to third-party websites.
                DAGFA is not responsible for the content or practices of
                external websites.
              </p>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-3">
                Disclaimer
              </h2>

              <p>
                Information published on this website is provided for
                general informational purposes only and may be updated
                without prior notice.
              </p>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-3">
                Limitation of Liability
              </h2>

              <p>
                DAGFA shall not be liable for any direct or indirect
                damages arising from the use of this website.
              </p>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-3">
                Governing Law
              </h2>

              <p>
                These Terms shall be governed by the laws of the Federal
                Republic of Nigeria.
              </p>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-3">
                Contact
              </h2>

              <p>
                For enquiries relating to these Terms, please contact:
              </p>

              <p className="mt-4">
                <strong>Email:</strong> info@dagfa.org
              </p>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}