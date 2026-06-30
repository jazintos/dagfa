import { Helmet } from "react-helmet-async";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | DAGFA</title>
        <meta
          name="description"
          content="Read the Data Analytics Group for Asiwaju (DAGFA) Privacy Policy."
        />
      </Helmet>

      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-24">

          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>

          <p className="text-gray-500 mb-12">
            Last Updated: June 2026
          </p>

          <div className="space-y-10 text-gray-700 leading-8">

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                Introduction
              </h2>

              <p>
                Data Analytics Group for Asiwaju (DAGFA) respects your
                privacy and is committed to protecting any personal
                information you provide while using this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                Information We Collect
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Messages submitted through our contact forms</li>
                <li>Website analytics information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                How We Use Information
              </h2>

              <p>
                Information collected may be used to improve our
                services, respond to enquiries, publish research,
                communicate updates, and improve user experience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                Cookies
              </h2>

              <p>
                This website may use cookies to improve website
                performance and understand visitor behaviour.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                Third-Party Services
              </h2>

              <p>
                DAGFA may use trusted third-party providers such as
                Google Analytics, Vercel and newsletter services to
                improve the functionality of this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                Data Security
              </h2>

              <p>
                Appropriate administrative and technical safeguards are
                implemented to protect information collected through
                this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                Contact
              </h2>

              <p>
                Questions regarding this Privacy Policy may be sent to:
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