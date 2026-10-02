import "./contact.css";

const members = [
    {
        name: "Member One",
        role: "Creative Director",
        image: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Member Two",
        role: "Web Developer",
        image: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Member Three",
        role: "Marketing",
        image: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Member Four",
        role: "Designer",
        image: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
];

export default function Contact() {
    return (
        <section className="contact" id="contact">

            {/* =================================================
                MAIN CONTACT / CTA
            ================================================= */}

            <div className="contact-hero">

                {/* Small label */}
                <span className="contact-label">
                    HAVE A PROJECT?
                </span>

                {/* Main heading */}
                <h2>
                    Let's build something
                    <br />
                    worth remembering.
                </h2>

                {/* Supporting text */}
                <p>
                    Tell us what you're working on and let's
                    figure out how Creed can help your business
                    grow.
                </p>

                {/* Main CTA */}
                <a
                    href="https://wa.me/9821859944"
                    className="contact-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Start a Conversation
                    <span>↗</span>
                </a>

            </div>


            {/* =================================================
                CONTACT DETAILS + TEAM
            ================================================= */}

            <div className="contact-bottom">

                {/* -------------------------
                    CONTACT DETAILS
                ------------------------- */}

                <div className="contact-details">

                    <span className="contact-small-title">
                        GET IN TOUCH
                    </span>

                    <div className="contact-links">

                        <a href="mailto:creed6626@gmail.com">
                            <span>Email</span>
                            creed6626@gmail.com
                        </a>

                        <a
                            href="https://wa.me/9821859944"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>WhatsApp</span>
                            +977 9821859944
                        </a>

                        <a
                            href="https://www.instagram.com/creed_marketing_studio"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>Instagram</span>
                            @creed_marketing_studio
                        </a>

                    </div>

                </div>


                {/* -------------------------
                    TEAM
                ------------------------- */}

                <div className="team">

                    <span className="contact-small-title">
                        THE TEAM
                    </span>

                    <div className="team-grid">

                        {members.map((member) => (

                            <div
                                className="member"
                                key={member.name}
                            >

                                <img
                                    src={member.image}
                                    alt={member.name}
                                />

                                <div className="member-info">

                                    <h3>
                                        {member.name}
                                    </h3>

                                    <p>
                                        {member.role}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>


            {/* =================================================
                FOOTER
            ================================================= */}

            <div className="contact-footer">

                <span>
                    © {new Date().getFullYear()} Creed Marketing Studio
                </span>

                <span>
                    Hetauda, Nepal
                </span>

            </div>

        </section>
    );
}