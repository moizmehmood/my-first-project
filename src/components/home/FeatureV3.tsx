import featureImg03Dark from '@public/images/ns-img-dark-149.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const FeatureV3 = () => {
  return (
    <section className="lg:[150px] lg:[90px] overflow-hidden pt-[50px] pb-16 md:pt-[100px] md:pb-20 xl:pt-[200px] xl:pb-[100px]">
      <div className="main-container">
        <div className="dark:bg-background-6 rounded-[20px] bg-white md:bg-[url('/images/ns-img-219.png')] md:bg-cover md:bg-top-left md:bg-no-repeat">
          <div className="relative pr-3.5 pl-7 max-lg:space-y-10 max-md:pt-10 md:py-10 lg:py-16 lg:pr-[42px] lg:pl-14">
            {/* content  */}
            <div className="mt-3 max-md:text-center md:ml-[390px] lg:ml-[490px] lg:max-w-[587px] xl:ml-[590px]">
              <div className="space-y-8 md:space-y-14">
                <div className="space-y-3">
                  <RevealAnimation delay={0.1}>
                    <h2 id="savings-heading">
                      Earn more on
                      <span className="text-primary-500"> your savings </span>
                    </h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <p className="lg:max-w-[518px]">
                      We don&apos;t just help you invest—we help you grow. Our users enjoy above-average returns, all
                      with lower fees and less hassle.
                    </p>
                  </RevealAnimation>
                </div>
                {/* link btn  */}
                <RevealAnimation delay={0.3}>
                  <div>
                    <LinkButton
                      href="/features"
                      rel="noopener noreferrer"
                      className="btn btn-secondary hover:btn-white dark:btn-transparent dark:hover:btn-accent btn-md mx-auto w-[85%] md:mx-0 md:w-auto"
                      aria-label="Learn more about our high-yield savings options">
                      Learn more
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>
            </div>
            {/* img  */}
            <RevealAnimation delay={0.3} direction="right" offset={100}>
              <figure className="top-[-10px] -left-6 mx-auto w-[340px] overflow-hidden min-[925px]:top-[-85px] sm:w-[450px] md:absolute md:mx-0 md:w-[450px] lg:top-[-90px] lg:w-[540px] xl:top-[-204px] xl:w-[670px]">
                <Image
                  src={featureImg03Dark}
                  alt="Savings growth visualization showing increasing returns"
                  className="size-full object-cover"
                  loading="lazy"
                />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureV3;
