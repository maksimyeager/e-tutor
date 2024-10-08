import Navbar from "./components/Navbar";
import NavbarBanner from "./components/NavbarBanner";
import Hero from "./components/Hero";
import NumberCounter from "./components/NumberCounter";

const App = () => {
    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <NavbarBanner/>
            <Hero/>
            <NumberCounter/>
        </main>
    );
};

export default App;
