
import { Link } from "react-router-dom";
import Featured from "./partials/Featured";
import Feedback from "./partials/Feedback";
import Hero from "./partials/Hero";
import TrustedBrands from "./partials/TrustedBrands";
import WhyUs from "./partials/WhyUs";

const Home = () => {
    return(
        <>
            <Hero />
            <section className="reveal fade-in bg-dark text-white">
                <div className="container">
                    <h3 className="section-title text-center">Ultimate Br<span className="text-primary">anding Partner</span></h3>
                    <p className="text-center">for you next Br<span className="text-primary">anding Solution</span></p>
                    <div className="row align-center justify-center text-center row-content">
                        <div className="col-2 d-none-xs">
                            <img src="https://3dsigns.vercel.app/assets/logose-g-_PP4Ut.svg" alt="hello" />
                        </div>
                        <div className="col-12 col-xs-12">
                            <div className="gap-fix">
                                <p>Our commitment to precision and innovation ensures that your brand stands out amidst the competition. From meticulously crafted pylons to captivating neon displays, our expert team delivers nothing short of perfection.</p>
                            </div>
                        </div>
                    </div>
                    <div className="btn-group">
                        <Link className='btn-outline' to="/contact"><i class="fa-solid fa-circle-arrow-right"></i> Get  Started</Link>
                    </div>
                </div>
            </section>
            <Featured />
            <WhyUs />
            <TrustedBrands />
            <Feedback />
        </>
    );
}

export default Home;