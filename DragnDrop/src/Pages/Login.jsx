import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Styles/Login.css";
const Login = ({ updateUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);

    const navigate = useNavigate();

    const LogIn = async (e) => {
        e.preventDefault();
        if (email === "user@example.com" && password === "1Password") {
            updateUser({ email: email, password: password });
            navigate("/Home");
        } else {
            setErrorMessage(true);
        }
    };
    return (
        <div>
            <div className="Lcontainer">
                <h2>Welcome to Pets</h2>
                <form onSubmit={LogIn}>
                    <h3>Log In</h3>
                    <div className="inner_form">
                        <label htmlFor="">Email:</label>
                        <input
                            type="email"
                            placeholder="Enter Valid Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="inner_form">
                        <label htmlFor="">Password:</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {errorMessage ? (
                        <div className="error">Invalid Email or Password</div>
                    ) : null}
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
