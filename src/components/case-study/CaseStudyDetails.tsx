import { ICaseStudy } from '@/interface';
import { getPosts } from '@/lib/wordpress';
import getMarkDownContent from '@/utils/getMarkDownContent';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import RevealAnimation from '../animation/RevealAnimation';
import CaseStudyTestimonial from './CaseStudyTestimonial';

interface CaseStudyDetailsProps {
  slug: string;
}

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

const CaseStudyDetails = async ({ slug }: CaseStudyDetailsProps) => {
  try {
    const post = (await getPosts()).find((item) => item.slug === slug);

    if (post) {
      const content = plainText(post.content?.rendered ?? post.excerpt.rendered);
      const thumbnail = post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? '/images/ns-img-380.png';

      return (
        <section className="pt-[100px] pb-16 lg:pt-[140px] lg:pb-20 xl:pt-[170px] xl:pb-28">
          <div className="main-container space-y-10">
            <RevealAnimation delay={0.2}>
              <h2 className="text-heading-3">{plainText(post.title.rendered)}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <figure className="max-h-[700px] max-w-[1290px] overflow-hidden rounded-4xl">
                <Image
                  src={thumbnail}
                  alt={plainText(post.title.rendered)}
                  width={1290}
                  height={800}
                  unoptimized
                  className="size-full object-cover"
                />
              </figure>
            </RevealAnimation>
            <div className="case-study-details mx-auto max-w-[950px]">
              <p>{content || 'Details coming soon.'}</p>
            </div>
          </div>
        </section>
      );
    }
  } catch {}

  const caseStudy: ICaseStudy = getMarkDownContent('src/data/case-study/', slug).data as ICaseStudy;

  return (
    <section className="pt-[100px] pb-16 lg:pt-[140px] lg:pb-20 xl:pt-[170px] xl:pb-28">
      <div className="main-container">
        <div className="space-y-[70px]">
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-3">{caseStudy.title}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <figure className="max-h-[700px] max-w-[1290px] overflow-hidden rounded-4xl">
              <Image
                src={caseStudy.thumbnail}
                alt="Detailed view of Velocity Finance case study implementation"
                width={1290}
                height={800}
                className="size-full object-cover"
              />
            </figure>
          </RevealAnimation>
          <div className="case-study-details mx-auto max-w-[950px] space-y-[72px]">
            <ReactMarkdown>{caseStudy.content}</ReactMarkdown>

            {/* result  */}
            <div>
              <RevealAnimation delay={0.4}>
                <h3 className="text-heading-4">The results</h3>
              </RevealAnimation>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-3">
                {/* 1st column  */}
                <RevealAnimation delay={0.5}>
                  <div className="[&>p]:border-b-stroke-4 dark:[&>p]:border-b-stroke-7 max-w-[306] [&>p]:border-b [&>p]:last:border-b-0">
                    <p className="text-secondary dark:text-accent py-4 font-medium">Metric</p>
                    <p className="py-4">Manual reporting time</p>
                    <p className="py-4">Financial statement accuracy</p>
                    <p className="py-4">Leadership meeting prep time</p>
                    <p className="py-4">Decision-making speed</p>
                  </div>
                </RevealAnimation>
                {/* 2nd column  */}
                <RevealAnimation delay={0.6}>
                  <div className="dark:bg-background-6 [&>p]:border-b-stroke-4 dark:[&>p]:border-b-stroke-7 max-w-[306] rounded-[20px] bg-white px-6 text-center [&>p]:border-b [&>p]:last:border-b-0">
                    <p className="text-secondary dark:text-accent border-b py-4 font-medium">Before</p>

                    {caseStudy.before?.map((item: string, index: number) => (
                      <p key={index + 1} className="border-b py-4 last:border-b-0">
                        {item}
                      </p>
                    ))}
                  </div>
                </RevealAnimation>
                {/* 3rd column  */}
                <RevealAnimation delay={0.7}>
                  <div className="[&>p]:border-b-stroke-4 dark:[&>p]:border-b-stroke-7 dark:bg-background-6 max-w-[306] rounded-[20px] bg-white px-6 text-center [&>p]:border-b [&>p]:last:border-b-0">
                    <p className="text-secondary dark:text-accent py-4 font-medium">After</p>
                    {caseStudy.after?.map((item: string, index: number) => (
                      <p key={index + 1} className="border-b py-4 last:border-b-0">
                        {item}
                      </p>
                    ))}
                  </div>
                </RevealAnimation>
              </div>
            </div>
            {/* testimonial  */}
            <CaseStudyTestimonial userReview={caseStudy.userReview} />

            {/* feature  */}
            <RevealAnimation delay={0.2}>
              <div className="space-y-6">
                <h5 className="text-heading-4">Key Features Used</h5>
                <ul className="space-y-2">
                  {caseStudy.keyFeatures?.map((feature: string, index: number) => (
                    <li key={index + 1} className="text-secondary/60 dark:!text-accent/60 flex items-center gap-x-4">
                      <span className="bg-secondary dark:bg-accent size-1.5 rounded-full"></span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetails;
