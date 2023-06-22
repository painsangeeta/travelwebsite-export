import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SignUpImg from "../assets/rg.avif";
import SignUpForm from "../components/SignUpForm";

function SignUp() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={SignUpImg}
        title="Register Here!"
        btnClass="hide"
      />
      <SignUpForm />
      <Footer />
    </>
  );
}

export default SignUp;
