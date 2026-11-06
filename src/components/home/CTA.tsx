import gradient8 from '@public/images/ns-img-500.png';
import gradient13 from '@public/images/ns-img-505.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = () => {
  return (
    <section className="dark:bg-background-6 relative overflow-hidden bg-white py-[170px]">
      {/* left gradient */}
      <RevealAnimation delay={0.1} offset={100} direction="left">
        <figure
          className="pointer-events-none absolute top-[-214px] left-[-100px] w-[400px] select-none lg:top-[-250px] lg:left-[-52px] lg:w-[500px] xl:top-[-295px] xl:left-[-52px] xl:w-[584px]"
          aria-hidden="true">
          <Image src={gradient8} alt="Decorative gradient background" className="size-full object-cover" />
        </figure>
      </RevealAnimation>
      <div className="main-container">
        <div className="space-y-14">
          {/* heading text  */}
          <div className="space-y-3">
            <RevealAnimation delay={0.1}>
              <h2 className="mx-auto max-w-[648px] text-center md:w-full">
                Let&apos;s build your future, one
                <span className="text-primary-500"> investment at a time. </span>
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="mx-auto max-w-[760px] text-center md:w-full">
                Let&apos;s build your future, one investment at a time. Whether you&apos;re just starting out or looking
                to expand your portfolio, every step you take today brings you closer to your goals.
              </p>
            </RevealAnimation>
          </div>
          {/* cta btn  */}
          <RevealAnimation delay={0.3}>
            <div className="text-center">
              <LinkButton
                href="/contact-us-page"
                rel="noopener noreferrer"
                className="btn btn-secondary hover:btn-white dark:btn-accent dark:hover:btn-white-dark btn-xl"
                aria-label="Schedule your complimentary investment strategy consultation">
                Book your free strategy call
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
      {/* right gradient */}
      <RevealAnimation delay={0.4} direction="right" offset={100}>
        <figure
          className="pointer-events-none absolute right-2.5 bottom-[-50px] w-[200px] select-none lg:w-[300px] xl:bottom-[-72px] xl:w-[409px]"
          aria-hidden="true">
          <Image src={gradient13} alt="Decorative gradient background" className="size-full object-cover" />
        </figure>
      </RevealAnimation>
    </section>
  );
};

export default CTA;
