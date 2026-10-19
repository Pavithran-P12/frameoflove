// Terms & Conditions and Privacy Policy, reproduced word for word from
// "Frame of Love Terms and Privacy Policy (GST Updated).pdf". Edit here to update the Legal page.
export type Block = { p: string } | { ul: string[] };

export interface LegalSection {
  title: string;
  blocks: Block[];
}

export interface LegalPart {
  id: string;
  title: string;
  intro?: Block[];
  sections: LegalSection[];
}

export const terms: LegalPart = {
  id: 'terms',
  title: 'Terms & Conditions',
  intro: [
    { p: 'Welcome to Frame of Love. By booking our photography, videography, cinematography, or related services, you agree to the following Terms & Conditions.' },
  ],
  sections: [
    {
      title: '1. Booking Confirmation',
      blocks: [
        { p: 'A 20% advance payment of the total package amount is required to confirm the booking and reserve the event date.' },
        { p: 'The event date will be confirmed only after receipt of the advance payment.' },
        { p: 'All bookings are subject to availability and confirmation by Frame of Love.' },
        { p: 'Any changes to the selected package or additional services must be mutually agreed upon.' },
      ],
    },
    {
      title: '2. Payment Terms',
      blocks: [
        { p: 'The total package amount must be paid according to the following schedule:' },
        {
          ul: [
            '20% Advance Payment: Payable at the time of booking to confirm and reserve the event date.',
            '70% Payment: Payable on the wedding day.',
            '10% Final Balance: Payable at the time of wedding album delivery.',
          ],
        },
        { p: 'Any additional services, extra coverage hours, additional albums, drone coverage, LED wall coverage, travel expenses, or other services outside the agreed package may incur additional charges.' },
      ],
    },
    {
      title: '3. Pre-Wedding and Post-Wedding Photoshoots',
      blocks: [
        {
          ul: [
            'A complimentary pre-wedding or post-wedding photoshoot of up to 3 hours is included in selected packages only.',
            'The complimentary photoshoot is subject to the inclusions specified in the selected package.',
            'Any additional shooting hours or services beyond the included duration may incur extra charges.',
            'The photoshoot date, location, and timing must be mutually agreed upon in advance and are subject to team availability.',
            'Travel expenses and travel allowances for the photoshoot must be borne by the client. These expenses are not included in the complimentary photoshoot.',
            'Any special location permissions, entry fees, or other location-related expenses must be borne by the client where applicable.',
          ],
        },
      ],
    },
    {
      title: '4. Cancellation Policy',
      blocks: [
        {
          ul: [
            'All cancellation requests must be communicated to Frame of Love in writing.',
            'Payments made towards a wedding booking are non-refundable in the event of cancellation, subject to applicable law.',
            'Clients are advised to carefully review the booking terms before making payments.',
            'Any applicable legal requirements concerning refunds will be respected.',
          ],
        },
      ],
    },
    {
      title: '5. Rescheduling Policy',
      blocks: [
        {
          ul: [
            'Clients who wish to reschedule their wedding or event must inform Frame of Love in advance and in writing.',
            'Rescheduling is subject to team availability and written confirmation from Frame of Love.',
            'Clients are encouraged to provide as much advance notice as possible to help accommodate the requested date.',
            'If the requested date is unavailable, alternative dates may be discussed.',
            'Any changes to the agreed services or additional expenses arising from rescheduling must be mutually agreed upon.',
          ],
        },
      ],
    },
    {
      title: '6. Photography and Videography Coverage',
      blocks: [
        {
          ul: [
            'Coverage will be provided according to the selected package and agreed event schedule.',
            'Clients must communicate important event timings, venue details, and special photography requirements in advance.',
            'Delays in the event schedule, venue restrictions, or circumstances beyond our reasonable control may affect coverage.',
            'Additional coverage hours, locations, or services outside the selected package may incur extra charges.',
          ],
        },
      ],
    },
    {
      title: '7. Album Design and Approval',
      blocks: [
        {
          ul: [
            'Wedding albums will be designed according to the selected package.',
            'Clients may be required to review and approve the album design before printing.',
            'Requested revisions must be communicated before the album is approved for printing.',
            'Changes requested after final approval may incur additional charges.',
            'Album size, sheet count, finishes, and other specifications will depend on the selected package.',
          ],
        },
      ],
    },
    {
      title: '8. Delivery Timeline',
      blocks: [
        {
          ul: [
            'Delivery timelines for photographs, films, and albums are estimates and may vary depending on editing requirements, album production, workload, and unforeseen circumstances.',
            'Frame of Love will make reasonable efforts to deliver the final materials within the communicated timeframe.',
            'Significant delays will be communicated to clients where reasonably possible.',
            'Clients are encouraged to download and back up their delivered digital files.',
          ],
        },
      ],
    },
    {
      title: '9. Copyright and Usage Rights',
      blocks: [
        {
          ul: [
            'Photographs, videos, cinematic films, and other creative materials produced by Frame of Love are subject to applicable copyright law.',
            'Clients may use delivered materials for personal purposes, subject to the agreed package terms.',
            'Commercial use, resale, or distribution beyond the agreed permissions may require written authorization.',
            'Copyright ownership and usage rights will be governed by applicable law and any separate written agreement.',
          ],
        },
      ],
    },
    {
      title: '10. Portfolio and Promotional Use',
      blocks: [
        { p: 'Frame of Love may request permission to feature selected photographs and videos on its website, social media platforms, portfolio, and marketing materials.' },
        { p: 'Promotional use will be subject to applicable law and the necessary consent or permissions obtained. Clients who do not wish their photographs or videos to be used for promotional purposes should notify Frame of Love in writing before the event.' },
      ],
    },
    {
      title: '11. Client Responsibilities',
      blocks: [
        {
          ul: [
            'Clients must provide accurate event details and contact information.',
            'Clients are responsible for securing venue permissions required for photography and videography.',
            'Special requests, cultural requirements, restricted areas, and limitations on photography must be communicated in advance.',
            'Frame of Love is not responsible for missed shots resulting from venue restrictions, schedule changes, non-cooperation, or circumstances beyond its reasonable control.',
          ],
        },
      ],
    },
    {
      title: '12. Force Majeure and Unforeseen Circumstances',
      blocks: [
        { p: 'Circumstances beyond reasonable control, including natural disasters, accidents, serious illness, government restrictions, or third-party service disruptions, may affect service delivery.' },
        { p: 'In such circumstances, Frame of Love will communicate with the client and discuss reasonable alternative arrangements, including rescheduling where feasible. Any applicable refund obligations under law will continue to apply.' },
      ],
    },
    {
      title: '13. Agreement and Amendments',
      blocks: [
        { p: 'By confirming a booking and making the required advance payment, the client acknowledges these Terms & Conditions and any additional terms agreed upon in writing.' },
        { p: 'Any amendments to the package, payment schedule, coverage, or other booking terms must be mutually agreed upon in writing.' },
      ],
    },
  ],
};

