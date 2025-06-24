import MotionSection from './MotionSection';
import { getWhatCanIDoSection } from './../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

export default async function WhatCanIDo() {
  const { title, content, imageUrl, imageAlt } = await getWhatCanIDoSection();

  return (
    <MotionSection delay={0.2} >
      <section id="whatcanido" className="py-20 section-bg-3">
        <h2 className="text-4xl font-bold mb-16 text-center text-[var(--colorText)]">
          What exactly can I do for your business?
        </h2>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={600}
              height={400}
              className="rounded-xl object-cover border-2 border-[var(--accent)]/30"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <div className="prose max-w-none text-[var(--colorText)]/80 text-content">
              {documentToReactComponents(content)}
            </div>
          </div>
        </div>
      </section>
    </MotionSection>
  );
}
