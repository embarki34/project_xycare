// Single place to swap placeholder content for the real assets.

// TODO: replace with the real catalogue (drop the PDF in /public and use "/catalogue-condor-academy-2026.pdf").
export const CATALOGUE_PDF_URL =
  "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

// TODO: replace with the real monthly planning video (MP4 in /public, or a hosted URL).
export const PLANNING_VIDEO_URL =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
export const PLANNING_VIDEO_POSTER =
  "https://placehold.co/1280x720/101F4C/FFFFFF?text=Planning+mensuel";

export const MAPS_LINK = "https://maps.app.goo.gl/VXLTFjiUzzHUrRU98";
export const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1293.6358444406662!2d4.741870902024766!3d36.05197484133792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128cbd002b394b6f%3A0xa2355882cad9239e!2sSpa%20Condor%20Academy!5e0!3m2!1sen!2sdz!4v1791703254121!5m2!1sen!2sdz";

// Banners are shown only between `start` and `end` (inclusive, local time).
export const BANNER_SCHEDULE = {
  formatech: { start: "2026-09-01", end: "2026-10-15" },
  rose: { start: "2026-10-01", end: "2026-10-31" },
} as const;

// Subsidiary websites (backlinks). Entries without a URL render as plain logos.
// TODO: Nardi URL still missing.
export const SUBSIDIARY_URLS: Record<string, string | undefined> = {
  "Condor Electronics": "https://www.condor.dz",
  Cristor: "https://cristor.dz/",
  Hisense: "https://www.facebook.com/HisenseAlgeriaOfficial/",
  Nardi: undefined,
  "BBA Steel": "https://bordjsteel.dz/",
  "Condor Immobilier": "https://condorimmo.dz/",
  Khadamaty: "https://www.khadamaty.dz/",
  "Condor Logistics": "https://condorlogistics.dz/",
};
