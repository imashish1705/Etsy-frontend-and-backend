import React, { Component } from 'react'
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
 class App extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
           <Switch>
           <Route exact path="/" component={LandingPage}/>
           <Route exact path="/facemask" component={FaceMask}/>
           <Route exact path="/jewellery" component={Jewellery}/>
           <Route exact path="/jewellery/:id" component={Showitems}/>
           </Switch>
           <Newsletter/>
           <Footer/>
           <FooterLine/>
           </div>
        )
    }
}
export default App;