import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SupportDialog } from "@/components/dialogs/SupportDialog";

const faqs = [
  {
    question: "What is identity theft?",
    answer: "Identity theft refers to the unauthorized use of an individual's personally identifiable information (PII), such as name, Social Security Number, bank information, and other sensitive information that can compromise a person's privacy, security, and financial assets."
  },
  {
    question: "How do I protect myself from identity theft?",
    answer: (
      <div className="space-y-4">
        <p>There are simple, proactive steps you can take right now to protect your personal information from identity theft—both online and off.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use strong, unique passwords</li>
          <li>Ensure your devices have the latest security software</li>
          <li>Monitor your accounts to keep an eye on your bank transactions, credit, and more</li>
          <li>Minimize the amount of personal information you share online</li>
        </ul>
        <p>For easy-to-use, worry-free protection, our McAfee plans automatically monitor your personal information and provide step-by-step guidance for creating a safer online experience.</p>
      </div>
    )
  },
  {
    question: "What should I do if I'm the victim of identity theft?",
    answer: (
      <div className="space-y-4">
        <p>Begin by analyzing the situation and reviewing the compromised information. Then, notify the relevant authorities, such as your bank, coverage agency, a local police station, or a national cyber crime complaint center. While the relevant authorities are helping you with the case, check and secure your financial accounts, devices, and proof of identity.</p>
        <p className="p-4 bg-red-50 border border-red-100 rounded-lg text-red-800">
          Select McAfee plans include identity theft coverage to cover up to $2 million of qualifying losses, and hands-on restoration support to help you reclaim your identity. Identity theft coverage not available to McAfee Security for T-Mobile subscribers in the State of NY or Puerto Rico due to regulatory compliance.
        </p>
      </div>
    )
  },
  {
    question: "What is the most common form of identity theft?",
    answer: "The most common form of identity theft is financial identity theft, which refers to any type of theft when someone uses another individual's information for financial gain. Some examples are New Account Fraud, Account Takeover Fraud, Business Identity Theft, and Tax-Related Identity Theft."
  },
  {
    question: "How do I share the subscription with my family?",
    answer: "To share your subscription with your family, log in to My Account and click Manage users and devices. From there, you can send an invitation to each family member to join your plan. Each family member will be able to set up their McAfee account and complete the setup for their online protection."
  },
  {
    question: "What comes with parental controls?",
    answer: (
      <div className="space-y-4">
        <p>Parental controls provide you with the ability to supervise and keep your kids safer online. When you sign up for a family plan, you'll receive easy instructions to get set up with the parental controls app.</p>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center">✓</span>
            <span><strong>See what your kids are up to:</strong> View your kid's device activity and location at a glance from your phone or desktop.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center">✓</span>
            <span><strong>Set rules and time limits:</strong> Start off with age-based rules for apps and websites that you can customize based on your kid's needs.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center">✓</span>
            <span><strong>Know where your kids are:</strong> Locate them on a live map and receive automated notifications when they enter or leave familiar places.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center">✓</span>
            <span><strong>Family requests:</strong> Collaborate with your kids by allowing them to request extra app time or access blocked apps or websites.</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    question: "What devices and OS are compatible with McAfee+?",
    answer: "McAfee+ is compatible with laptops, desktops, tablets, Chromebooks, and mobile devices. You can find operating system compatibility on our System Requirements page."
  },
  {
    question: "How can McAfee help me clean up my online accounts?",
    answer: (
      <div className="space-y-4">
        <p>We'll show you which companies or websites have access to your personal information and provide steps on how to reach out to them to have it deleted. If you prefer to save time and have McAfee send the requests with a single click, the request will be transmitted directly from your email inbox.</p>
        <p className="italic text-gray-600">We help you send these requests, but we do not act as an agent on your behalf.</p>
      </div>
    )
  }
];

export const FAQ = () => {
  const [showSupportDialog, setShowSupportDialog] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            These answers might help you learn more about our services
          </p>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-4 hover:border-red-200 transition-colors duration-200"
                >
                  <AccordionTrigger className="text-left font-semibold py-4 hover:text-red-600 [&[data-state=open]]:text-red-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Still have questions?{" "}
              <button
                onClick={() => setShowSupportDialog(true)}
                className="text-red-600 hover:text-red-700 font-medium"
              >
                Contact our support team
              </button>
            </p>
          </div>
        </div>
      </div>

      <SupportDialog 
        open={showSupportDialog}
        onOpenChange={setShowSupportDialog}
      />
    </section>
  );
};
