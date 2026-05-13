'use client';
import { motion } from 'motion/react';

const sections = [
  {
    title: '1. What Are Cookies?',
    content: [
      'Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They help the website remember your preferences and improve your browsing experience.',
    ],
  },
  {
    title: '2. How We Use Cookies',
    content: [
      'We use cookies for the following purposes:',
      '• Essential cookies — Required for the website to function properly, such as maintaining your session.',
      '• Analytics cookies — We may use privacy-focused analytics to understand traffic in aggregate. These cookies collect anonymous data where enabled.',
      '• Preference cookies — Remember your settings and preferences for future visits.',
    ],
  },
  {
    title: '3. Types of Cookies We Use',
    content: [
      'Our website uses the following types of cookies:',
      '• Session cookies — Temporary cookies that are deleted when you close your browser.',
      '• Persistent cookies — Remain on your device for a set period or until you manually delete them.',
      '• First-party cookies — Set by our website directly.',
      '• Third-party cookies — Set by third-party services we use (for example, analytics or embedded content).',
    ],
  },
  {
    title: '4. Third-Party Cookies',
    content: [
      'We may use the following third-party services that set cookies:',
      '• Analytics providers — For understanding website traffic and usage patterns in aggregate, without advertising cookies.',
      'These third-party services have their own cookie and privacy policies.',
    ],
  },
  {
    title: '5. Managing Cookies',
    content: [
      'You can control and manage cookies in several ways:',
      '• Browser settings — Most browsers allow you to view, manage, and delete cookies through their settings.',
      '• Opt-out — You can opt out of analytics cookies by adjusting your browser\'s privacy settings.',
      '• Delete cookies — You can delete all cookies stored on your device at any time through your browser settings.',
      'Please note that disabling certain cookies may affect the functionality of our website.',
    ],
  },
  {
    title: '6. Cookie Retention',
    content: [
      'The duration cookies remain on your device depends on their type:',
      '• Session cookies are deleted when you close your browser.',
      '• Persistent cookies remain for a predetermined period (typically up to 12 months) unless you delete them manually.',
    ],
  },
  {
    title: '7. Do Not Track Signals',
    content: [
      'Our website respects Do Not Track (DNT) signals sent by your browser. When we detect a DNT signal, we do not set non-essential cookies.',
    ],
  },
  {
    title: '8. Updates to This Policy',
    content: [
      'We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. Any changes will be posted on this page with an updated effective date.',
    ],
  },
  {
    title: '9. Contact Us',
    content: [
      'If you have any questions about our use of cookies, please contact us:',
      '• Email: hello@olivebishop.com',
      '• Website: https://olivebishop.com',
    ],
  },
];

export default function CookiesPolicy() {
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
          Cookie Policy
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
        This Cookie Policy explains how Olive Bishop uses cookies and similar technologies 
        when you visit our website. By continuing to browse, you agree to our use of cookies 
        as described in this policy.
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
