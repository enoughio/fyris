import React from 'react';

const TermsOfService = () => {
  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-white mb-6">Terms and Conditions</h1>
      <p className="text-gray-400 mb-4">
        These Terms and Conditions ("Agreement") govern your engagement with Fyris Technologies, a software development agency registered and operating in India. By engaging with Fyris, whether through the website or by entering into a contractual agreement, you agree to comply with and be bound by the following terms and conditions.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Definitions</h2>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li><strong>1.1</strong> "Client" refers to any individual or business entity engaging Fyris for services.</li>
        <li><strong>1.2</strong> "Services" refers to all products and services offered by Fyris, including but not limited to software development, mobile app development, web development, cloud solutions, UI/UX design, and software outsourcing.</li>
        <li><strong>1.3</strong> "Agreement" refers to these Terms and Conditions.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Scope of Services</h2>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li><strong>2.1</strong> Fyris provides software and digital services tailored to client specifications.</li>
        <li><strong>2.2</strong> Additional services requested by the client outside the agreed-upon scope shall incur additional charges.</li>
        <li><strong>2.3</strong> Outsourced work to third parties shall be disclosed when applicable, ensuring all subcontractors adhere to similar confidentiality and quality standards.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Project Delivery & Timelines</h2>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li><strong>3.1</strong> Project timelines are estimates and may vary based on project complexity and client responsiveness.</li>
        <li><strong>3.2</strong> Delays caused by the client, such as delayed content delivery or feedback, may result in rescheduled timelines.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Payment Terms</h2>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li><strong>4.1</strong> All payments must be made as per the agreed milestones.</li>
        <li><strong>4.2</strong> Delayed payments may attract a late fee of 2% per month on the outstanding amount.</li>
        <li><strong>4.3</strong> Fyris reserves the right to suspend work until due payments are received.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Confidentiality</h2>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li><strong>5.1</strong> Both parties agree to maintain strict confidentiality of proprietary and client data.</li>
        <li><strong>5.2</strong> Client data shall not be disclosed to third parties without prior written consent, except when legally required.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Intellectual Property</h2>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li><strong>6.1</strong> All intellectual property created during the project shall be transferred to the client upon full payment unless agreed otherwise.</li>
        <li><strong>6.2</strong> Fyris retains the right to showcase the project in its portfolio unless the client opts out in writing.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Client Responsibilities</h2>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li><strong>7.1</strong> The client shall provide all necessary materials and support in a timely manner.</li>
        <li><strong>7.2</strong> The client is responsible for securing necessary permissions for any third-party content.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Warranties & Liabilities</h2>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li><strong>8.1</strong> Fyris provides a 30-day post-deployment bug-fix warranty unless otherwise stated in the contract.</li>
        <li><strong>8.2</strong> Fyris shall not be liable for indirect, incidental, or consequential damages.</li>
        <li><strong>8.3</strong> All services are provided "as is" without warranties of any kind beyond those expressly stated.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Termination</h2>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li><strong>9.1</strong> Either party may terminate the contract with 14 days' written notice.</li>
        <li><strong>9.2</strong> Upon termination, Fyris will provide deliverables completed to date after receiving pending payments.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Dispute Resolution</h2>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li><strong>10.1</strong> This Agreement shall be governed by and interpreted in accordance with the laws of India, including the Indian Contract Act, 1872.</li>
        <li><strong>10.2</strong> Any disputes arising shall be subject to the exclusive jurisdiction of courts in India.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">11. Amendments</h2>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li><strong>11.1</strong> Fyris reserves the right to update these Terms and Conditions from time to time.</li>
        <li><strong>11.2</strong> Continued use of services after amendments constitutes acceptance of the updated terms.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">12. Contact</h2>
      <p className="text-gray-400 mb-4">For any questions regarding these Terms and Conditions, please contact us at:</p>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li>Email: <a href="mailto:contact@fyris.in" className="text-blue-500 hover:underline">contact@fyris.in</a></li>
        <li>Website: <a href="https://www.fyris.in" className="text-blue-500 hover:underline">www.fyris.in</a></li>
      </ul>
    </div>
  );
};

export default TermsOfService;