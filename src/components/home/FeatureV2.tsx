import heroBottomImage from '@public/images/ns-img-171.png';
import gradient12 from '@public/images/ns-img-504.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const FeatureV2 = () => {
  return (
    <section className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[120px] lg:pb-[90px] xl:pt-[154px] xl:pb-[100px]">
      <div className="main-container">
        <div className="relative z-0">
          <div className="dark:bg-background-8 absolute -z-10 h-full w-full overflow-hidden rounded-[20px] bg-white">
            <RevealAnimation delay={0.8} direction="right" start="top 50%">
              <figure className="pointer-events-none absolute -top-[125%] -right-[75%] -z-10 size-[1060px] rotate-[10deg] select-none sm:-top-[85%] md:-top-[65%] md:-right-[70%] md:rotate-[60deg] lg:-top-[170%] lg:-right-[40%]">
                <Image src={gradient12} alt="gradient" />
              </figure>
            </RevealAnimation>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="px-6 py-10 sm:flex-1/2 sm:px-0 sm:pl-10 lg:py-16 lg:pl-14">
              <div className="mx-auto mb-6 max-w-[420px] text-center sm:mb-10 md:mx-0 md:mb-14 md:text-left lg:max-w-[520px]">
                <RevealAnimation delay={0.1}>
                  <h2 className="mb-3">
                    Your financial <span className="text-primary-500">best interests</span>
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p className="text-secondary dark:text-accent">
                    Our mission is simple: help you grow your wealth with intelligent, goal-driven investment
                    strategies.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.3}>
                <div className="text-center sm:text-left">
                  <LinkButton
                    href="/services"
                    className="text-tagline-2 btn btn-secondary dark:btn-transparent hover:btn-primary dark:hover:btn-primary btn-md mx-auto w-[90%] font-medium md:mx-0 md:w-auto">
                    Learn More
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
            <div className="md:flex-1/2 lg:pe-16 2xl:pe-[150px]">
              <div className="relative h-full">
                <RevealAnimation delay={0.4} direction="left" offset={100}>
                  <figure className="mx-auto max-w-[250px] max-md:flex max-md:items-center max-md:justify-center sm:max-w-[400px] md:absolute md:right-0 md:bottom-0 md:mx-0 md:max-w-[325px] lg:max-w-[425px]">
                    <Image src={heroBottomImage} alt="shape" className="w-fill h-fill" />
                  </figure>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureV2;
