import React from 'react';

function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-32">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <p className="mb-4 hover:font-semibold underline">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

      <h2 className="text-xl font-bold mt-6 mb-2">1. Use of Site</h2>
      <p className="mb-4">You agree to use the site only for lawful purposes. You must not misuse this website or its content.</p>

      <h2 className="text-xl font-bold mt-6 mb-2">2. Intellectual Property</h2>
      <p className="mb-4">All content is the intellectual property of the site owner and may not be copied or distributed without permission.</p>

      <h2 className="text-xl font-bold mt-6 mb-2">3. Termination</h2>
      <p className="mb-4">We reserve the right to terminate access to the site at any time, without notice, for conduct that violates these terms.</p>

      <h2 className="text-xl font-bold mt-6 mb-2">4. Changes to Terms</h2>
      <p className="mb-4">We may update these terms from time to time. Continued use of the site implies acceptance of the new terms.</p>
    </div>
  );
}

export default TermsAndConditions;