import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
const TermsCondition = () => {
    return (
        <>
            <section className="reveal bg-dark active fade-in hero row align-center text-white">
                <div className="container">
                    <div className="row-content text-center">
                        <div>
                            <h2>illiminate your Brand</h2>
                            <h3 className='section-title'>Frequently Asked Questions</h3>
                            <p>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    '3D Signs',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Pylons',
                                    1000,
                                    'Plate Signs',
                                    1000,
                                    'Neon Signs',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                            </p>
                            <p>Elavate your brand with Vinyl experts with over <span className="x4">7+</span> year of Experience .</p>
                            <p>Join <span className="x4">500+</span> Brands that have chosen Vynil for their branding Solutions</p>
                            <div className="btn-group">
                                <Link to="/about" className="btn-outline">Contact Us</Link>
                                <Link to="/contact" className="btn-outline">About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-detail text-white'>
            <div className="container">
                <div className="row justify-center">
                    <div className="col-12">
                        <div className="gap-fix">
                            <h2>1. What types of signage do you offer ?</h2>
                            <p>We offer a comprehensive range of signage solutions, including eye-catching 3D signs, vibrant neon displays, sleek plate signs, and towering pylons. Whether youre looking to enhance your storefront, event space, or corporate office, we have the expertise to bring your vision to life.</p>
                        </div>
                        <hr/>
                    </div>
                    <div className="col-12">
                        <div className="gap-fix">
                            <h2>2. Can you customize signs to fit our brand s aesthetic ?</h2>
                            <p>Absolutely! We understand the importance of aligning your signage with your brand s identity. That s why we offer fully customizable solutions, allowing you to choose from a variety of materials, colors, sizes, and designs to ensure your signs reflect your brand s unique personality and style.</p>
                        </div>
                        <hr/>
                    </div>
                    <div className="col-12">
                        <div className="gap-fix">
                            <h2>3. What is the turnaround time for custom signage projects ?</h2>
                            <p>Turnaround times can vary depending on the scope and complexity of the project. We strive to deliver high-quality signage in a timely manner and will work closely with you to establish realistic timelines based on your specific needs and deadlines.</p>
                        </div>
                        <hr/>
                    </div>
                    <div className="col-12">
                        <div className="gap-fix">
                            <h2>4. Do you provide installation services for the signs ?</h2>
                            <p>Yes, we offer professional installation services to ensure your signs are safely and securely installed at your desired location. Our experienced team will handle every aspect of the installation process, from site preparation to final placement, allowing you to focus on other aspects of your business.</p>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default TermsCondition;
