import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";
import Typewriter from "typewriter-effect";
import { GoDotFill } from "react-icons/go";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <div className="login">
      <div className="left-side">
        <div className="title">
          <p>noteSYNC</p>
        </div>
        <div className="TypeWriter">
          <GoDotFill size={25} style={{ marginRight: "10px" }} />
          <Typewriter
            options={{
              strings: [
                "Note. Organize. Thrive.",
                "Note Smart, Thrive Fast.",
                "Swift. Smart. Simple.",
                "Capture Ideas, Anywhere.",
                "Scribe. Sync. Simplify.",
                "Swift Notes, Big Ideas."

              ],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 80,
            }}
          />
        </div>
      </div>
      <div className="right-side">
        <div className="upper">
          <b>
            <h3
              style={{
                marginBottom: "100px",
                fontWeight: "700",
                fontSize: "30px",
              }}
            >
              Get Started
            </h3>
          </b>
          <Button
            variant="custom"
            style={{
              fontFamily: "sans-serif",
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "50px",
              width: "210px",
              marginRight: "10px",
              marginLeft: "50px ",
              backgroundColor: "rgb(60,70,255)",
              color: "white",
              fontWeight: "650",
            }}
            className="Button"
            onClick={handleLogin}
          >
            Log in
          </Button>
          <Button
            variant="custom"
            style={{
              fontFamily: "sans-serif",
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "50px",
              width: "210px",
              backgroundColor: "rgb(60,70,255)",
              color: "white",
              fontWeight: "650",
            }}
            onClick={handleLogin}
            className="Button"
          >
            Sign in
          </Button>
        </div>
        <div className="footer">
          <a href="" style={{ color: "#686875", fontSize: "small" }}>
            <p>Terms of use</p>
          </a>
          <p
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              color: "#686875",
              fontSize: "x-small",
            }}
          >
            |
          </p>
          <a href="" style={{ color: "#686875", fontSize: "small" }}>
            <p>Privacy Policy</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
