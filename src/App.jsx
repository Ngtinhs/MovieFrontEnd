import "./app.scss";
import Home from "./Pages/home/Home";
import Watch from "./Pages/watch/Watch";
import Dangky from "./Pages/dangky/Dangky";
import Dangnhap from "./Pages/dangnhap/Dangnhap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
         { user ? <Home /> : <Redirect to="register" />}
        </Route>
        <Route exact path="/register">
        { !user ? <Dangky /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/login">
        { !user ? <Dangnhap /> : <Redirect to="/" />}
        </Route>
        {user && (
          <>
            <Route path="/movies">
              <Home type="movie" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
