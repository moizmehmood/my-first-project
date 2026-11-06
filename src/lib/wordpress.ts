const API = process.env.WORDPRESS_API_URL;

export type HeroData = {
  hero_badge?: string;
  hero_title?: string;
  hero_subtitle?: string;
  hero_image?: { url: string } | string | false | null;
  button_text?: string;
  button_url?: string;
  button_text_2?: string;
  'button-url-2'?: string;
};

export type ClientsData = {
  clients_title?: string;
  clients_highlight?: string;
  client_logos?: {
    logo?: string | { url?: string } | number | null | false;
    logo_dark?: string | { url?: string } | number | null | false;
  }[] | null;
};

export type Post = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content?: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string }[];
  };
};

type PageFetchCache = { cache: 'no-store' } | { next: { revalidate: number } };

async function getPageAcf<T>(slug: string, cache: PageFetchCache): Promise<T | null> {
  if (!API) {
    return null;
  }

  try {
    const res = await fetch(
      `${API.replace(/\/+$/, '')}/wp-json/wp/v2/pages?slug=${encodeURIComponent(slug)}&_fields=acf`,
      cache,
    );
    if (!res.ok) {
      return null;
    }

    const pages = (await res.json()) as { acf?: unknown }[];
    const acf = pages[0]?.acf;
    if (!acf || typeof acf !== 'object') {
      return null;
    }

    return acf as T;
  } catch {
    return null;
  }
}

export async function getHeroData(): Promise<HeroData | null> {
  return getPageAcf<HeroData>('home', { cache: 'no-store' });
}

function getAcfImageUrl(value: unknown): string {
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed || /^\d+$/.test(trimmed)) {
      return '';
    }
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      return trimmed;
    }
    if (trimmed.startsWith('/') && API) {
      return `${API.replace(/\/+$/, '')}${trimmed}`;
    }
    return trimmed;
  }

  if (value && typeof value === 'object') {
    const image = value as { url?: unknown; source_url?: unknown };
    if (typeof image.url === 'string' && image.url.trim()) {
      return image.url.trim();
    }
    if (typeof image.source_url === 'string' && image.source_url.trim()) {
      return image.source_url.trim();
    }
  }

  return '';
}

function getAcfImageId(value: unknown): number | null {
  if (typeof value === 'number' && Number.isFinite(value) && value > 0) {
    return value;
  }

  if (typeof value === 'string' && /^\d+$/.test(value.trim())) {
    return Number(value.trim());
  }

  if (value && typeof value === 'object') {
    const image = value as { id?: unknown; ID?: unknown };
    if (typeof image.id === 'number' && image.id > 0) {
      return image.id;
    }
    if (typeof image.ID === 'number' && image.ID > 0) {
      return image.ID;
    }
  }

  return null;
}

async function resolveAcfImage(value: unknown): Promise<string> {
  const directUrl = getAcfImageUrl(value);
  if (directUrl) {
    return directUrl;
  }

  const mediaId = getAcfImageId(value);
  if (!mediaId) {
    return '';
  }

  return (await getMediaUrl(mediaId)) ?? '';
}

export async function getClientsData(): Promise<ClientsData | null> {
  const data = await getPageAcf<ClientsData>('home', { next: { revalidate: 60 } });
  if (!data?.client_logos?.length) {
    return data;
  }

  const client_logos = await Promise.all(
    data.client_logos.map(async (row) => {
      const logo = await resolveAcfImage(row.logo);
      const logoDark = await resolveAcfImage(row.logo_dark);

      return {
        logo: logo || undefined,
        logo_dark: logoDark || undefined,
      };
    }),
  );

  return { ...data, client_logos };
}

export async function getHero(): Promise<HeroData | null> {
  try {
    const res = await fetch(`${API}/wp-json/wp/v2/pages?slug=home`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    const acf = data[0]?.acf;
    if (!acf) return null;

    const img = acf.hero_image;

    // number (31) ya text ("31") dono handle honge
    if (typeof img === "number" || (typeof img === "string" && /^\d+$/.test(img))) {
      const url = await getMediaUrl(Number(img));
      acf.hero_image = url ?? null;
    }

    console.log("Hero image final:", acf.hero_image);
    return acf;
  } catch (e) {
    console.log("getHero error:", e);
    return null;
  }
}

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${API}/wp-json/wp/v2/posts?_embed`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}
export async function getMediaUrl(id: number): Promise<string | undefined> {
  if (!API) {
    return undefined;
  }

  try {
    const res = await fetch(`${API.replace(/\/+$/, '')}/wp-json/wp/v2/media/${id}`, {
      cache: 'no-store',
    });
    if (!res.ok) return undefined;
    const media = await res.json();
    return typeof media.source_url === 'string' ? media.source_url : undefined;
  } catch {
    return undefined;
  }
}