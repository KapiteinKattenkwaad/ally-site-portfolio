import { getWorkExamples } from './../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

export default async function Work() {
  const workExamples = await getWorkExamples();

  return (
      <section id="work" className="py-20 section-bg-4 staggered-scroll">
        <h2 className="text-4xl font-bold mb-16 text-center text-[var(--colorText)]">Examples of my work</h2>
        <div className="space-y-24 max-w-6xl mx-auto px-6 text-[var(--colorText)]/80">
          {workExamples.map((work, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-10 items-center fade-in-scroll"
              >
                <div className={`${isEven ? 'order-1' : 'order-2'}`}>
                  <Image
                    src={work.imageUrl}
                    alt={work.imageAlt}
                    width={600}
                    height={400}
                    className="rounded-xl object-cover w-full h-auto border-2 border-[var(--accent)]/30"
                  />
                </div>
                <div className={`prose prose-gray max-w-none ${isEven ? 'order-2' : 'order-1'} text-[var(--colorText)]/90`}>
                  <h3 className="text-2xl font-semibold">{work.title}</h3>
                  {documentToReactComponents(work.description)}
                </div>
              </div>
            );
          })}
        </div>
      </section>
  );
}
