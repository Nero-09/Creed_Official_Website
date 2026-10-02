import './service.css'

const services = [
  {
    number: "01",
    title: "Photography & Videography",
    description:
      "Capture your brand through professional photography, promotional videos, and engaging visual content.",
    tags: ["Product Shoots", "Reels", "Brand Films"],
    price: "From NPR 1,500",
  },
  {
    number: "02",
    title: "Social Media Management",
    description:
      "Build a consistent digital presence with creative content, strategic planning, and account management.",
    tags: ["Content Creation", "Strategy", "Management"],
    price: "From NPR 13,000/mo",
  },
  {
    number: "03",
    title: "Branding & Design",
    description:
      "Create a distinctive identity that communicates your brand's values and makes it recognizable.",
    tags: ["Logo Design", "Brand Identity", "Graphics"],
    price: "From NPR 10,000",
  },
  {
    number: "04",
    title: "Web Design & Development",
    description:
      "Design modern, responsive websites that help businesses build credibility and reach more customers.",
    tags: ["Websites", "UI/UX", "SEO"],
    price: "From NPR 20,000",
  },
];

export default function Services() {
  return (
    <section className="service-box" id="services">
      <div className="services">

        <div className="services-heading">
          <span>WHAT WE DO</span>
          <h2>
            Creative solutions.
            <br />
            Meaningful impact.
          </h2>
          <p>
            Everything your brand needs to stand out, connect, and grow, built for businesses in Nepal and beyond.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              {/* <span className="service-number">{service.number}</span> */}

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="service-footer">
                <span className="service-price">{service.price}</span>
                <a href="#contact" className="service-link">
                  Discuss your project <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}