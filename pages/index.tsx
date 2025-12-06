import Head from 'next/head';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';

// This page is Server-Side Rendered by default in Next.js
// Components will be rendered on the server unless they have 'use client' directive
export default function Home() {
  return (
    <>
      <Head>
        <title>Elite Warrior Training - Forge Your Body Into a Weapon</title>
        <meta name="description" content="Elite warrior training program. No excuses. No weakness. Just raw power and unstoppable strength." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-black">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
}
