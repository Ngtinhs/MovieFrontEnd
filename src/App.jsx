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
import Register from "./Pages/dangky/Dangky";
const App = () => {
  const user = true;
  return (
    <Router>
      <switch>
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
      </switch>
    </Router>
  );
};

export default App;
