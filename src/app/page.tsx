import Blog from '@/components/home/Blog';
import Clients from '@/components/home/Clients';
import Contact from '@/components/home/Contact';
import CTA from '@/components/home/CTA';
import Feature from '@/components/home/Feature';
import FeatureV2 from '@/components/home/FeatureV2';
import FeatureV3 from '@/components/home/FeatureV3';
import Hero from '@/components/home/Hero';
import Investment from '@/components/home/Investment';
import Services from '@/components/home/Services';
import Testimonial from '@/components/home/Testimonial';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Investment Management - NextSaaS',
};

const page = () => {
  return (
   
      <main className="bg-background-2 dark:bg-background-5">
        <Hero />
        <Clients />
        <Feature />
        <FeatureV2 />
        <FeatureV3 />
        <Services />
        <Investment />
        <Testimonial />
        <Blog />
        <Contact />
        <CTA />
      </main>
     
  );
};

export default page;
