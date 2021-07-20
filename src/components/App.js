import Signup from "./Signup";
import Signin from "./Signin";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/signin" component={Signin} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
      {/* <Signin /> */}
    </Container>
  );
}

export default App;
