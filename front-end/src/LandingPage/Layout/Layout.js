//import Navbar from "../Header/NavigationBar";
import "./Layout.css";
import {Route} from "react-router-dom";
function Layout(props) {
  return (
    <>
      <Route>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />
      </Route>
      <div>
        {props.children}
      </div>
    </>
  );
}

export default Layout;
