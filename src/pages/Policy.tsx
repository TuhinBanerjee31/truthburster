import { ChevronRight, ScrollText } from "lucide-react";
import { useState } from "react";
import Header from "../custom/Header";
import Footer from "../custom/Footer";

const Policy = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topicsContent: Record<string, string> = {
    "YOUR RIGHTS": `When using our website and submitting PD to us, you have certain rights under the Data Privacy Network, privacy laws in the United States including the California Consumer Privacy Act of 2018 (CaCPA), the California Privacy Rights Act of 2020 (CPRA), and privacy laws of other countries including the European Union General Data Protection Regulation of 2016 (the "EU GDPR"), the UK General Data Protection Regulation (UK GDPR / the Data Protection Act 2018), the Data Protection Act 2018, and other global privacy laws.`,
    "INFORMATION WE COLLECT AND HOW WE COLLECT IT": `We collect information automatically from your web browser, when you register as a user, make purchases, and interact with our website. This includes IP addresses, browser information, device data, and usage patterns.`,
    "HOW YOUR PD IS USED AND DISCLOSED": `We use your information to provide services, personalize content, improve our website, contact you with updates, resolve disputes, and send relevant marketing communications.`,
    "RETAINING AND DESTROYING YOUR PD": `We maintain your PD only as long as necessary for the purposes collected or as required by law. We securely delete or anonymize data when it's no longer needed.`,
    "PROTECTING THE PRIVACY RIGHTS OF THIRD PARTIES": `We respect the privacy rights of all individuals, including third parties mentioned in user content. We remove content that violates others' privacy rights when notified.`,
    "DO NOT TRACK SETTINGS": `We honor Do Not Track signals and other similar privacy control mechanisms. You can adjust these settings in your browser preferences.`,
    "LINKS TO OTHER WEBSITES": `Our website contains links to external sites that we don't control. We're not responsible for their privacy practices or content.`,
    "PROTECTING CHILDREN'S PRIVACY": `Our services are not intended for users under 16. We don't knowingly collect data from children and will remove such data if discovered.`,
    "OUR EMAIL POLICY": `You can opt-out of our emails anytime. We never sell or trade email addresses except in case of company sale or bankruptcy.`,
    "OUR SECURITY POLICY": `We use industry-standard security measures to protect your data, including encryption and secure authentication methods.`,
    "USE OF YOUR CREDIT CARD": `Credit card processing is handled by secure third-party providers. We never store complete credit card information.`,
    "TRANSFERRING PD FROM OTHER COUNTRIES": `We comply with international data transfer regulations and implement appropriate safeguards for cross-border data transfers.`,
    "CHANGES TO OUR PRIVACY NOTICE": `We may update this privacy notice periodically. We'll notify you of significant changes via email or website notice.`,
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-[rgb(253,251,246)] py-30 px-4 sm:px-6 lg:px-8 font-Rubik">
      <div className="max-w-screen-xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-[#c18431] px-6 py-4 flex items-center">
          <ScrollText className="h-6 w-6 text-indigo-100" />
          <h1 className="ml-3 text-2xl font-bold text-white">Privacy Notice</h1>
        </div>

        <div className="px-6 py-8 prose prose-indigo max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Data Controller Contact Information
            </h2>
            <p className="text-gray-700">
              700 El Camino Real Suite 120-1312
              <br />
              Menlo Park, CA 94025
              <br />
              privacy@truthburster.com
            </p>
          </section>

          <section className="mb-8">
            <p className="text-gray-700">
              Our privacy notice governs our privacy practices when you are
              using our websites, https://www.truthburster.com,
              https://www.truthburster.com/business,
              https://biz.truthburster.com, our software as service called
              Jabio, our mobile app, and AI technology services, hereinafter and
              collectively referred to as the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Topics Covered
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.keys(topicsContent).map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`text-left p-4 rounded-lg transition-all duration-300 flex items-center justify-between ${
                    selectedTopic === topic
                      ? "bg-[#faf6ec] border-2 border-[#c18431]"
                      : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                  }`}
                >
                  <span className="font-medium text-sm">{topic}</span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      selectedTopic === topic ? "transform rotate-90" : ""
                    }`}
                  />
                </button>
              ))}
            </div>

            {selectedTopic && (
              <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200 animate-fade-in">
                <h3 className="font-semibold text-gray-900 mb-3">
                  {selectedTopic}
                </h3>
                <p className="text-gray-700">{topicsContent[selectedTopic]}</p>
              </div>
            )}
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Definitions
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900">
                  NONPERSONAL DATA (NPD)
                </h3>
                <p className="text-gray-700">
                  Any information that is in no way personally identifiable.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900">
                  PERSONAL DATA (PD)
                </h3>
                <p className="text-gray-700">
                  Any information relating to an identified or identifiable
                  natural person.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900">
                  SENSITIVE PERSONAL DATA (SPD)
                </h3>
                <p className="text-gray-700">
                  Includes social security numbers, financial data, and other
                  highly sensitive information.
                </p>
              </div>
            </div>
          </section>

          <div className="text-sm text-gray-500 mt-8 pt-8 border-t">
            Copyright © - This document or any portion of it may not be copied
            or duplicated in any way.
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Policy;
