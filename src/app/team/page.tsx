import CTA from '@/components/team/CTA';
import Experience from '@/components/team/Experience';
import Features from '@/components/team/Features';
import Teams from '@/components/team/Teams';
import Testimonial from '@/components/team/Testimonial';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Team - Investment Management || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Teams />
      <Experience />
      <Testimonial
        badgeText="What our users say"
        title="Hear from our customers about their experiences with us"
        classname="pt-20 md:pt-24 lg:pt-[150px] xl:pt-[200px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] bg-background-2 dark:bg-background-5"
      />
      <Features />
      <CTA />
    </main>
  );
};

export default page;
