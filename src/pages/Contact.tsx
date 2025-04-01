import React from 'react';
import { MessageCircle, Building2, Users, Star, Mail } from 'lucide-react';
import Header from '../custom/Header';
import Footer from '../custom/Footer';

function ContactCard({ icon: Icon, title, description, link }: {
  icon: React.ElementType;
  title: string;
  description: string;
  link?: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-full bg-[#f3e9ce]">
            <Icon className="w-5 h-5 text-[#c18431]" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
          {link && (
            <a href={link} className="mt-2 text-sm text-[#c18431] inline-block">
              Learn more →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-[rgb(253,251,246)] font-Rubik">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Get in touch</h1>
          <p className="text-gray-600">
            We'd love to hear from you - whether you have a question, concern, or simply want to say hello.
          </p>
        </div>

        <div className="space-y-4">
          <ContactCard
            icon={MessageCircle}
            title="Have a question about our site?"
            description="Check out our FAQs page first for answers to commonly asked questions about truthbuster and its uses."
            link="#faqs"
          />

          <ContactCard
            icon={Building2}
            title="Need to contact a business reviewed on truthbuster?"
            description="To report a business with your specific question or concerns, simply search for the review page. Then, you'll find contact info on the business details portion of their page."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <ContactCard
              icon={Users}
              title="Member of the media?"
              description="Visit our Press page for additional info and a dedicated press member email."
            />

            <ContactCard
              icon={Star}
              title="Representing a business?"
              description="Click here to help us get connected."
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#f3e9ce] mb-6">
            <Star className="w-6 h-6 text-[#a66628]" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Still need help?</h2>
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 text-gray-500" />
            <span className="text-[#a66628] hover:text-[#603523]">
              support@truthbuster.com
            </span>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
    
  );
}

export default Contact;