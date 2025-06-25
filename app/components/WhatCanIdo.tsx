import MotionSection from './MotionSection';
import { getWhatCanIDoSection } from './../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

export default async function WhatCanIDo() {
  const { content, imageUrl, imageAlt } = await getWhatCanIDoSection();

  return (
    <MotionSection delay={0.2} >
      <section id="whatcanido" className="py-20 section-bg-3 bg-[var(--pink-bg)] relative">
        <h2 className="text-4xl font-bold mb-16 text-center text-[var(--colorText)]">
          What exactly can I do for your business?
        </h2>
        <div className="max-w-xl mx-auto px-6">
        {imageUrl && (
          <div>
            <Image
              src={'https:' + imageUrl}
              alt={imageAlt}
              width={250}
              height={300}
              className="c-floating-image"
            />
          </div> 
        )}
          <div>
            <div className="prose max-w-none text-[var(--colorText)]/80 text-content">
              {documentToReactComponents(content)}
            </div>
          </div>
        </div>
      </section>
    </MotionSection>
  );
}
