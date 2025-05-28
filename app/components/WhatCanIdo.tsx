import MotionSection from './MotionSection';
import { getWhatCanIDoSection } from './../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

export default async function WhatCanIDo() {
  const { title, content, imageUrl, imageAlt } = await getWhatCanIDoSection();

  return (
    <MotionSection delay={0.2} >
      <section id="whatcanido" className="py-20 bg-gray-50 section-bg-3">

        <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">
          What can I do for you?
        </h2>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={600}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{title}</h2>
            <div className="prose max-w-none text-gray-600 text-content">
              {documentToReactComponents(content)}
            </div>
          </div>
        </div>
      </section>
    </MotionSection>
  );
}
