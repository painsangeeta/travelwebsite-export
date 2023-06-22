import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1476900543704-4312b78632f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWJvdXQlMjBwYWdlJTIwaW4lMjB0cmF2ZWwlMjB3ZWJzaXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        title="About"
        btnClass="hide"
      />

      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
