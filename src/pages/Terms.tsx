import { useState } from "react";
import { ChevronRight, FileText } from "lucide-react";
import Header from "../custom/Header";
import Footer from "../custom/Footer";

const Terms = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const sectionsContent: Record<string, string> = {
    Definitions: `Parties: "You" and "your" refer to you, as a user of the Site. A "user" is someone who accesses, browses, crawls, or in any way uses the Site. "We," "us," and "our" refer to Truthburster.

Content: "Content" means text, images, photos, audio, video, and all other forms of data or communication. This includes Your Content, User Content, Truthburster Content, Third Party Content, and Site Content.`,

    "Changes to the Terms": `We may modify the Terms from time to time. The most current version will be posted here. You understand and agree that your access to or use of the Site is governed by the Terms effective at the time. Material changes will be notified via email or site notice.`,

    "Using the Site": `Eligibility: You must be 18 years or older with requisite authority to enter these Terms.
    
Site Availability: The Site may be modified, updated, interrupted, suspended or discontinued at any time without notice.

Business Accounts: You must create a Business Account with accurate information to access certain features.`,

    Content: `You are responsible for Your Content and assume all risks associated with it. We may use Your Content in various ways, including public display, reformatting, and distribution.

Ownership: You own Your Content. We own the Truthburster Content and IP Rights associated with the Site.`,

    Restrictions: `You agree not to:
- Write fake or defamatory reviews
- Violate third party rights
- Threaten or harass others
- Use the Site for unauthorized commercial purposes
- Attempt to manipulate search results
- Create multiple accounts
- Violate any applicable laws`,

    "Guidelines and Policies": `Privacy: You acknowledge reading and understanding our Privacy Policy.

Copyright Disputes: We follow DMCA guidelines for copyright infringement claims.`,

    Advertising: `The Truthburster Advertising Agreement applies to business accounts and advertising purchases.`,

    "Suggestions and Improvements": `By sending Feedback, you grant us an irrevocable, worldwide license to use and modify it without compensation.`,

    "Third Parties": `We are not responsible for Third Party Sites linked from our platform.`,

    Indemnity: `You agree to indemnify and hold Truthburster harmless from claims arising from your use of the Site.`,

    Disclaimers: `The Site is provided "as is" without warranties. We're not liable for losses from site usage or third-party actions.`,

    "Choice of Law": `Claims are governed by US and California law, with binding arbitration in San Francisco.`,

    Termination: `We may terminate your account or access at any time. Certain Terms sections survive termination.`,

    "General Terms": `We may modify the Site at any time. These Terms contain our entire agreement and supersede prior agreements.`,
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-[rgb(253,251,246)] font-Rubik py-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-[#c18431] px-6 py-4 flex items-center">
          <FileText className="h-6 w-6 text-indigo-100" />
          <h1 className="ml-3 text-2xl font-bold text-white">
            Terms of Service
          </h1>
        </div>

        <div className="px-6 py-8 prose prose-indigo max-w-none">
          <section className="mb-8">
            <p className="text-gray-700">
              These terms and conditions (the "Terms") govern your access to and
              use of Truthburster's websites. By accessing or using the Site,
              you are agreeing to these Terms and concluding a legally binding
              contract with GGL Projects, Inc., a California corporation
              headquartered in Menlo Park, California ("Truthburster"). Do not
              access or use the Site if you are unwilling or unable to be bound
              by the Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Sections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.keys(sectionsContent).map((section) => (
                <button
                  key={section}
                  onClick={() => setSelectedSection(section)}
                  className={`text-left p-4 rounded-lg transition-all duration-200 flex items-center justify-between ${
                    selectedSection === section
                      ? "bg-[#faf6ec] border-2 border-[#c18431]"
                      : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                  }`}
                >
                  <span className="font-medium text-sm">{section}</span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      selectedSection === section ? "transform rotate-90" : ""
                    }`}
                  />
                </button>
              ))}
            </div>

            {selectedSection && (
              <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200 animate-fade-in">
                <h3 className="font-semibold text-gray-900 mb-3">
                  {selectedSection}
                </h3>
                <div className="text-gray-700 whitespace-pre-line">
                  {sectionsContent[selectedSection]}
                </div>
              </div>
            )}
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

export default Terms;
