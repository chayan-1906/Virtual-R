import {Navbar} from "./components/Navbar.jsx";
import {HeroSection} from "./components/HeroSection.jsx";
import {FeaturesSection} from "./components/FeaturesSection.jsx";
import {Workflow} from "./components/Workflow.jsx";
import {Pricing} from "./components/Pricing.jsx";
import {Testimonials} from "./components/Testimonials.jsx";
import {Footer} from "./components/Footer.jsx";

function App() {
    return (
        <>
            <Navbar/>
            <div className={'max-w-7xl mx-auto pt-20 px-6'}>
                <HeroSection/>
                <FeaturesSection/>
                <Workflow/>
                <Pricing/>
                <Testimonials/>
                <Footer/>
            </div>
        </>
    )
}

export default App
