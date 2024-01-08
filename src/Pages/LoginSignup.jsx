import "./CSS/LoginSignup.css";

const LoginSignup = () => {
    return (
        <div className="login-signup">
            <div className="login-signup-container">
                <h1>Sign Up</h1>
                <div className="login-signup-fields">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Continue</button>
                <p className="login-signup-login">
                    Already have an account? <span>Login</span>
                </p>
                <div className="login-signup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continue, I agree to the term and conditions</p>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
