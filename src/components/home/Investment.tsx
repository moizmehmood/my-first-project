import investmentImage from '@public/images/ns-img-220.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Investment = () => {
  return (
    <section className="py-[25px] sm:py-[35px] md:py-[50px] lg:py-[75px] xl:py-[100px]">
      <div className="main-container">
        <div className="dark:bg-background-6 overflow-hidden rounded-2xl bg-white max-sm:px-7 max-sm:py-10 sm:rounded-3xl md:rounded-4xl md:py-2.5 md:pr-2.5 md:pl-[42px]">
          <div className="flex flex-col items-center gap-8 gap-y-12 md:grid md:grid-cols-12 lg:gap-0">
            <div className="col-span-12 w-full space-y-8 sm:max-w-[520px] sm:space-y-10 md:col-span-6 md:space-y-14">
              <div className="space-y-3 text-center md:text-left">
                <RevealAnimation delay={0.1}>
                  <h2>
                    Get your investment
                    <span className="text-primary-500"> right and secure </span>
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p className="w-full md:max-w-[464px]">
                    We work with you to create an investment plan tailored to your goals and tolerance for risk.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.3}>
                <div className="text-center md:text-left">
                  <LinkButton
                    href="/services"
                    rel="noopener noreferrer"
                    className="btn btn-white hover:btn-secondary btn-lg md:btn-xl dark:btn-transparent dark:hover:btn-accent w-full md:w-auto"
                    aria-label="Learn more about secure investment planning">
                    Learn more
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.4} offset={100} direction="right">
              <figure
                className="col-span-12 w-full overflow-hidden rounded-xl sm:rounded-[20px] md:col-span-6 md:max-w-[615px] md:rounded-3xl"
                aria-label="Investment planning visualization">
                <Image
                  src={investmentImage}
                  alt="Secure investment planning illustration showing portfolio diversification"
                  className="size-full object-cover"
                />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
