import MotionSection from './MotionSection';
import { getHeaderContent } from './../lib/contentful';
import Image from 'next/image';
import BackgroundImage from './../../public/background.avif'

export default async function Header() {
  const header = await getHeaderContent();

  return (
    <MotionSection>
      <section id="home" className="section-bg-1 relative min-h-dvh flex flex-col items-center justify-center text-center p-8 ">

        <div className="absolute inset-0">
          <Image
            src={BackgroundImage}
            alt="Background image"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="z-10 relative opacity-100">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">{header.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{header.subtitle}</p>
          {header.ctaText && header.ctaLink && (
            <a href={header?.ctaLink} >
              <button type="button" className="cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                {header.ctaText}
              </button>
            </a>
          )}
        </div>
      </section>
    </MotionSection>
  );
}
