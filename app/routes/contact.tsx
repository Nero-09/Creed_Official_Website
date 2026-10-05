import "./contact.css";
import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";

const members = [
    {   name: "Vos",
        role: "Creative Director & SEO strategist", 
        image: "https://i.pinimg.com/736x/05/78/16/05781612d2cbadf5e423cd0cef59b4f1.jpg",
    },
    {   name: "Joel", role: "Web Developer", 
        image: "https://images.unsplash.com/photo-1580920790557-43158492adb5?w=500&auto=format&fit=crop&q=90&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHVua25vd258ZW58MHx8MHx8fDA%3D",
    },
    {   name: "Peter", 
        role: "Photography/Videography", 
        image: "santosh.png",
    },
    {   name: "Indra", 
        role: "Content Strategist", 
        image: "/indra.png",
    }
];

export default function Contact() {
    const heroRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const notificationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [muted, setMuted] = useState(true);
    const [notification, setNotification] = useState<{ x: number; y: number; message: string } | null>(null);

    useEffect(() => () => {
        if (notificationTimer.current) clearTimeout(notificationTimer.current);
    }, []);

    const toggleSound = (clientX: number, clientY: number) => {
        const video = videoRef.current;
        const hero = heroRef.current;
        if (!video || !hero) return;

        const nextMuted = !video.muted;
        video.muted = nextMuted;
        setMuted(nextMuted);

        const bounds = hero.getBoundingClientRect();
        setNotification({
            x: Math.min(Math.max(clientX - bounds.left, 70), bounds.width - 70),
            y: Math.min(Math.max(clientY - bounds.top, 32), bounds.height - 20),
            message: nextMuted ? "Sound off" : "Sound on",
        });

        if (notificationTimer.current) clearTimeout(notificationTimer.current);
        notificationTimer.current = setTimeout(() => setNotification(null), 1200);
    };

    const handleVideoClick = (event: MouseEvent<HTMLVideoElement>) => {
        toggleSound(event.clientX, event.clientY);
    };

    const handleVideoKeyDown = (event: KeyboardEvent<HTMLVideoElement>) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        const bounds = event.currentTarget.getBoundingClientRect();
        toggleSound(bounds.left + bounds.width / 2, bounds.top + bounds.height / 2);
    };

    return (
        <section className="contact" id="contact">

            {/* =================================================
                MAIN CONTACT / CTA — video background
            ================================================= */}

            <div className="contact-hero" ref={heroRef}>

                <video
                    ref={videoRef}
                    className="contact-hero-bg"
                    src="/dynamic.mp4"
                    autoPlay
                    muted={muted}
                    loop
                    playsInline
                    role="button"
                    tabIndex={0}
                    aria-label={muted ? "Unmute background video" : "Mute background video"}
                    onClick={handleVideoClick}
                    onKeyDown={handleVideoKeyDown}
                />

                {notification && (
                    <span
                        className="contact-sound-notification"
                        style={{ left: notification.x, top: notification.y }}
                        aria-live="polite"
                    >
                        {notification.message}
                    </span>
                )}

                <div className="contact-hero-content">

                    <span className="contact-label">
                        HAVE A PROJECT?
                    </span>

                    <h2>
                        Let's build something
                        <br />
                        worth remembering.
                    </h2>

                    <p>
                        Tell us what you're working on and let's
                        figure out how Creed can help your business
                        grow.
                    </p>

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

            </div>


            {/* =================================================
                CONTACT DETAILS + TEAM
            ================================================= */}

            <div className="contact-bottom">

                

                <div className="team">

                    <span className="contact-small-title">
                        THE TEAM
                    </span>

                    <div className="team-grid">

                        {members.map((member) => (
                            <div className="member" key={member.name}>
                                <img src={member.image} alt={member.name} />
                                <div className="member-info">
                                    <h3>{member.name}</h3>
                                    <p>{member.role}</p>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

                <div className="contact-details">

                    <span className="contact-small-title">
                        GET IN TOUCH
                    </span>

                    <div className="contact-links">

                        <a href="mailto:creed6626@gmail.com">
                            <span>Email</span>
                            creed6626@gmail.com
                        </a>

                        <a href="https://wa.me/9821859944" target="_blank" rel="noopener noreferrer">
                            <span>WhatsApp</span>
                            +977 9821859944
                        </a>

                        <a href="https://www.instagram.com/creed_marketing_studio" target="_blank" rel="noopener noreferrer">
                            <span>Instagram</span>
                            @creed_marketing_studio
                        </a>

                    </div>

                </div>

            </div>





        </section>
    );
}