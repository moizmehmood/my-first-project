# WordPress Posts Integration Guide

This guide describes how to fetch WordPress posts from the REST API and display them in a Next.js App Router project. It covers the post list, featured images, pagination, detail routes, and the `next/image` host configuration.

## 1. Configure the WordPress API URL

Add the WordPress site URL to the project's local environment file:

```dotenv
WORDPRESS_API_URL=http://localhost/headless-wordpress/wordpress
```

Use the WordPress site root, not the REST endpoint itself. The helper appends `/wp-json/wp/v2/...`. Remove the trailing slash or normalize it in code to avoid accidental double slashes. Do not commit secrets or private environment files. Restart the Next.js dev server after changing environment variables.

For a deployed app, the URL must be reachable from the Next.js server. Image URLs must also be reachable by the browser. In particular, `localhost` in a WordPress `source_url` means the machine running the browser, not necessarily the server or container running Next.js.

## 2. Fetch Posts with Embedded Featured Media

Use the WordPress posts endpoint with `_embed`. This includes media details for posts with a featured image, so a separate media request is not needed for each card.

```ts
const API = process.env.WORDPRESS_API_URL?.replace(/\/+$/, '');

export type Post = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content?: { rendered: string };
  featured_media?: number;
  _embedded?: {
    'wp:featuredmedia'?: { source_url: string }[];
  };
};

export async function getPosts(): Promise<Post[]> {
  if (!API) throw new Error('WORDPRESS_API_URL is not configured');

  const response = await fetch(`${API}/wp-json/wp/v2/posts?_embed`, {
    cache: 'no-store',
  });

  if (!response.ok) throw new Error('Failed to fetch WordPress posts');
  return response.json();
}
```

`cache: 'no-store'` requests fresh posts on each server render. If the site needs caching, use an appropriate revalidation interval instead.

The API fields used by the UI are:

| UI value           | WordPress field                                         |
| ------------------ | ------------------------------------------------------- |
| Title              | `post.title.rendered`                                   |
| Slug / detail URL  | `post.slug`                                             |
| Date               | `post.date`                                             |
| Summary            | `post.excerpt.rendered`                                 |
| Full post body     | `post.content.rendered`                                 |
| Featured image URL | `post._embedded?.['wp:featuredmedia']?.[0]?.source_url` |

The `_embedded` image is absent when a post has no featured image. For example, `featured_media: 0` means WordPress has no image URL to return. Set a Featured Image in WordPress to show a real post image; otherwise render a local fallback asset.

## 3. Render a Post List

Fetch data in an async Server Component, map it into the card model already used by the project, and pass plain serializable data to any Client Component that handles pagination. Keep the existing UI and CSS classes where possible.

Example mapping for a case-study card:

```tsx
const posts = await getPosts();
const caseStudies = posts.map((post) => ({
  title: stripHtml(post.title.rendered),
  slug: post.slug,
  description: stripHtml(post.excerpt.rendered) || stripHtml(post.content?.rendered ?? '') || 'Details coming soon.',
  thumbnail: post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? '/images/post-placeholder.png',
  content: post.content?.rendered ?? '',
  result: '',
  before: [],
  after: [],
  keyFeatures: [],
  userReview: { userName: '', userImage: '', userRole: '', reviewText: '' },
}));
```

Adapt the returned object to the target project's card type. If the cards render WordPress `rendered` fields as HTML, do not treat that HTML as ordinary text. Either convert it to plain text for excerpts or render trusted/sanitized HTML in the detail view. Avoid unsafe HTML rendering for content that has not been sanitized.

When there are no posts or the API fails, show an intentional empty/error state or hide the section. Do not let a failed API request crash the entire page. For a paginated card list, calculate pages from the mapped post count and slice the array for the current page.

## 4. Display Images with Next.js

Use the embedded `source_url` and provide a local fallback. The fallback image must exist under the target project's `public/` directory.

```tsx
<Image
  src={postImageUrl ?? '/images/post-placeholder.png'}
  alt={postTitle}
  width={409}
  height={260}
  className="size-full object-cover"
/>
```

If using the Next.js image optimizer, add every image hostname to `remotePatterns` as described in the next section. For a local WordPress URL that the optimizer cannot fetch, `unoptimized` can make the browser request the original `source_url` directly:

```tsx
<Image
  src={postImageUrl ?? '/images/post-placeholder.png'}
  alt={postTitle}
  width={409}
  height={260}
  unoptimized
  className="size-full object-cover"
/>
```

Direct rendering still requires the URL to be reachable from the user's browser. A `localhost` media URL will not work for visitors on another machine; configure WordPress to return a public, reachable media URL for deployed sites.

