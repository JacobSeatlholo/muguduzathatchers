/**
 * Prefixes asset paths with the deploy base path (used for GitHub Pages
 * project-site exports). Empty string in normal dev/production deploys.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${BASE_PATH}${path}`;

export const CONTACT = {
  phoneDisplay: "082 713 6435",
  phoneHref: "tel:+27827136435",
  email: "info@muguduzathatchers.co.za",
  addressLines: [
    "2161 Lehapu Street",
    "Klipfontein View Ext 2",
    "Midrand, Gauteng",
    "1683",
  ],
  facebook: "https://www.facebook.com/muguduzathatchers",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: 23, suffix: "", label: "Years of master thatching" },
  { value: 30, suffix: "", label: "Skilled staff members" },
  { value: 3, suffix: "", label: "Dedicated craft teams" },
  { value: 100, suffix: "%", label: "Hands-on ownership" },
];

export type GalleryCategory =
  | "new-roofs"
  | "repairs"
  | "conversions"
  | "on-site";

export const GALLERY_CATEGORIES: { id: GalleryCategory | "all"; label: string }[] =
  [
    { id: "all", label: "All Work" },
    { id: "new-roofs", label: "New Thatch Roofs" },
    { id: "repairs", label: "Repairs & Re-thatch" },
    { id: "conversions", label: "Roof Conversions" },
    { id: "on-site", label: "On Site" },
  ];

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
};

const g = (
  n: number,
  caption: string,
  category: GalleryCategory,
  alt?: string
): GalleryItem => ({
  src: asset(`/images/gallery/img_${n}.jpeg`),
  alt: alt ?? caption,
  caption,
  category,
});

export const GALLERY: GalleryItem[] = [
  g(1, "Signature cone-thatch lapa with steel finial", "new-roofs"),
  g(2, "Round lapa thatch receiving its final dressing", "new-roofs"),
  g(8, "Golden-hour finish on a hip thatch roof", "new-roofs"),
  g(14, "Sweeping hip-end thatch, freshly combed", "new-roofs"),
  g(15, "Cone-and-hip thatch blend on a bushveld home", "new-roofs"),
  g(16, "Multi-cone thatch over a country residence", "new-roofs"),
  g(17, "Large hip thatch roof nearing completion", "new-roofs"),
  g(7, "Re-thatching and combing a farmhouse roof", "repairs"),
  g(10, "Fresh thatch laid over a renovated roofline", "repairs"),
  g(12, "Full re-thatch of a double-storey home", "repairs"),
  g(19, "Thatch-profile shingle conversion on scaffold", "conversions"),
  g(20, "Shingle-finish hip roof conversion", "conversions"),
  g(21, "Shingle finish on a renovated Highveld home", "conversions"),
  g(22, "Tiled lapa and entertainment area", "conversions"),
  g(23, "Roof conversion on a stone-and-shingle home", "conversions"),
  g(24, "Re-roofing in progress with scaffolding", "conversions"),
  g(18, "Completed conversion home in a bushveld setting", "conversions"),
  g(3, "Hand-bundling grass on a new roof span", "on-site"),
  g(4, "On site with the Muguduza crew and bakkie", "on-site"),
  g(5, "Team thatching twin lapa roofs", "on-site"),
  g(6, "Dressing a new thatch roof by hand", "on-site"),
  g(11, "Carpenters setting wall plates and battens", "on-site"),
  g(13, "Thatch bundles and sawn battens in place", "on-site"),
  g(25, "Laying thatch bundles across a big span roof", "on-site"),
];

export const HERO_SLIDES = [
  {
    src: asset("/images/gallery/img_8.jpeg"),
    alt: "Golden thatch roof at sunset completed by Muguduza Thatchers",
  },
  {
    src: asset("/images/gallery/img_1.jpeg"),
    alt: "Perfect cone thatch roof against a blue sky",
  },
  {
    src: asset("/images/gallery/img_16.jpeg"),
    alt: "Multi-cone thatch roof on a country residence",
  },
];

export const REFERENCES = [
  {
    name: "Benny Longburg",
    phoneDisplay: "082 651 2867",
    phoneHref: "tel:+27826512867",
  },
  {
    name: "Professor Art Bosenkool",
    phoneDisplay: "082 522 4077",
    phoneHref: "tel:+27825224077",
  },
  {
    name: "Dennis Ferriera",
    phoneDisplay: "082 444 8878",
    phoneHref: "tel:+27824448878",
  },
];
