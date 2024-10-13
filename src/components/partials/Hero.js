import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const Hero = () => {

    return (
        <>
            <section className="reveal active fade-in hero row align-center text-white" style={{'backgroundImage': `url("https://img.pikbest.com/wp/202343/graphic-design-abstract-inspiring-backgrounds-and-textures_9939893.jpg!sw800")`}}>
                <div className="container">
                    <div className="row-content text-center">
                        <div>
                            <h2>illiminate your Brand</h2>
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
        </>
    );
}
export default Hero;