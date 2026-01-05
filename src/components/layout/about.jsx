import { default as contactLinks } from "../../assets/generate/contact.json";

export default function About(){
    
    return(
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-header">
                    <h2>$ whoami</h2>
                </div>
                
                <div className="about-content">
                    <div className="about-left">
                        <div className="about-text">
                            <p>
                               I'm <span className="underline-animate">Wijdan Insania Kuncoro</span>, an <span className="underline-animate">Electrical Engineering</span> student with a passion for <span className="underline-animate">Web Development</span>, <span className="underline-animate">UI/UX design</span>, and <span className="underline-animate">IoT projects</span>. I'm also passionate about embedded systems engineering and exploring the impossible, for example creating java applications for legacy devices.
                            </p>
                        </div>

                        <div className="social-links">
                            {contactLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    title={link.msg}
                                >
                                    <i className={link.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="about-right">
                        <img src="/assets/img/id/me.webp" alt="Wijdan"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
