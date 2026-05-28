'use client';
import { motion } from 'motion/react';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By accessing and using this website (olivebishop.com), you accept and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.',
    ],
  },
  {
    title: '2. Services',
    content: [
      'Olive Bishop provides software engineering, web development, and digital design services. Our website serves as a portfolio and point of contact for potential clients and collaborators.',
      'Services include but are not limited to:',
      '• Custom web application development',
      '• Frontend and full-stack engineering',
      '• UI/UX consultation',
      '• Digital events curation',
    ],
  },
  {
    title: '3. Intellectual Property',
    content: [
      'All content on this website, including but not limited to text, graphics, logos, images, code, and design elements, is the intellectual property of Olive Bishop unless otherwise stated.',
      'You may not reproduce, distribute, modify, or create derivative works from any content on this website without prior written consent.',
      'Project work showcased on this website may include work completed for clients. Such work remains the intellectual property of the respective clients or as agreed upon in individual project contracts.',
    ],
  },
  {
    title: '4. Project Inquiries & Engagements',
    content: [
      'Submitting a project inquiry through our website does not constitute a binding agreement or contract. All project engagements will be formalized through separate agreements that outline scope, timeline, deliverables, and payment terms.',
      'We reserve the right to decline any project inquiry at our discretion.',
    ],
  },
  {
    title: '5. User Conduct',
    content: [
      'When using our website, you agree not to:',
      '• Submit false, misleading, or spam content through our forms',
      '• Attempt to gain unauthorized access to our systems or data',
      '• Use our website for any unlawful purpose',
      '• Interfere with the proper functioning of the website',
      '• Scrape, crawl, or use automated means to access our content without permission',
    ],
  },
  {
    title: '6. Limitation of Liability',
    content: [
      'This website and its content are provided "as is" without warranties of any kind, either express or implied. Olive Bishop shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website.',
      'We do not guarantee that the website will be available at all times or that it will be free from errors or security vulnerabilities.',
    ],
  },
  {
    title: '7. Third-Party Links',
    content: [
      'Our website may contain links to third-party websites or services. We are not responsible for the content, privacy practices, or terms of service of these external sites. Accessing third-party links is at your own risk.',
    ],
  },
  {
    title: '8. Privacy',
    content: [
      'Your use of our website is also governed by our Privacy Policy, which describes how we collect, use, and protect your personal information. Please review our Privacy Policy for more details.',
    ],
  },
  {
    title: '9. Modifications to Terms',
    content: [
      'We reserve the right to update or modify these Terms of Service at any time without prior notice. Changes will be effective immediately upon posting on this page. Your continued use of the website after any changes constitutes acceptance of the updated terms.',
    ],
  },
  {
    title: '10. Governing Law',
    content: [
      'These Terms of Service shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms or your use of the website shall be resolved through appropriate legal channels.',
    ],
  },
  {
    title: '11. Contact Us',
    content: [
      'If you have any questions about these Terms of Service, please contact us:',
      '• Email: hello@olivebishop.com',
      '• Website: https://olivebishop.com',
    ],
  },
];

export default function TermsOfService() {
  return (
    <div className="max-w-3xl scroll-mt-24 px-5 pb-16 pt-24 text-black sm:px-8 sm:pb-20 sm:pt-28 md:px-14 md:pb-24 md:pt-32 lg:px-16 lg:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-black/50 mb-4">
          Legal
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
          Terms of Service
        </h1>
        <p className="text-sm sm:text-base text-black/50 mb-12">
          Last updated: March 11, 2026
        </p>
      </motion.div>

      <motion.p
        className="text-sm sm:text-base text-black/80 leading-relaxed mb-10"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        Welcome to Olive Bishop. These Terms of Service govern your use of our website and services. 
        Please read them carefully before using our platform.
      </motion.p>

      <div className="space-y-8 sm:space-y-10">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15 + index * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-black mb-3">
              {section.title}
            </h2>
            <div className="space-y-2">
              {section.content.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-sm sm:text-base text-black/70 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
