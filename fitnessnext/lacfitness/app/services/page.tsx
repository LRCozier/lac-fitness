import { getServices } from '@/app/utils/graphql-utils';

const Services = async () => {
  const services = await getServices();

  return (
    <div className="section section-dark animate-fade-in">
      <div className="container">
        <div className="text-center">
          <h1 className="page-title">SERVICES</h1>
          <p className="section-text">No-nonsense training packages designed for serious results.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={service.id} className="service-card">
              <h3>{service.title}</h3>
              <p className="service-price">{service.price}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="/contact" className="btn btn-primary">{service.ctaText}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