## 5. Configure Remote Image Hosts

Include the WordPress hostname derived from `WORDPRESS_API_URL` and any additional trusted image hostnames. This is the project's Next.js image configuration; preserve other existing settings such as aliases.

```ts
import type { NextConfig } from 'next';

const wordpressApiUrl = process.env.WORDPRESS_API_URL;
const wordpressImageHostname = wordpressApiUrl ? new URL(wordpressApiUrl).hostname : undefined;

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      '@': './src',
      '@public': './public',
    },
  },
  images: {
    qualities: [25, 50, 75, 100],
    remotePatterns: [
      ...(wordpressImageHostname ? [{ hostname: wordpressImageHostname }] : []),
      { protocol: 'https', hostname: 'www.olympicmgmt.com' },
    ],
  },
};

export default nextConfig;
```

The `new URL(...)` call expects `WORDPRESS_API_URL` to be an absolute URL, including `http://` or `https://`. If WordPress serves media from a different hostname than the API, add that media hostname to `remotePatterns` too. Restart Next.js after changing `next.config.ts`. `remotePatterns` applies to optimized `next/image` requests; it is not a substitute for a publicly reachable source URL when using `unoptimized`.

## 6. Make “Read More” Open the WordPress Post

Each card should link using the WordPress slug, for example:

```tsx
<Link href={`/case-study/${post.slug}`}>Read more</Link>
```

Create a matching dynamic route such as `src/app/case-study/[slug]/page.tsx`. In its server-rendered detail component, fetch the posts, find the matching slug, and render the post title, featured image, and body. Handle a missing post with the framework's `notFound()` behavior rather than assuming a Markdown file exists.

```tsx
import { notFound } from 'next/navigation';
import { getPosts } from '@/lib/wordpress';

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = (await getPosts()).find((item) => item.slug === slug);

  if (!post) notFound();

  const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <article>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      {image && <img src={image} alt="" />}
      <div dangerouslySetInnerHTML={{ __html: post.content?.rendered ?? '' }} />
    </article>
  );
}
```

The snippet uses HTML from the WordPress REST API. Only render it as HTML when the WordPress content is trusted and appropriately sanitized; otherwise sanitize it or convert it to plain text. Use `next/image` and the image configuration above if optimization is desired.

If the project supports both Markdown and WordPress content, choose the source deliberately: look up the WordPress post first, then use the Markdown fallback only when the slug belongs to a known Markdown item. Do not send an unknown WordPress slug into a Markdown loader that expects a file to exist.

## 7. Apply the Same Pattern to a Homepage Blog Section

The homepage can fetch the same `getPosts()` data and map the first few posts to the existing blog card interface. Map `title.rendered`, `excerpt.rendered`, `date`, `slug`, and the embedded featured image; calculate or provide any card-specific fields such as read time. Guard optional cards when fewer posts are returned.

Check the destination of those cards as well. If `/blog/[slug]` still reads only local Markdown files, API-only WordPress slugs will not work there. Add the same API-by-slug detail lookup to the blog route or keep the card links pointed at a route that supports those WordPress posts.

## 8. Verify the Integration

1. Confirm `WORDPRESS_API_URL` is set and points to the WordPress site root.
2. Open `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?_embed` and confirm the response contains published posts.
3. For posts expected to have images, confirm `featured_media` is nonzero and `_embedded['wp:featuredmedia'][0].source_url` exists.
4. Confirm the image hostname is included in `remotePatterns`, or use `unoptimized` for direct browser rendering.
5. Open the list page, verify fallback behavior for posts without images, and click both the card and “Read more”.
6. Confirm the detail route finds the same WordPress slug and displays content.
7. Run the project's TypeScript check and lint command, then test the page in the browser.

## Current Project Notes

- `src/lib/wordpress.ts` exports `getPosts()` and the WordPress `Post` type.
- `src/components/case-study/Success.tsx` maps API posts into the existing case-study card shape.
- `src/components/case-study/CaseStudyPaginationWrapper.tsx` renders the cards and pagination; its WordPress images use `unoptimized`.
- `src/components/case-study/CaseStudyDetails.tsx` looks up WordPress posts by slug and retains Markdown rendering as a fallback for existing case studies.
- `src/app/case-study/[slug]/page.tsx` provides the dynamic case-study route.
- `src/components/home/Blog.tsx` also maps WordPress posts, but its links point to `/blog/[slug]`. That blog detail route remains Markdown-based in this project; add a WordPress lookup there if homepage cards need to open API-only posts.
- The current case-study list and detail components use `/images/ns-img-380.png` when no featured image exists. Each receiving project must provide an equivalent fallback asset or update the path.
