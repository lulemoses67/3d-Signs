import { Link } from "react-router-dom";

const Featured = () => {
    return (
            <section className="reveal active fade-in bg-dark text-white">
                <div className="container">
                    <h3 className="section-title text-center">Lighting up Your Vision</h3>
                    <p className="text-center">[ Transforming brands with creative 3D, neon, and plate signage solutions ]</p>            
                    <div className='row-content row'>
                        <div className='col-4'>
                            <div className='gap-fix'>
                            <img src="https://3dsigns.vercel.app/assets/twentynine-BXb7T4s6.jpg" alt="hello" />
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='gap-fix'>
                            <img src="https://3dsigns.vercel.app/assets/thirteen-faICorYN.jpeg" alt="hello" />
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='gap-fix'>
                            <img src="https://3dsigns.vercel.app/assets/twentynine-BXb7T4s6.jpg" alt="hello" />
                            </div>
                        </div>
                    </div>
                    <div className="btn-group">
                        <Link className='btn-outline' to="/project"><i class="fa-solid fa-circle-arrow-right"></i>  Gallery</Link>
                    </div>
                </div>
            </section>
    );
}

export default Featured;
