import clientLogo10Dark from '@public/images/icons/client-logo-10-dark.svg';
import clientLogo10 from '@public/images/icons/client-logo-10.svg';
import clientLogo6Dark from '@public/images/icons/client-logo-6-dark.svg';
import clientLogo6 from '@public/images/icons/client-logo-6.svg';
import clientLogo7Dark from '@public/images/icons/client-logo-7-dark.svg';
import clientLogo7 from '@public/images/icons/client-logo-7.svg';
import clientLogo8Dark from '@public/images/icons/client-logo-8-dark.svg';
import clientLogo8 from '@public/images/icons/client-logo-8.svg';
import { getClientsData } from '@/lib/wordpress';
import clientLogo9Dark from '@public/images/icons/client-logo-9-dark.svg';
import clientLogo9 from '@public/images/icons/client-logo-9.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

export const clientLogos = [
  {
    id: 1,
    image: clientLogo6,
    imageDark: clientLogo6Dark,
  },
  {
    id: 2,
    image: clientLogo7,
    imageDark: clientLogo7Dark,
  },
  {
    id: 3,
    image: clientLogo8,
    imageDark: clientLogo8Dark,
  },
  {
    id: 4,
    image: clientLogo9,
    imageDark: clientLogo9Dark,
  },

  {
    id: 5,
    image: clientLogo10,
    imageDark: clientLogo10Dark,
  },
];

const getImageUrl = (value: unknown): string => {
  if (typeof value === 'string') {
    const trimmed = value.trim();
    return /^\d+$/.test(trimmed) ? '' : trimmed;
  }

  if (value && typeof value === 'object') {
    const image = value as { url?: unknown; source_url?: unknown };
    if (typeof image.url === 'string' && image.url.trim()) {
      return image.url.trim();
    }
    if (typeof image.source_url === 'string' && image.source_url.trim()) {
      return image.source_url.trim();
    }
  }

  return '';
};

const Clients = async () => {
  const clientsData = await getClientsData();
  const hasDynamicHeading = Boolean(clientsData?.clients_title?.trim() && clientsData.clients_highlight?.trim());
  const heading = hasDynamicHeading ? clientsData!.clients_title!.trim() : 'Trusted by';
  const highlightedHeading = hasDynamicHeading
    ? clientsData!.clients_highlight!.trim()
    : '100K+ Global Investors';
  const dynamicLogos = (Array.isArray(clientsData?.client_logos) ? clientsData.client_logos : []).flatMap(
    (logo, index) => {
      const image = getImageUrl(logo.logo);
      if (!image) {
        return [];
      }

      return [
        {
          id: `wordpress-${index}-${image}`,
          image,
          imageDark: getImageUrl(logo.logo_dark) || image,
          unoptimized: true,
        },
      ];
    },
  );
  const logos = dynamicLogos.length ? dynamicLogos : clientLogos.map((logo) => ({ ...logo, unoptimized: false }));

  return (
    <section className="py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container">
        <div className="space-y-8 md:space-y-14">
          <RevealAnimation delay={0.1}>
            <h2 className="text-center xl:text-heading-3">
              {heading}
              <span className="text-primary-500"> {highlightedHeading} </span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="space-y-4 md:space-y-8">
              <article className="relative max-w-[1200px] mx-auto">
                <div className="absolute left-0 top-0 h-full w-[8%] bg-gradient-to-r from-background-2 to-transparent dark:from-background-5 z-40" />
                <div className="absolute right-0 top-0 h-full w-[8%] bg-gradient-to-l from-background-2 to-transparent dark:from-background-5 z-40" />
                <Marquee pauseOnHover={true} autoFill={true}>
                  <div className="flex items-center justify-center gap-8">
                    {logos.map((logo, index) => (
                      <figure key={`${logo.id}-${index}`} className="min-w-[140px] md:min-w-[201px] ml-8">
                        <Image
                          src={logo.image}
                          alt="Client company logo"
                          width={201}
                          height={80}
                          unoptimized={logo.unoptimized}
                          className="h-20 w-[201px] object-contain dark:hidden"
                        />
                        <Image
                          src={logo.imageDark}
                          alt="Client company logo"
                          width={201}
                          height={80}
                          unoptimized={logo.unoptimized}
                          className="h-20 w-[201px] object-contain hidden dark:block"
                        />
                      </figure>
                    ))}
                  </div>
                </Marquee>
              </article>
              <article className="relative max-w-[900px] mx-auto">
                <div className="absolute left-0 top-0 h-full w-[3%] bg-gradient-to-r from-background-2 to-transparent dark:!from-background-5 z-40" />
                <div className="absolute right-0 top-0 h-full w-[3%] bg-gradient-to-l from-background-2 to-transparent dark:!from-background-5 z-40" />
                <Marquee pauseOnHover={true} autoFill={true} direction="right">
                  <div className="flex items-center justify-center gap-8">
                    {logos.map((logo, index) => (
                      <figure key={`${logo.id}-${index}`} className="min-w-[140px] md:min-w-[201px] ml-8">
                        <Image
                          src={logo.image}
                          alt="Client company logo"
                          width={201}
                          height={80}
                          unoptimized={logo.unoptimized}
                          className="h-20 w-[201px] object-contain dark:hidden"
                        />
                        <Image
                          src={logo.imageDark}
                          alt="Client company logo"
                          width={201}
                          height={80}
                          unoptimized={logo.unoptimized}
                          className="h-20 w-[201px] object-contain hidden dark:block"
                        />
                      </figure>
                    ))}
                  </div>
                </Marquee>
              </article>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Clients;
