import { ICaseStudy } from '@/interface';
import { getPosts } from '@/lib/wordpress';
import RevealAnimation from '../animation/RevealAnimation';
import CaseStudyPaginationWrapper from './CaseStudyPaginationWrapper';

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
    .replace(/&hellip;/g, '...')
    .replace(/\s+/g, ' ')
    .trim();

const Success = async () => {
  let caseStudies: ICaseStudy[];

  try {
    const posts = await getPosts();
    caseStudies = posts.map((post) => ({
      title: plainText(post.title.rendered),
      thumbnail: post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? '/images/ns-img-380.png',
      description:
        plainText(post.excerpt.rendered) || plainText(post.content?.rendered ?? '') || 'Details coming soon.',
      result: '',
      slug: post.slug,
      content: post.content?.rendered ?? '',
      before: [],
      after: [],
      keyFeatures: [],
      userReview: { userName: '', userImage: '', userRole: '', reviewText: '' },
    }));
  } catch {
    return null;
  }

  if (!caseStudies.length) {
    return null;
  }

  return (
    <section className="py-[50px] lg:py-[100px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading  */}
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <h2 className="text-heading-3">More success stories</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="mx-auto max-w-[738px]">
                Our recent news and insights highlight the latest developments, achievements, and thought leadership
                shaping our journey forward. From product innovations and strategic partnerships to industry trends
              </p>
            </RevealAnimation>
          </div>
          {/* success blog   */}
          <div className="space-y-14">
            {/*  pagination  */}
            <CaseStudyPaginationWrapper caseStudies={caseStudies} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
