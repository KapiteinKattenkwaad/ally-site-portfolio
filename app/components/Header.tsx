import MotionSection from './MotionSection';
import { getHeaderContent } from './../lib/contentful';
// import Image from 'next/image';
// import BackgroundImage from './../../public/background.avif'

export default async function Header() {
  const header = await getHeaderContent();

  return (
    <MotionSection>
      <section id="home" className="section-bg-1 relative min-h-[70vh] flex flex-col items-center justify-center text-center p-8 ">

        {/* <div className="absolute inset-0">
          <Image
            src={BackgroundImage}
            alt="Background image"
            fill
            className="object-cover opacity-30"
          />
        </div> */}

        <div className="z-10 relative opacity-100">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight text-[var(--colorText)] c-blue-banner relative">{header.title}</h1>
          <div className="bg-blue-banner"></div>
          {/* <p className="text-xl text-gray-600 mb-6">{header.subtitle}</p>
          {header.ctaText && header.ctaLink && (
            <a href={header?.ctaLink} >
              <button type="button" className="cursor-pointer text-white bg-[var(--accent)] hover:bg-[var(--colorText)] focus:outline-none focus:ring-4 focus:ring-[var(--accent)]/30 font-semibold rounded-full text-base px-6 py-3 mb-2 transition-all">
                {header.ctaText}
              </button>
            </a>
          )} */}
        </div>
      </section>
    </MotionSection>
  );
}
