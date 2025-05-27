import { getHeaderContent } from './../lib/contentful';
// import Image from 'next/image';

export default async function Header() {
  const header = await getHeaderContent();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-gray-100">
      {/* {header.backgroundImage && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={'https:' + header.backgroundImage.fields.file.url}
            alt="Background"
            fill
            className="object-cover opacity-30"
          />
        </div>
      )} */}
      <h1 className="text-5xl font-bold mb-4 text-gray-900">{header.title}</h1>
      <p className="text-xl text-gray-600 mb-6">{header.subtitle}</p>
      {header.ctaText && header.ctaLink && (
        <a
          href={header.ctaLink}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          {header.ctaText}
        </a>
      )}
    </section>
  );
}
