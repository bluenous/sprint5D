import { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Container, Navbar } from "react-bootstrap";

const Login = () => {
  const clientId =
    "434732463460-7drm7l3pa40n17f6s309c3nd5233mhmn.apps.googleusercontent.com";

  const [name, setName] = useState("");

  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    setName(res.profileObj.givenName);
    setShowLoginButton(false);
    setShowLogoutButton(true);
  };

  const OnLoginFailure = (res) => {
    console.log("Login Failure", res);
  };

  const onSignOutSuccess = () => {
    alert("Signed Out success");
    setShowLoginButton(true);
    setShowLogoutButton(false);
  };

  return (
    <Container>
      {showLoginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Inicia sesión con Google"
          onSuccess={onLoginSuccess}
          onFailure={OnLoginFailure}
          cookiePolicy={"single_host_origin"}
        />
      ) : null}

      {showLogoutButton ? (
        <Container>
          <Navbar.Text>
            Hola, {name}{" "}
            <a href="#login">
              <GoogleLogout
                className="btn btn-primary"
                clientId={clientId}
                buttonText="Cerrar Sesión"
                onLogoutSuccess={onSignOutSuccess}
                cookiePolicy={"single_host_origin"}
              />
            </a>
          </Navbar.Text>
        </Container>
      ) : null}
    </Container>
  );
};

export default Login;
