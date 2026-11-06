import { IBlogPost } from '@/interface';
import { getPosts } from '@/lib/wordpress';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV4 from '../shared/card/BlogCardV4';
import BlogCardV5 from '../shared/card/BlogCardV5';
import LinkButton from '../ui/button/LinkButton';

const plainText = (html: string) =>
  html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code: string) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const Blog = async () => {
  let blogs: IBlogPost[];

  try {
    const posts = await getPosts();
    console.log('Fetched posts:', posts);
    blogs = posts.slice(0, 3).map((post) => {
      const content = plainText(post.content?.rendered ?? post.excerpt.rendered);
      const readTime = Math.max(1, Math.ceil(content.split(' ').length / 200));

      return {
        tag: '',
        author: '',
        authorImage: '',
        publishDate: new Date(post.date).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
        title: plainText(post.title.rendered),
        description: plainText(post.excerpt.rendered),
        thumbnail: post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? '/images/ns-img-414.jpg',
        readTime: `${readTime} min read`,
        slug: post.slug,
        content: '',
      };
    });
  } catch {
    return null;
  }

  if (!blogs.length) {
    return null;
  }

  return (
    <section className="dark:bg-background-6 bg-white pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-10 space-y-5 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan inline-block">Journal</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>
                Thoughts &amp; <span className="text-primary-500">ideas</span>
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[492px]">
                &nbsp;A collection of thoughts, experiments, and insights around design, technology, and creativity.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="space-y-14">
          <div className="grid grid-cols-12 items-start gap-y-8 lg:gap-8 xl:items-center">
            {/* blog one  */}
            <RevealAnimation delay={0.4}>
              <div className="col-span-12 lg:col-span-5 xl:col-span-6">
                <BlogCardV4 blog={blogs[0]} />
              </div>
            </RevealAnimation>

            <div className="col-span-12 space-y-8 lg:col-span-7 xl:col-span-6">
              {/* blog two  */}
              <RevealAnimation delay={0.5}>
                  {blogs[1] && <BlogCardV5 blog={blogs[1]} />}
              </RevealAnimation>
              {/* blog three */}

              <RevealAnimation delay={0.6}>
                {blogs[2] && <BlogCardV5 blog={blogs[2]} />}
              </RevealAnimation>
            </div>
          </div>
          <div className="text-center">
            <RevealAnimation delay={0.7}>
              <LinkButton
                href="/blog"
                className="btn btn-secondary btn-md dark:btn-transparent hover:btn-white dark:hover:btn-accent mx-auto w-[85%] md:mx-0 md:w-auto">
                View all
              </LinkButton>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
