import heroSectionBg from '@public/images/ns-img-217.svg';
import Image from 'next/image';
import { Fragment } from 'react';
import { getHeroData } from '@/lib/wordpress';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Hero = async () => {
  const heroData = await getHeroData();
  const title = heroData?.hero_title?.trim() || 'Build wealth with *automated investments.*';
  const subtitle =
    heroData?.hero_subtitle?.trim() ||
    "At NextSaaS, we help you invest confidently—offering tools that align with your goals, minimize risk, and maximize long-term growth. Whether saving for retirement or growing your portfolio, we've got you covered.";
  const primaryButtonText = heroData?.button_text?.trim() || 'Start Investing';
  const primaryButtonUrl = heroData?.button_url?.trim() || '/pricing';
  const secondaryButtonText = heroData?.button_text_2?.trim() || 'Learn more';
  const secondaryButtonUrl = heroData?.['button-url-2']?.trim() || '/tutorial';
  const titleParts = title.match(/^([\s\S]*?)\*([\s\S]+?)\*([\s\S]*)$/);
  const isExternalUrl = (url: string) => /^https?:\/\//i.test(url);

  return (
    <section className="dark:bg-background-6 relative bg-white min-[1921px]:overflow-hidden">
      <RevealAnimation offset={0} delay={0.5}>
        <figure className="absolute top-[50%] z-[1] w-full min-[1440px]:top-[350px] min-[2559px]:!top-[0px] sm:top-[38%] md:top-[20%] lg:top-[20%] xl:top-[411px] 2xl:top-[194px]">
          <Image src={heroSectionBg} alt="-bg" className="h-full w-full object-contain" />
        </figure>
      </RevealAnimation>

      <div className="mx-auto max-w-[1365px]">
        <div className="pt-20 pb-14 sm:pt-24 sm:pb-20 md:pt-24 lg:pt-28 xl:pt-[109px] xl:pb-[94px]">
          <div className="h-auto bg-[url('/images/ns-img-218.svg')] bg-center bg-no-repeat xl:h-[962px] dark:bg-[url('/images/ns-img-dark-148.svg')]">
            <div className="main-container">
              <div className="relative z-[2] space-y-10 pt-[71px] md:space-y-14">
                {/* heading  */}
                <div className="space-y-4">
                  <RevealAnimation delay={0.1}>
                    <h1 className="mx-auto max-w-[800px] text-center xl:w-full xl:max-w-[1140px]">
                      {titleParts ? (
                        <>
                          {titleParts[1]}
                          <span className="text-primary-500">{titleParts[2]}</span>
                          {titleParts[3]}
                        </>
                      ) : (
                        title
                      )}
                    </h1>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <p className="mx-auto max-w-[600px] text-center md:w-full xl:max-w-[804px]">
                      {subtitle.split(/\r?\n/).map((line, index) => (
                        <Fragment key={index}>
                          {index > 0 && <br />}
                          {line}
                        </Fragment>
                      ))}
                    </p>
                  </RevealAnimation>
                </div>
                {/* cta btn  */}
                <ul className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
                  <RevealAnimation delay={0.3} direction="left" offset={50}>
                    <li className="w-full sm:w-auto">
                      <LinkButton
                        href={primaryButtonUrl}
                        target={isExternalUrl(primaryButtonUrl) ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="btn btn-secondary dark:btn-accent hover:btn-white dark:hover:btn-white-dark btn-md md:btn-xl mx-auto w-[90%] md:mx-0 md:w-auto"
                        aria-label="Begin your investment journey">
                        {primaryButtonText}
                      </LinkButton>
                    </li>
                  </RevealAnimation>
                  <RevealAnimation delay={0.5} direction="left" offset={50}>
                    <li className="w-full sm:w-auto">
                      <LinkButton
                        href={secondaryButtonUrl}
                        target={isExternalUrl(secondaryButtonUrl) ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="btn hover:btn-secondary dark:hover:btn-accent btn-white dark:btn-transparent btn-md md:btn-xl mx-auto w-[90%] md:mx-0 md:w-auto"
                        aria-label="Learn more about our investment platform">
                        {secondaryButtonText}
                      </LinkButton>
                    </li>
                  </RevealAnimation>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
