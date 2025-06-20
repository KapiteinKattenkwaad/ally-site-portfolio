import { getServices } from './../lib/contentful';
import Image from 'next/image';

export default async function Services() {
  const services = await getServices();

  return (

      <section
        id="services"
        className="staggered-scroll py-40 text-center section-bg-2"
      >
        <h2 className="text-4xl font-extrabold mb-12 text-[var(--colorText)] tracking-tight">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="fade-in-scroll bg-white/80 p-6 rounded-xl shadow-md border border-[var(--accent)]"
            >
              {service.icon && (
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-[var(--accent)]/20 rounded-full">
                  <Image
                    src={`https:${service.icon?.fields?.file?.url}`}
                    alt={service.icon?.fields?.file?.title ?? 'Icon'}
                    className="w-8 h-8 object-contain"
                    width="40"
                    height="40"
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2 text-[var(--colorText)]">{service.title}</h3>
              <p className="text-[var(--colorText)]/70 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

  );
}
