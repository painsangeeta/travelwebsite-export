import "./SignUpFormStyles.css";

function SignUpForm() {
  return (
    <>
      <div className="signform-container">
        <h1>Sign up to Tourism</h1>
        <form>
          <input placeholder="Your Name" />
          <input placeholder="Username" />
          <input placeholder="Email" />
          <input placeholder="Password" />
        </form>
        <button className="signup-btn">Create Account</button>

        <p className="text">Or login using</p>

        <div className="alt-login">
          <a href="/">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-google"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
