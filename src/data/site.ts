// Contact details and links used across the site. Change them here once.
export const PHONE = '8508301446';
export const PHONE_INTL = '918508301446';
export const INSTAGRAM = 'https://www.instagram.com/frame__of__love';
export const YOUTUBE = 'https://www.youtube.com/@frame_of_love_01';
export const YOUTUBE_HANDLE = '@frame_of_love_01';
export const MAPS = 'https://www.google.com/maps/search/?api=1&query=Frame%20OF%20Love%2C%20Coimbatore';

/** A WhatsApp chat link with a pre-filled message. */
export const whatsapp = (text: string) =>
  `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(text)}`;
