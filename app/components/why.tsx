import './why.css';

const reasons = [
    {
        number: "01",
        title: "One Agency. Every Marketing Need Covered.",
        description:
            "Most small businesses in Nepal end up hiring separate freelancers for branding, web design, and social media, losing time, consistency, and money in the process. Creed solves this with one dedicated team covering branding, website development, and social media marketing under transparent, upfront pricing.",
    },
    {
        number: "02",
        title: "Built for the Local Market.",
        description:
            "Creed is a Hetauda-based digital marketing agency built around the needs of local businesses. We understand the market, the customers, and the practical challenges businesses face when building their digital presence.",
    },
    {
        number: "03",
        title: "Strategy Meets Creativity.",
        description:
            "Good design gets attention, but good strategy gives that attention a purpose. Creed combines creative design with practical marketing strategies to help businesses communicate clearly and reach the right audience.",
    },
    {
        number: "04",
        title: "Built Around Your Growth.",
        description:
            "Every business is at a different stage. Instead of forcing every client into the same solution, Creed builds its services around where your business is now and where you want it to go.",
    },
];

export default function Why() {
    return (
        <section className="why-box">

            {/* LEFT SIDE */}
            <div className="why-title-box">

                <span className="why-label">
                    WHY CREED
                </span>

                <h2 className="why-title">
                    The Creed Difference
                </h2>

                <p className="why-description">
                    We're not an outsourced freelancer network or a
                    copy-paste template shop. Creed is a Hetauda-based
                    team that builds your branding, website, and social
                    media presence together, with honest pricing, real
                    accountability, and a genuine understanding of the
                    local market you're trying to reach.
                </p>

            </div>


            {/* RIGHT SIDE */}
            <div className="why-grid">

                {reasons.map((reason) => (

                    <article
                        className="why-item"
                        key={reason.number}
                    >

                        {/* VIDEO */}
                        <video
                            src="https://moneyincheck.org/video/doodle-4.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />

                        {/* TEXT CONTENT */}
                        <div className="why-item-content">

                            <h3>
                                {reason.title}
                            </h3>

                            <p>
                                {reason.description}
                            </p>

                        </div>

                    </article>

                ))}

            </div>

        </section>
    );
}