export const privacy: LegalPart = {
  id: 'privacy',
  title: 'Privacy Policy',
  intro: [{ p: 'Effective Date: 20 October 2026' }],
  sections: [
    {
      title: '1. Information We Collect',
      blocks: [
        { p: 'We may collect the following information:' },
        {
          ul: [
            'Name, phone number, and email address.',
            'Wedding or event dates, venue details, and event-related information.',
            'Booking details, package selections, and payment records.',
            'Photographs, videos, and other media created during your event.',
            'Information submitted through our website, enquiry forms, or communication channels.',
          ],
        },
        { p: 'We collect information reasonably necessary to provide our services, manage bookings, communicate with clients, and meet applicable legal obligations.' },
      ],
    },
    {
      title: '2. How We Use Your Information',
      blocks: [
        { p: 'Your information may be used to:' },
        {
          ul: [
            'Respond to enquiries and provide quotations.',
            'Confirm bookings and coordinate event coverage.',
            'Process payments and maintain business records.',
            'Edit, deliver, and manage photographs, films, and albums.',
            'Provide customer support and communicate important updates.',
            'Improve our website, services, and client experience.',
            'Meet applicable legal and regulatory requirements.',
          ],
        },
      ],
    },
    {
      title: '3. Photography and Promotional Consent',
      blocks: [
        { p: 'Photographs and videos from your event may contain identifiable images of clients, family members, guests, and other individuals.' },
        { p: 'Frame of Love may use selected photographs and videos on its website, social media platforms, portfolio, and marketing materials in accordance with applicable law and the relevant consent or permissions obtained.' },
        { p: 'Clients may request exclusion from promotional use by contacting Frame of Love in writing before the event. We will respect agreed restrictions and applicable privacy requirements.' },
        { p: 'Clients should communicate any specific privacy requirements concerning children or other individuals featured in their event.' },
      ],
    },
    {
      title: '4. Sharing of Personal Information',
      blocks: [
        { p: 'Frame of Love does not sell personal information to third parties.' },
        { p: 'Information may be shared with trusted service providers, such as album printing partners, photo delivery platforms, website hosting providers, and payment processors, when necessary to provide our services.' },
        { p: 'Information may also be disclosed where required by law or where necessary to establish, exercise, or defend legal claims.' },
      ],
    },
    {
      title: '5. Data Security and Retention',
      blocks: [
        { p: 'We take reasonable technical and organisational measures to protect personal information against unauthorized access, loss, misuse, or disclosure.' },
        { p: 'Photographs, videos, and project files may be retained for editing, delivery, backup, and legitimate business purposes. Unless a separate written storage agreement exists, we do not guarantee indefinite storage of all original files or completed projects.' },
        { p: 'Clients are encouraged to download and back up their delivered photographs and films for long-term safekeeping.' },
      ],
    },
    {
      title: '6. Cookies and Website Analytics',
      blocks: [
        { p: 'Our website may use cookies and similar technologies to support website functionality, analyse visitor activity, and improve the browsing experience.' },
        { p: 'You may manage or disable cookies through your browser settings. Some website features may not function correctly if certain cookies are disabled.' },
        { p: 'Where required, appropriate information and choices regarding cookies and analytics technologies will be provided.' },
      ],
    },
    {
      title: '7. Your Privacy Rights',
      blocks: [
        { p: 'Subject to applicable law, you may request access to, correction of, or deletion of personal information held by Frame of Love.' },
        { p: 'Certain information may need to be retained to meet legal obligations, maintain business records, or establish, exercise, or defend legal claims.' },
      ],
    },
    {
      title: '8. Third-Party Websites and Services',
      blocks: [
        { p: 'Our website may contain links to third-party websites, online galleries, payment services, or other platforms. These services operate under their own privacy policies.' },
        { p: 'Frame of Love is not responsible for privacy practices outside its control.' },
      ],
    },
    {
      title: '9. Changes to This Privacy Policy',
      blocks: [
        { p: 'Frame of Love may update this Privacy Policy from time to time to reflect changes in our services, business practices, or legal requirements.' },
        { p: 'Updates will be published on this page with a revised effective date where appropriate.' },
      ],
    },
    {
      title: '10. Contact Us',
      blocks: [
        { p: 'For booking enquiries, privacy concerns, data access or deletion requests, or questions regarding the use of your photographs, please contact us.' },
      ],
    },
  ],
};

/** Business details from section 10 of the Privacy Policy. */
export const business = {
  name: 'Frame of Love',
  website: 'https://frameoflove.co.in/',
  email: 'frameoflove06@gmail.com',
  address: '32, Kaliammal Colony, kanuvai Road, Thudiyalur, Coimbatore, Tamil Nadu – 641034, India.',
  gstin: '33CRKPA0778A1ZA',
  closing: 'We will review privacy-related requests and respond within a reasonable period in accordance with applicable law.',
};
