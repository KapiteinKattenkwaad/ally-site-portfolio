import MotionSection from './MotionSection';
import { getHeaderContent } from './../lib/contentful';

export default async function Header() {
  const header = await getHeaderContent();

  return (
    <MotionSection>
      <section id="home" className="section-bg-1 relative min-h-[70vh] flex flex-col items-center justify-center text-center p-8 ">
        <div className="z-10 relative opacity-100">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight text-[var(--colorText)] c-blue-banner relative">
            {header.title}
            </h1>
          <div className="bg-blue-banner"></div>
        </div>
      </section>
    </MotionSection>
  );
}
