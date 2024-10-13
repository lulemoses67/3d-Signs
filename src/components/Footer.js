import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-white">
                <section>
                    <div className="container">
                        <h2 className="row align-center">
                            <div className="col-1">
                                <img src="https://3dsigns.vercel.app/assets/logose-g-_PP4Ut.svg" alt="hello" />
                            </div>
                            <div className="col-11">
                                <h1>3d Signs Uganda</h1>
                            </div>
                        </h2>
                        <p>We offer a comprehensive range of signage solutions, including eye-catching 3D signs, vibrant neon displays, sleek plate signs, and towering pylons. Whether youre looking to enhance your storefront, event space, or corporate office, we have the expertise to bring your vision to life.</p>
                        <div className="row row-content">
                            <div className="col-4 col-md-3 col-xs-12">
                                <div className="gap-fix">
                                    <h2>Shortcuts</h2>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/projects">Gallery</Link></li>
                                        <li><Link to="/services">Services</Link></li>
                                        <li><Link to="/contact">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4 col-md-3 col-xs-12">
                                <div className="gap-fix">
                                    <h2>Products</h2>
                                    <ul>
                                        <li><Link to="/">3d Signs</Link></li>
                                        <li><Link to="/about">Plyons</Link></li>
                                        <li><Link to="/projects">Plate Signs</Link></li>
                                        <li><Link to="/services">Neon Signs</Link></li>
                                        <li><Link to="/t&cs">FAQs</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4 col-md-6 col-xs-12">
                                <div className="gap-fix">
                                    <h2>Contact</h2>
                                    <p><i class="fa-solid fa-phone text-success"></i> <Link to="tel:+256 704280086">+256 704280086</Link></p>
                                    <p><i class="fab fa-whatsapp text-success"></i> <Link to="tel:+256 788252428">+256 788252428</Link></p>
                                    <p><i class="fa-solid fa-envelope text-success"></i> <Link to="dennisbwamiki77@gmail.com"> dennisbwamiki77@gmail.com</Link></p>
                                    <p><i class="fa-solid fa-location text-success"></i> Kamapla, Uganda</p>
                                    <p><i class="fab fa-facebook text-primary"></i> <Link to="3">3d Signs</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <p>Vynil 3d Signs</p>
                </div>
            </footer>
        </>
    );
}
export default Footer;