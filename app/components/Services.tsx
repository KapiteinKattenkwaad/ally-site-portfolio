import { getServices } from './../lib/contentful';

export default async function Services() {
  const services = await getServices();

  return (
    <section className="py-20 bg-white text-center" id="services">
      <h2 className="text-4xl font-bold mb-12 text-gray-900">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
      {services.map((service, idx) => (
        <div key={idx} className="...">
            {service.icon && <div className="text-4xl mb-4">
                <img src={service.icon?.fields?.file?.url} alt="" />
              </div>}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
        </div>
        ))}
      </div>
    </section>
  );
}
