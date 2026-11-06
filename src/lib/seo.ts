// Public address of the live site, used for canonical links and share images.
export const SITE_URL = "https://whertheseabegins.lovable.app";

export const absoluteUrl = (path: string) =>
  /^https?:\/\//.test(path) ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const canonical = (path: string) => [{ rel: "canonical", href: absoluteUrl(path) }];
