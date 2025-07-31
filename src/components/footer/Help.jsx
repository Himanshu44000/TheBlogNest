import React, { useState } from 'react';

const faqs = [
   {
    question: "Can I delete my account?",
    answer: "Yes. To request account deletion, please contact our support team through the Contact Us page."
  },
  {
  question: "What should I do if I notice suspicious activity?",
  answer: "Immediately contact our support team. We’ll assist you in securing your account and investigating the issue."
},
  {
    question: "Is my personal information secure?",
    answer: "Yes, we use encryption and secure servers to protect your data. Read more in our Privacy Policy."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we’re available via email and live chat during business hours, Monday to Friday."
  }
];

function Help() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-32">
      <h1 className="text-4xl font-bold mb-10 text-center text-purple-700">Help Center / FAQs</h1>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full px-6 py-4 text-left flex justify-between items-center"
            >
              <span className="text-lg font-medium text-gray-800">{faq.question}</span>
              <span className="text-2xl text-purple-600">{activeIndex === idx ? '-' : '+'}</span>
            </button>
            {activeIndex === idx && (
              <div className="px-6 pb-4 text-gray-600 text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Help;