import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8 ">
      <h1 className="text-3xl font-semibold text-white mb-6">Privacy Policy for Fyris Technologies</h1>
      <p className="text-gray-400"><strong>Effective Date:</strong> April 23, 2025</p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
      <p className="text-gray-400">We may collect the following types of personal and non-personal data:</p>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li><strong>Personal Information:</strong> Name, email address, phone number, business information, job title, and payment details.</li>
        <li><strong>Usage Data:</strong> IP address, browser type, operating system, referring URLs, device type, date/time stamps, and browsing behavior.</li>
        <li><strong>Technical Data:</strong> Cookies, local storage, analytics data, and session identifiers.</li>
        <li><strong>Communication Data:</strong> Emails, chat records, support requests, and feedback submissions.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. How We Use Your Information</h2>
      <p className="text-gray-400">We use your information to:</p>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li>Provide, maintain, and improve our services.</li>
        <li>Communicate with you regarding inquiries or projects.</li>
        <li>Process payments and generate invoices.</li>
        <li>Send newsletters, updates, and promotional content (with consent).</li>
        <li>Ensure platform security and prevent fraud.</li>
        <li>Conduct internal research and analytics.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Disclosure of Information</h2>
      <p className="text-gray-400">We do not sell your data. However, we may share information with:</p>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li>Authorized third-party vendors and service providers.</li>
        <li>Legal authorities when required by law.</li>
        <li>Payment processors.</li>
        <li>Partners who help deliver our services.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Data Security</h2>
      <p className="text-gray-400">We implement industry-standard security protocols to protect your data, including:</p>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li>Secure servers and encryption.</li>
        <li>Role-based access controls.</li>
        <li>Regular audits and monitoring.</li>
        <li>Security patches and updates.</li>
      </ul>
      <p className="text-gray-400">However, no transmission method is 100% secure. We strive to use commercially acceptable means to protect your data.</p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Your Rights</h2>
      <p className="text-gray-400">You have the right to:</p>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li>Access the personal data we hold about you.</li>
        <li>Request corrections or deletions.</li>
        <li>Withdraw consent at any time.</li>
        <li>Lodge complaints with relevant authorities.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Cookies and Tracking Technologies</h2>
      <p className="text-gray-400">Our website uses cookies and similar tools for:</p>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li>Remembering user preferences.</li>
        <li>Analytics and performance monitoring.</li>
        <li>Customizing content and user experience.</li>
      </ul>
      <p className="text-gray-400">You can disable cookies in your browser settings.</p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Data Retention</h2>
      <p className="text-gray-400">We retain your data only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law.</p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. International Data Transfers</h2>
      <p className="text-gray-400">If you are located outside of India, your data may be transferred and processed in India. We take steps to ensure your data is handled according to this policy.</p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Legal Compliance</h2>
      <p className="text-gray-400">Fyris Technologies complies with:</p>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 under the Information Technology Act, 2000 of India.</li>
        <li>The provisions of the Digital Personal Data Protection Act, 2023 (DPDP Act).</li>
        <li>Where applicable, we strive to adhere to international data privacy laws including:
          <ul className="list-disc list-inside">
            <li>General Data Protection Regulation (GDPR) for users in the European Union.</li>
            <li>California Consumer Privacy Act (CCPA) for residents of California, USA.</li>
            <li>UK-GDPR for United Kingdom users.</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Third-Party Links</h2>
      <p className="text-gray-400">Our site may contain links to other websites. We are not responsible for the privacy practices or content of those websites.</p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">11. Children's Privacy</h2>
      <p className="text-gray-400">We do not knowingly collect data from individuals under the age of 18. If we learn we have collected such data, we will take steps to delete it promptly.</p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">12. Changes to This Policy</h2>
      <p className="text-gray-400">We may update this privacy policy from time to time. Changes will be posted on this page with the updated effective date.</p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">13. Contact Us</h2>
      <p className="text-gray-400">For questions about this policy or your data, contact:</p>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li>Fyris Technologies</li>
        <li>Website: <a href="https://www.fyris.in" className="text-blue-500 hover:underline">www.fyris.in</a></li>
        <li>Email: <a href="mailto:contact@fyris.in" className="text-blue-500 hover:underline">contact@fyris.in</a></li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;