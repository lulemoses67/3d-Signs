import { Component } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home.js";
import About from './pages/About.js';
import Contact from './pages/Contact.js'
import NotFound from './pages/NotFound.js';
import Services from './pages/Services.js';
import Projects from './pages/Projects.js';
import TermsCondition from './pages/TermsCondition.js';
import Qoute from './pages/Qoute.js';

class MainComponent extends Component {
    state = {}
    render() {
        return(
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" Component={Home}/>
                        <Route path='/services' Component={Services} />
                        <Route path='/projects' Component={Projects} />
                        <Route path='/about' Component={About} />
                        <Route path='/t&cs' Component={TermsCondition} />
                        <Route path='/contact' Component={Contact} />
                        <Route path='/qoute' Component={Qoute} />
                        <Route path='/*' Component={NotFound} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        );
    }
}
export default MainComponent;