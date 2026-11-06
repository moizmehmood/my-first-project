import { cn } from '@/utils/cn';
import holdMobile from '@public/images/ns-img-206.png';
import gradient31 from '@public/images/ns-img-519.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const featureList = [
  {
    id: '1',
    title: 'Enforce passcode policies',
    icon: 'ns-shape-15',
    description: 'Apply in minutes from any device—no paperwork, no hassle.',
  },
  {
    id: '2',
    title: 'Lock devices in kiosk mode',
    icon: 'ns-shape-24',
    description: 'Our specialists guide you every step of the way, tailored to your needs.',
  },
  {
    id: '3',
    title: 'Real-time sync across devices',
    icon: 'ns-shape-21',
    description: 'Get access to fair rates with zero hidden fees or surprises.',
  },
  {
    id: '4',
    title: 'App whitelisting & blacklisting',
    icon: 'ns-shape-7',
    description: 'Know where you stand quickly—get pre-approved in hours, not days.',
  },
  {
    id: '5',
    title: 'Configure wi-fi & network settings',
    icon: 'ns-shape-34',
    description: 'Apply in minutes from any device—no paperwork, no hassle.',
  },
  {
    id: '6',
    title: 'Remote wipe & factory reset',
    icon: 'ns-shape-36',
    description: 'We stay with you post-closing to ensure a smooth transition.',
  },
];

const Feature = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container">
        <div className="dark:bg-background-6 relative overflow-hidden rounded-4xl bg-white px-3.5 pt-10 md:pt-16 lg:px-14 lg:pt-20 xl:pt-[100px]">
          {/* bg-gradient-img  */}
          <RevealAnimation delay={0.1} direction="right" offset={200} start="top top">
            <figure className="pointer-events-none absolute top-[-800px] right-[-729px] size-[1200px] rotate-[-1deg] overflow-hidden select-none lg:top-[-720px]">
              <Image src={gradient31} alt="gradient" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
          <div className="relative z-10 space-y-10 lg:space-y-[70px]">
            {/* heading and btn  */}
            <div className="space-y-8 md:space-y-14">
              <div className="max-w-[681px] space-y-3 text-center md:text-left">
                <RevealAnimation delay={0.1}>
                  <h2>
                    Smarter investing starts with
                    <span className="text-primary-500"> innovative </span>tools.
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p className="mx-auto max-w-[448px] md:mx-0">
                    Discover a platform designed to simplify your financial journey while maximizing long-term growth.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.3}>
                <div className="text-center md:text-left">
                  <LinkButton
                    href="/features"
                    className="btn btn-secondary btn-md hover:btn-white dark:btn-transparent dark:hover:btn-accent mx-auto w-[85%] md:mx-0 md:w-auto"
                    aria-label="Browse all platform features">
                    Explore all features
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
            {/* feature list with img  */}
            <div className="mx-auto flex max-w-[1056px] flex-col items-center gap-10 lg:flex-row lg:gap-0">
              {/* left side features  */}
              <div className="mt-4 flex w-full flex-col gap-8 px-2 sm:mt-0 sm:px-0 md:flex-row lg:flex-col">
                {featureList.slice(0, 3).map((feature, index) => (
                  <RevealAnimation key={feature.id} delay={0.4 + index * 0.1} direction="left">
                    <div className="w-full space-y-3 md:max-w-[300px]">
                      <div className="inline-block overflow-hidden">
                        <span className={cn('text-secondary dark:text-accent text-[36px]', feature.icon)} />
                      </div>
                      <div>
                        <h3 id="passcode-policy-heading" className="text-heading-6 md:text-tagline-1 md:font-medium">
                          {feature.title}
                        </h3>
                        <p className="text-tagline-2">{feature.description}</p>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
              {/* feature img  */}
              <RevealAnimation delay={0.5}>
                <figure className="order-last w-full flex-shrink-0 lg:order-none lg:mt-[66px] lg:mr-6 lg:h-[620px] lg:w-[538.95px] xl:mt-5 xl:mr-0">
                  <Image
                    src={holdMobile}
                    alt="Investment platform interface showing key features"
                    className="size-full object-cover"
                  />
                </figure>
              </RevealAnimation>
              {/* right side feature  */}
              <div className="flex w-full flex-col gap-8 px-2 sm:px-0 md:flex-row lg:ml-4 lg:flex-col xl:ml-0">
                {featureList.slice(3).map((feature, index) => (
                  <RevealAnimation key={feature.id} delay={0.4 + index * 0.1} direction="right">
                    <div className="w-full space-y-3 md:max-w-[300px]">
                      <div className="inline-block overflow-hidden">
                        <span className={cn('text-secondary dark:text-accent text-[36px]', feature.icon)} />
                      </div>
                      <div>
                        <h3 id="passcode-policy-heading" className="text-heading-6 md:text-tagline-1 md:font-medium">
                          {feature.title}
                        </h3>
                        <p className="text-tagline-2">{feature.description}</p>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
