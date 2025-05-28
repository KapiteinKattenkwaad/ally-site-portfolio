import MotionSection from './MotionSection';
import { getServices } from './../lib/contentful';

export default async function Services() {
  const services = await getServices();

  return (
    <MotionSection delay={0.1} >
      <section id="services" className="py-20  text-center section-bg-2">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-900 tracking-tight">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto items-center justify-center">
          {services.map((service, idx) => (
            <div key={idx} className="...">
              {service.icon &&
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full text-3xl text-indigo-600">
                  <img src={service.icon?.fields?.file?.url} alt="" />
                </div>
              }
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </MotionSection>
  );
}
