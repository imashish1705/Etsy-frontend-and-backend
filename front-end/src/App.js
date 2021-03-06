import React, {useEffect} from 'react'
import { Route,Switch } from 'react-router';
import LandingPage from "./LandingPages";
import FaceMask from "./Components/EveryDaySection/FaceMasksList";
//import NavBar from "./LandingPage/Header/NavigationBar";
import Jewellery from "./Components/Jewellery/JewelleryList";
import NavigationBar from "./LandingPage/Header/NavigationBar";
import Footer from "./LandingPage/Footer/Footer";
import FooterLine from "./LandingPage/Footer/FooterLine";
import Newsletter from './LandingPage/NewsLetter/NewsLetter';
import Showitems from "./Components/Jewellery/ShowItems";
//import CartList from "./Components/Cart/CartList";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, updateCart } from "./actions";
import Cart from "./Components/Cart/Cart";
 const App = (props)=> {

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    
    useEffect(() => {
      if (!auth.authenticate) {
        dispatch(isUserLoggedIn());
      }
    }, [auth.authenticate]);

        return (
            <div>
                <NavigationBar/>
           <Switch>
           <Route exact path="/" component={LandingPage}/>
           <Route exact path="/facemask" component={FaceMask}/>
           <Route exact path="/jewellery" component={Jewellery}/>
           <Route exact path="/jewellery/:id" component={Showitems}/>
           <Route exact path="/user/cart" component={Cart}/>
           </Switch>
           <Newsletter/>
           <Footer/>
           <FooterLine/>
           </div>
        )
    }

export default App;