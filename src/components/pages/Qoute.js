import { TypeAnimation } from "react-type-animation";

const Qoute = () => {
    return (
        <>
            <section className="hero bg-primary text-white row align-center">
                <div className="container">
                    <div className="row-content text-center">
                        <h3 className="section-title">Get A Free Qoute</h3>
                        <p>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Tech News',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Gadget Reviews',
                                    1000,
                                    'Space and Planets',
                                    1000,
                                    'Tech Innovation',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                            </p>
                        <p>We are excited to give you a free quote about your next project. After filling out the form below, we will contact you for a free web consultation.</p>
                    </div>
                </div>
            </section>
            <section className="reveal active fade-in">
                <div className="container">
                    <div className="row justify-center row-content">
                        <div className="col-8">
                            <form>
                                <div className="form-element">
                                    <label htmlFor="fullname">Full name</label>
                                    <input type="text" name="fullname" id="fullname" placeholder="Full name" required />
                                </div>
                                <div className="form-element">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Email" required />
                                </div>
                                <div className="form-element">
                                    <label htmlFor="email">Service</label>
                                    <input type="text" name="email" id="email" placeholder="website, graphics, application" required />
                                </div>
                                <div className="form-element">
                                    <label htmlFor="email">Phone</label>
                                    <input type="number" name="number" id="email" placeholder="+256123456789" required />
                                </div>
                                <div className="form-element">
                                    <label htmlFor="message">Details</label>
                                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Details of your projects like colors" required></textarea>
                                </div>
                                <div className="btn-group-rt">
                                    <button type="submit" className="btn-primary"><i className="fa fa-angles-right"></i> Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Qoute;
