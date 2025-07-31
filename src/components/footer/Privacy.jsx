import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-32">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4 hover:font-semibold underline">We value your privacy and are committed to protecting your personal information.</p>

      <h2 className="text-xl font-bold mt-6 mb-2">1. Data We Collect</h2>
      <p className="mb-4">We collect information such as your name, email address, and usage data to improve our services.</p>

      <h2 className="text-xl font-bold mt-6 mb-2">2. How We Use Your Data</h2>
      <p className="mb-4 ">Your data is used for communication, analytics, and service enhancement. We do not sell your data.</p>

      <h2 className="text-xl font-bold mt-6 mb-2">3. Data Protection</h2>
      <p className="mb-4">We use secure systems and encryption to protect your data from unauthorized access.</p>

      <h2 className="text-xl font-bold mt-6 mb-2">4. Your Rights</h2>
      <p className="mb-4">You have the right to access, correct, or delete your data by contacting us at support@example.com.</p>
    </div>
  );
}

export default PrivacyPolicy;