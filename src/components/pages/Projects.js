const Projects = () => {

    return ( 
        <>
            <section className="hero reveal active fade-in bg-dark text-white row align-center">
                <div className="container">
                    <div className="row-content">
                        <h3 className="section-title">Sample Products from Vynil</h3>
                        <p>Crafting stunning signage to elevate your brand's visibility and identity.</p>
                        <div className="btn-group-lt">
                            <button className="btn-outline">All</button>
                            <button className="btn-primary">Plyons</button>
                            <button className="btn-danger">Plate Signs</button>
                            <button className="btn-success">Neon</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="reveal fade-in bg-detail text-white">
                <div className="container">
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
                </div>
            </section>
        </>
     );
}
 

export default Projects;