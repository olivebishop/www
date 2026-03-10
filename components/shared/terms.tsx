'use client';
import { motion } from 'motion/react';

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      'When you use our contact form or project inquiry form, we may collect the following information:',
      '• Your name and email address',
      '• Project details and budget preferences',
      '• Any additional information you voluntarily provide in your message',
      'We do not collect any personal data automatically through cookies or tracking technologies beyond basic analytics provided by Vercel Analytics.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'The information we collect is used solely for the following purposes:',
      '• To respond to your inquiries and project requests',
      '• To communicate with you about potential collaborations',
      '• To improve our services and website experience',
      'We will never sell, rent, or share your personal information with third parties for marketing purposes.',
    ],
  },
  {
    title: '3. Data Storage & Security',
    content: [
      'Your data is processed through secure, encrypted connections. We use Resend for email delivery, which adheres to industry-standard security practices.',
      'We retain your contact information only for as long as necessary to fulfill the purpose for which it was collected or as required by law.',
    ],
  },
  {
    title: '4. Third-Party Services',
    content: [
      'We may use the following third-party services:',
      '• Vercel — for hosting and analytics',
      '• Resend — for transactional email delivery',
      'These services have their own privacy policies governing the use of your information.',
    ],
  },
  {
    title: '5. Your Rights',
    content: [
      'You have the right to:',
      '• Request access to the personal data we hold about you',
      '• Request correction or deletion of your personal data',
      '• Withdraw consent for us to process your data',
      '• Lodge a complaint with a data protection authority',
      'To exercise any of these rights, please contact us at hello@olivebishop.com.',
    ],
  },
  {
    title: '6. Cookies',
    content: [
      'This website uses minimal cookies necessary for functionality. We do not use cookies for advertising or third-party tracking.',
    ],
  },
  {
    title: '7. External Links',
    content: [
      'Our website may contain links to external sites. We are not responsible for the privacy practices or content of those sites. We encourage you to read the privacy policies of any external websites you visit.',
    ],
  },
  {
    title: '8. Children\'s Privacy',
    content: [
      'Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children.',
    ],
  },
  {
    title: '9. Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.',
    ],
  },
  {
    title: '10. Contact Us',
    content: [
      'If you have any questions about this Privacy Policy, please contact us:',
      '• Email: hello@olivebishop.com',
      '• Website: https://olivebishop.com',
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="px-6 sm:px-10 md:px-14 lg:px-16 py-16 sm:py-20 md:py-24 lg:py-32 max-w-3xl text-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-black/50 mb-4">
          Legal
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
          Privacy Policy
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
        At Olive Bishop, your privacy is important to us. This Privacy Policy explains how we collect, 
        use, and protect your personal information when you visit our website and use our services.
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
